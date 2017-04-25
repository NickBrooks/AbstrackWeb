import React from 'react';
import moment from 'moment';
import TimeNode from './Components/TimeNode';
import EmptyNoms from './Components/EmptyNoms';
import FontAwesome from 'react-fontawesome';

var now = moment();

//filters noms actioned today
function isToday(n) {
  var nomTime = moment(n.createdTime);
  var timeDiff = now.diff(nomTime, 'days');

  return timeDiff == 0;
}

//filters noms actioned this week
function isThisWeek(n) {
  var nomTime = moment(n.createdTime);
  var timeDiff = now.diff(nomTime, 'days');

  return (timeDiff > 0) && (timeDiff <= 7);
}

//filters noms actioned this month
function isThisMonth(n) {
  var nomTime = moment(n.createdTime);
  var timeDiff = now.diff(nomTime, 'days');

  return (timeDiff > 7) && (timeDiff <= 30);
}

//filters noms actioned a few months ago
function isAFewMonths(n) {
  var nomTime = moment(n.createdTime);
  var timeDiff = now.diff(nomTime, 'days');

  return (timeDiff > 30) && (timeDiff <= 365);
}

//filters noms actioned over year ago
function isAYear(n) {
  var nomTime = moment(n.createdTime);
  var timeDiff = now.diff(nomTime, 'days');

  return (timeDiff > 365);
}

class NomList extends React.Component {
  constructor(props) {
    super(props);
    this.refreshNomList = this.refreshNomList.bind(this);
  }

  refreshNomList(e) {
    e.preventDefault();
    let { ui, loadNomList } = this.props;
    if (ui.nomView.isLoading) { return null }

    loadNomList();
  }

  renderTodaysNoms(noms) {
    console.log(Object.prototype.toString.call(noms).slice(8, -1));
    let filteredNoms = noms.filter(isToday);
    if (filteredNoms.length > 0) {
      return <TimeNode noms={filteredNoms} title="Today" />
    }
    return;
  }

  renderThisWeeksNoms(noms) {
    let filteredNoms = noms.filter(isThisWeek);
    if (filteredNoms.length > 0) {
      return <TimeNode noms={filteredNoms} title="This week" />
    }
    return;
  }

  renderThisMonthsNoms(noms) {
    let filteredNoms = noms.filter(isThisMonth);
    if (filteredNoms.length > 0) {
      return <TimeNode noms={filteredNoms} title="This month" />
    }
    return;
  }

  renderAFewMonthsNoms(noms) {
    let filteredNoms = noms.filter(isAFewMonths);
    if (filteredNoms.length > 0) {
      return <TimeNode noms={filteredNoms} title="A few months ago" />
    }
    return;
  }

  renderAYearsNoms(noms) {
    let filteredNoms = noms.filter(isAYear);
    if (filteredNoms.length > 0) {
      return <TimeNode noms={filteredNoms} title="A year ago" />
    }
    return;
  }

  renderNomList() {
    const { noms, emptyNoms, ui } = this.props;

    if (noms.length < 1 && !ui.nomView.isLoading) {
      return (
        <EmptyNoms emptyNoms={emptyNoms} />
      )
    }

    if (!ui.nomView.isLoading) {
      return (
        <div className="nom-list">
          {this.renderTodaysNoms(noms)}
          {this.renderThisWeeksNoms(noms)}
          {this.renderThisMonthsNoms(noms)}
          {this.renderAFewMonthsNoms(noms)}
          {this.renderAYearsNoms(noms)}
        </div>
      )
    }

    return undefined;
  }

  componentWillMount() {
    let { loadNomList, nomViews, noms, viewName } = this.props;

    // only load view again if older than 60 seconds
    if (nomViews === undefined ||
      nomViews[viewName] === undefined ||
      moment().subtract(60, 'seconds') > moment(nomViews[viewName].timeFetched)) {
      loadNomList();
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
