import React from 'react';
import moment from 'moment';
import TimeNode from './Components/TimeNode';
import EmptyContent from '../EmptyContent/EmptyContent';
import FontAwesome from 'react-fontawesome';
import delay from '../../functions';

// date consts
const now = moment(new Date);
const yesterday = new Date().setDate(new Date().getDate() - 1);
const startOfThisWeek = moment().startOf('isoWeek');
const midnightYesterday = moment().subtract(1, 'days').startOf('day');
const startOfThisMonth = moment().startOf('month');
const startOfLastMonth = moment().subtract(1, 'months').startOf('month');
const aYearAgo = moment().subtract(1, 'years').startOf('day');

// filters notes from this view
function isThisView(view, note) {
  return note.views.indexOf(view) >= 0;
}

// filters notes actioned today
function isToday(n) {
  var noteTime = moment(n.data.updatedTime);

  if (noteTime.isSame(now, "day")) {
    return noteTime;
  }
}

// filters notes actioned today
function isYesterday(n) {
  var noteTime = moment(n.data.updatedTime);

  if (noteTime.isSame(yesterday, "day")) {
    return noteTime;
  }
}

// filters notes actioned this week
function isThisWeek(n) {
  var noteTime = moment(n.data.updatedTime);

  return noteTime.isBetween(startOfThisWeek, midnightYesterday);
}

// filters notes actioned this month
function isThisMonth(n) {
  var noteTime = moment(n.data.updatedTime);

  return noteTime.isBetween(startOfThisMonth, startOfThisWeek);
}

// filter notes from last month
function isLastMonth(n) {
  var noteTime = moment(n.data.updatedTime);

  return (noteTime.isBetween(startOfLastMonth, startOfThisMonth) && noteTime.isBetween(startOfThisMonth, yesterday));
}

// filters notes actioned a few months ago
function isAFewMonths(n) {
  var noteTime = moment(n.data.updatedTime);

  return noteTime.isBetween(startOfLastMonth, startOfThisMonth);
}

// filters notes actioned over year ago
function isAYear(n) {
  var noteTime = moment(n.data.updatedTime);

  return noteTime.isBefore(aYearAgo);
}

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.refreshNoteList = this.refreshNoteList.bind(this);

    this.state = {
      notes: props.notes.filter(isThisView.bind(null, props.viewName))
    };
  }

  loadNotes() {
    let { loadNoteList, query, viewName } = this.props;

    if (query != undefined) {
      loadNoteList(viewName, query);
    } else {
      loadNoteList(viewName);
    }
  }

  refreshNoteList(e) {
    e.preventDefault();
    let { ui } = this.props;
    if (ui.noteView.isLoading) return;
    this.loadNotes();
  }

  renderTodaysNotes(notes) {
    let filteredNotes = notes.filter(isToday);
    if (filteredNotes.length > 0) {
      return <TimeNode filteredNotes={notes} title="Today" {...this.props} />
    }
    return;
  }

  renderYesterdaysNotes(notes) {
    let filteredNotes = notes.filter(isYesterday);
    if (filteredNotes.length > 0) {
      return <TimeNode filteredNotes={filteredNotes} title="Yesterday" {...this.props} />
    }
    return;
  }

  renderThisWeeksNotes(notes) {
    let filteredNotes = notes.filter(isThisWeek);
    if (filteredNotes.length > 0) {
      return <TimeNode filteredNotes={filteredNotes} title="This week" {...this.props} />
    }
    return;
  }

  renderThisMonthsNotes(notes) {
    let filteredNotes = notes.filter(isThisMonth);
    if (filteredNotes.length > 0) {
      return <TimeNode filteredNotes={filteredNotes} title="This month" {...this.props} />
    }
    return;
  }

  renderAFewMonthsNotes(notes) {
    let filteredNotes = notes.filter(isAFewMonths);
    if (filteredNotes.length > 0) {
      return <TimeNode filteredNotes={filteredNotes} title="A few months ago" {...this.props} />
    }
    return;
  }

  renderAYearsNotes(notes) {
    let filteredNotes = notes.filter(isAYear);
    if (filteredNotes.length > 0) {
      return <TimeNode filteredNotes={filteredNotes} title="A year ago" {...this.props} />
    }
    return;
  }

  renderNoteList() {
    let { emptyNotes, ui, viewName } = this.props;
    let { notes } = this.state;

    // order the notes by updatedDate
    notes.sort(function (left, right) {
      return moment.utc(right.data.updatedTime).diff(moment.utc(left.data.updatedTime))
    });

    if (notes.length <= 0) {
      return (
        <EmptyContent emptyContent={emptyNotes} />
      )
    } else {
      return (
        <div className="note-list">
          {this.renderTodaysNotes(notes)}
          {this.renderYesterdaysNotes(notes)}
          {this.renderThisWeeksNotes(notes)}
          {this.renderThisMonthsNotes(notes)}
          {this.renderAFewMonthsNotes(notes)}
          {this.renderAYearsNotes(notes)}
        </div>
      )
    }
  }

  checkIfViewNeedsUpdating() {
    let { noteViews, viewName } = this.props;

    // only load view again if older than 60 seconds
    if (noteViews === undefined ||
      noteViews[viewName] === undefined ||
      moment().subtract(60, 'seconds') > moment(noteViews[viewName].timeFetched)) {
      this.loadNotes();
    }
  }

  isLoading() {
    let { noteViews, viewName, ui } = this.props;
    let { notes } = this.state;

    if (ui.noteView.isLoading) {
      return true;
    }

    if (!noteViews[viewName] || (noteViews[viewName].length > 0 && notes.length == 0)) {
      return true;
    }

    return false;
  }

  componentWillReceiveProps(nextProps) {
    let { notes, viewName } = this.props;

    if (notes != nextProps.notes || viewName != nextProps.viewName) {
      this.setState({
        notes: nextProps.notes.filter(isThisView.bind(null, nextProps.viewName))
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.viewName != prevProps.viewName) {
      this.checkIfViewNeedsUpdating();
    }
  }

  componentWillMount() {
    this.checkIfViewNeedsUpdating();
  }

  render() {
    return (
      <div>
        <button onClick={this.refreshNoteList} className="pull-right btn btn-toolbar btn-sm">{this.isLoading() ? <FontAwesome name="refresh" spin /> : <FontAwesome name="refresh" />}</button>
        {this.state.notes.length > 0 ? this.renderNoteList() : undefined}
        {this.isLoading() ? <p className="text-center text-uppercase fancy light">Loading...</p> : undefined}
      </div>
    )
  }
}

export default NoteList;
