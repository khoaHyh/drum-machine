import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import DrumList from '../components/DrumList';
import sounds from '../sounds';
import { setDisplayField } from '../actions';

const mapStateToProps = state => {
  return {
    innerText: state.innerText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDisplay: (event) => dispatch(setDisplayField(event))
  }
}

class App extends Component {
 
  render() {
    const { innerText, handleDisplay } = this.props;
    return (
      <div className="App">
        <ReactFCCtest />
        <div id="drum-machine">
          <div className="drum-container">
            <DrumList updateDisplay={handleDisplay} sounds={sounds} />
          </div>
          <p id="display">{innerText}</p>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
