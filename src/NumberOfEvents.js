import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

    state = {
		numberOfEvents: '20',
    errorText:''
	}

	handleInputChange = (event) => {
		const value = event.target.value;
    if (value <= 0 || value > 20) {
      this.setState({
        numberOfEvents: value,
        errorText:"Please enter a number from 1 to 20"
      });
      } else {
      this.setState({
        numberOfEvents: value,
        errorText:""
      });
    }
    this.props.updateNumberofEvents(value);
	};

  render() {
    const { numberOfEvents } = this.state;

    return (
      <div className='NumberOfEvents' style= {{ marginRight:"0px", marginLeft:"1400px", position:"relative", marginBottom:"0px", overflow:"auto"}}> 
        <p> Change number of events per page </p> 
        <input
          type="number"
          onChange={this.handleInputChange} 
          value={numberOfEvents} 
          className="numberOfEvents"
        />
        <ErrorAlert text ={this.state.errorText}/>
      </div>
    );
  } 
}

export default NumberOfEvents;