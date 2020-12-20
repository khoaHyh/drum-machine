import React, { Component } from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import DrumList from '../components/DrumList';
import sounds from '../sounds';

// when .drum-pad is triggered, a string describing the associated
//  audio clip is displayed as inner text of #display element

class App extends Component {
  constructor() {
    super();
    this.state = {
      innerText: ''
    }
    this.handleDisplay = this.handleDisplay.bind(this);
  }

  handleDisplay(name) {
    this.setState({
      innerText: name
    })
  }
 
  render() {
    const { innerText } = this.state;
    return (
      <div className="App">
        <ReactFCCtest />
        <div id="drum-machine">
          <div className="drum-container">
            <DrumList updateDisplay={this.handleDisplay} sounds={sounds} />
          </div>
          <p id="display">{innerText}</p>
        </div>
      </div>
    );
  }
}

export default App;
