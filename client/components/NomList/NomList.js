import React from 'react';
import moment from 'moment';
import TimeNode from './Components/TimeNode';
import EmptyContent from '../EmptyContent/EmptyContent';
import FontAwesome from 'react-fontawesome';

var now = moment();

//filters noms from this view
function isThisView(view, nom) {
  return nom.views.indexOf(view) >= 0;
}

//filters noms actioned today
function isToday(n) {
  var nomTime = moment(n.data.updatedTime);
  var timeDiff = now.diff(nomTime, 'days');

  return timeDiff == 0;
}

//filters noms actioned this week
function isThisWeek(n) {
  var nomTime = moment(n.data.updatedTime);
  var timeDiff = now.diff(nomTime, 'days');

  return (timeDiff > 0) && (timeDiff <= 7);
}

//filters noms actioned this month
function isThisMonth(n) {
  var nomTime = moment(n.data.updatedTime);
  var timeDiff = now.diff(nomTime, 'days');

  return (timeDiff > 7) && (timeDiff <= 30);
}

//filters noms actioned a few months ago
function isAFewMonths(n) {
  var nomTime = moment(n.data.updatedTime);
  var timeDiff = now.diff(nomTime, 'days');

  return (timeDiff > 30) && (timeDiff <= 365);
}

//filters noms actioned over year ago
function isAYear(n) {
  var nomTime = moment(n.data.updatedTime);
  var timeDiff = now.diff(nomTime, 'days');

  return (timeDiff > 365);
}

class NomList extends React.Component {
  constructor(props) {
    super(props);
    this.refreshNomList = this.refreshNomList.bind(this);
  }

  loadNoms() {
    let { loadNomList, query, viewName } = this.props;

    if (query != undefined) {
      loadNomList(viewName, query);
    } else {
      loadNomList(viewName);
    }
  }

  refreshNomList(e) {
    e.preventDefault();
    let { ui, loadNomList } = this.props;
    if (ui.nomView.isLoading) { return null }

    this.loadNoms();
  }

  renderTodaysNoms(noms) {
    let filteredNoms = noms.filter(isToday);
    if (filteredNoms.length > 0) {
      return <TimeNode filteredNoms={filteredNoms} title="Today" {...this.props} />
    }
    return;
  }

  renderThisWeeksNoms(noms) {
    let filteredNoms = noms.filter(isThisWeek);
    if (filteredNoms.length > 0) {
      return <TimeNode filteredNoms={filteredNoms} title="This week" {...this.props} />
    }
    return;
  }

  renderThisMonthsNoms(noms) {
    let filteredNoms = noms.filter(isThisMonth);
    if (filteredNoms.length > 0) {
      return <TimeNode filteredNoms={filteredNoms} title="This month" {...this.props} />
    }
    return;
  }

  renderAFewMonthsNoms(noms) {
    let filteredNoms = noms.filter(isAFewMonths);
    if (filteredNoms.length > 0) {
      return <TimeNode filteredNoms={filteredNoms} title="A few months ago" {...this.props} />
    }
    return;
  }

  renderAYearsNoms(noms) {
    let filteredNoms = noms.filter(isAYear);
    if (filteredNoms.length > 0) {
      return <TimeNode filteredNoms={filteredNoms} title="A year ago" {...this.props} />
    }
    return;
  }

  renderNomList() {
    let { noms, emptyNoms, ui, viewName } = this.props;
    let viewNoms = noms.filter(isThisView.bind(null, viewName));

    if (viewNoms.length < 1 && !ui.nomView.isLoading) {
      return (
        <EmptyContent emptyContent={emptyNoms} />
      )
    }

    if (viewNoms.length >= 1) {
      return (
        <div className="nom-list">
          {this.renderTodaysNoms(viewNoms)}
          {this.renderThisWeeksNoms(viewNoms)}
          {this.renderThisMonthsNoms(viewNoms)}
          {this.renderAFewMonthsNoms(viewNoms)}
          {this.renderAYearsNoms(viewNoms)}
        </div>
      )
    }

    return undefined;
  }

  componentWillMount() {
    let { nomViews, viewName } = this.props;

    // only load view again if older than 60 seconds
    if (nomViews === undefined ||
      nomViews[viewName] === undefined ||
      moment().subtract(60, 'seconds') > moment(nomViews[viewName].timeFetched)) {
      this.loadNoms();
    }
  }

  render() {
    const { ui } = this.props;

    return (
      <div>
        <button onClick={this.refreshNomList} className="pull-right btn btn-toolbar btn-sm">{ui.nomView.isLoading ? <FontAwesome name="refresh" spin /> : <FontAwesome name="refresh" />}</button>
        {this.renderNomList()}
        {ui.nomView.isLoading ? <p className="text-center text-uppercase fancy light">Loading...</p> : undefined}
      </div>
    )
  }
}

export default NomList;
