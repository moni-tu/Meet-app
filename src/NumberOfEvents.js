import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
		numberOfEvents: '20',
	}

	handleInputChange = (event) => {
		const value = event.target.value;
		this.setState({
			numberOfEvents: value,
		});
	}

  render() {
    const { numberOfEvents } = this.state;

    return (
      <div className='NumberOfEvents' style= {{ marginRight:"0px", marginLeft:"1400px", position:"relative", marginBottom:"0px", overflow:"auto"}}> 
        <p> Change number of events per page </p> 
        <input
            type="number"
            onChange={this.handleInputChange} 
            value={numberOfEvents} 
            className="numberOfEvents"/>
          
      </div>
    );
  }
}

export default NumberOfEvents;