import React from 'react';
import moment from 'moment';
import TimeNode from './Components/TimeNode';
import EmptyNoms from './Components/EmptyNoms';

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

class NomDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTodaysNoms(noms) {
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
    const { nomList, emptyNoms, ui } = this.props;

    if (nomList.length < 1 && !ui.nomView.isLoading) {
      return (
        <EmptyNoms emptyNoms={emptyNoms} />
      )
    }

    return (
      <div className="nom-list">
        {this.renderTodaysNoms(nomList)}
        {this.renderThisWeeksNoms(nomList)}
        {this.renderThisMonthsNoms(nomList)}
        {this.renderAFewMonthsNoms(nomList)}
        {this.renderAYearsNoms(nomList)}
        {ui.nomView.isLoading ? <p className="text-center text-uppercase fancy light">Loading...</p> : undefined}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderNomList()}
      </div>
    )
  }
}

export default NomDisplay;
