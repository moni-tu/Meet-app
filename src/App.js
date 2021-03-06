import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import WelcomeScreen from './WelcomeScreen';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EventGenre from './EventGenre';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 30,
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
    let isTokenValid;
    if (!accessToken && !navigator.onLine){
      isTokenValid = (await checkToken(accessToken)).error ? false : true;
      }
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
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch 
        locations={this.state.locations} 
        updateEvents={this.updateEvents}
        />
        <NumberOfEvents 
        updateNumberofEvents={this.updateNumberofEvents} 
        numberOfEvents={this.state.numberOfEvents} 
        /> 
        <h4>Events in each city</h4>

        <div className='data-vis-wrapper'>
          <EventGenre events={this.state.events}/>
          <ResponsiveContainer height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList 
        events={this.state.events} 
        />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}getAccessToken={() => { getAccessToken() }} />
        
      </div>
    );
  }
}

export default App;
