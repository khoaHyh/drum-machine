import React, { Component } from 'react';
import DrumPad from './DrumPad';

// Pass in an array of objects to display through array.map
export default class DrumList extends Component {

    render() {
        const { sounds } = this.props;
        return(
            sounds.map((sound, i) => {
                return (
                    <DrumPad 
                        key={i}
                        id={sounds[i].id}
                        keyCode={sounds[i].keyCode}
                        keyboard={sounds[i].keyboard}
                        src={sounds[i].src}
                        // passed in from App.js to update display element
                        updateDisplay={this.props.updateDisplay}
                    />
                );
            })
        )
    }
}