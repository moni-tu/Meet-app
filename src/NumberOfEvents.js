import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
		numberOfEvents: '32',
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
      <div className='NumberOfEvents'>
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