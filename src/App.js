import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 20,
    currentLocation: 'all',
    showWelcomeScreen: 'undefined'
  };

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = 
      (location === 'all') 
      ? events 
      : events.filter((event) => event.location === location);
      const shownEvents = locationEvents.slice(0, this.state.numberOfEvents);
      if (this.mounted) {
        this.setState({
          events: shownEvents,
          currentLocation: location,
        });
      }
    });
  }

  updateNumberofEvents = (newNumberOfEvents) => {
    this.setState({
      numberOfEvents: newNumberOfEvents
    });
    this.updateEvents(this.state.currentLocation);
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ 
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
          });
        }
      });
    }
  };
  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <NumberOfEvents updateNumberofEvents={this.updateNumberofEvents} numberOfEvents={this.state.numberOfEvents} /> 
        <EventList 
        events={this.state.events} 
        />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}getAccessToken={() => { getAccessToken() }} />
        
      </div>
    );
  }
}

export default App;
