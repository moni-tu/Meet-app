import React, { Component } from "react";

class Event extends Component {

state = {
    collapsed: true,
}

handleClick = () => {
    this.setState({
        collapsed: !this.state.collapsed
    });
};

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return <div className="event">
        {/* info shown by default */}
        <h2 className="summary">{event.summary}</h2>
        <p className="start-date">
            {event.start.dateTime} ({event.start.timeZone})
        </p>
        <p className="location">
            {event.location}
        </p>

        {!this.state.collapsed && (
          <div className="event__moreDetails">
            <p className="event__end">{event.end.dateTime}</p>
            <p className="event__description">{event.description}</p>
            <p className="event__location">{event.location}</p>
            <p className="event__calendarLink">{event.htmlLink}</p>
          </div>
        )}

        <button className={`${collapsed ? "show" : "hide"}-details`} onClick={this.handleClick}>{collapsed ? "Show Details" : "Hide Details"}</button>
    
    </div>;
  }
}
export default Event;
