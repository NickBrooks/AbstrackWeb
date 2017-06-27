import React from 'react';
import moment from 'moment';
import TimeNode from './Components/TimeNode';
import EmptyContent from '../EmptyContent/EmptyContent';
import FontAwesome from 'react-fontawesome';
import delay from '../../functions';

var now = moment();

//filters notes from this view
function isThisView(view, note) {
  return note.views.indexOf(view) >= 0;
}

//filters notes actioned today
function isToday(n) {
  var noteTime = moment(n.data.updatedTime);
  var timeDiff = now.diff(noteTime, 'days');
  console.log(now, noteTime);
  
  if(noteTime.isSame(new Date(), "day")) {
    return noteTime;
  }
}

//filters notes actioned today
function isYesterday(n) {
  var noteTime = moment(n.data.updatedTime);
  var timeDiff = now.diff(noteTime, 'days');

  return timeDiff == 1;
}

//filters notes actioned this week
function isThisWeek(n) {
  var noteTime = moment(n.data.updatedTime);
  var timeDiff = now.diff(noteTime, 'days');

  return (timeDiff > 1) && (timeDiff <= 7);
}

//filters notes actioned this month
function isThisMonth(n) {
  var noteTime = moment(n.data.updatedTime);
  var timeDiff = now.diff(noteTime, 'days');

  return (timeDiff > 7) && (timeDiff <= 30);
}

//filters notes actioned a few months ago
function isAFewMonths(n) {
  var noteTime = moment(n.data.updatedTime);
  var timeDiff = now.diff(noteTime, 'days');

  return (timeDiff > 30) && (timeDiff <= 365);
}

//filters notes actioned over year ago
function isAYear(n) {
  var noteTime = moment(n.data.updatedTime);
  var timeDiff = now.diff(noteTime, 'days');

  return (timeDiff > 365);
}

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.refreshNoteList = this.refreshNoteList.bind(this);

    this.state = {
      viewName: props.viewName
    }
  }

  loadNotes() {
    let { viewName } = this.state
    let { loadNoteList, query } = this.props;

    if (query != undefined) {
      loadNoteList(viewName, query);
    } else {
      loadNoteList(viewName);
    }
  }

  refreshNoteList(e) {
    e.preventDefault();
    let { ui, loadNoteList } = this.props;
    if (ui.noteView.isLoading) { return null }

    this.loadNotes();
  }

  renderTodaysNotes(notes) {
    let filteredNotes = notes.filter(isToday);
    if (filteredNotes.length > 0) {
      return <TimeNode filteredNotes={filteredNotes} title="Today" {...this.props} />
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
    let { notes, emptyNotes, ui, viewName } = this.props;
    let viewNotes = notes.filter(isThisView.bind(null, viewName));

    if (viewNotes.length < 1 && !ui.noteView.isLoading) {
      return (
        <EmptyContent emptyContent={emptyNotes} />
      )
    }

    if (viewNotes.length >= 1) {
      return (
        <div className="note-list">
          {this.renderTodaysNotes(viewNotes)}
          {this.renderYesterdaysNotes(viewNotes)}
          {this.renderThisWeeksNotes(viewNotes)}
          {this.renderThisMonthsNotes(viewNotes)}
          {this.renderAFewMonthsNotes(viewNotes)}
          {this.renderAYearsNotes(viewNotes)}
        </div>
      )
    }

    return undefined;
  }

  checkIfViewNeedsUpdating() {
    let { viewName } = this.state;
    let { noteViews } = this.props;

    // only load view again if older than 60 seconds
    if (noteViews === undefined ||
      noteViews[viewName] === undefined ||
      moment().subtract(60, 'seconds') > moment(noteViews[viewName].timeFetched)) {
      this.loadNotes();
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.state.viewName != newProps.viewName) {
      this.setState({ viewName: newProps.viewName });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.viewName != prevState.viewName) {
      this.checkIfViewNeedsUpdating();
    }
  }

  componentWillMount() {
    this.checkIfViewNeedsUpdating();
  }

  render() {
    const { ui } = this.props;

    return (
      <div>
        <button onClick={this.refreshNoteList} className="pull-right btn btn-toolbar btn-sm">{ui.noteView.isLoading ? <FontAwesome name="refresh" spin /> : <FontAwesome name="refresh" />}</button>
        {this.renderNoteList()}
        {ui.noteView.isLoading ? <p className="text-center text-uppercase fancy light">Loading...</p> : undefined}
      </div>
    )
  }
}

export default NoteList;
