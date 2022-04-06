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
      <div className='NumberOfEvents' style= {{ position:"relative", overflow:"auto"}}> 
         <label> Show <input
          type="number"
          onChange={this.handleInputChange} 
          value={numberOfEvents} 
          className="numberOfEvents"
        /> events per page </label>
        <ErrorAlert text ={this.state.errorText}/>
      </div>
      
    );
  } 
}

export default NumberOfEvents;