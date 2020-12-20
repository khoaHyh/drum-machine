import React, { Component } from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import DrumList from '../components/DrumList';
import sounds from '../sounds';

// need 9 clickable .drum-pad elements inside #drum-machine
// within each .drum-pad there should be an html5 audio element
//  with a src attribute pointing to an audio clip with a class
//  a class name of clip. Also needs an id corresponding to the
//  inner text of its parent. E.g. .drum-pad id="Q", id="W"
// clicking on .drum-pad element triggers child audio element
// when .drum-pad is triggered, a string describing the associated
//  audio clip is displayed as inner text of #display element

class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="App">
        <ReactFCCtest />
        <div id="drum-machine">
          <div id="display"></div>
          <DrumList sounds={sounds} />
        </div>
      </div>
    );
  }
}

export default App;
