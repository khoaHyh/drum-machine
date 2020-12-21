import React, { Component } from 'react';
import './DrumPad.css';

class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    // EventListener for keypress
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    // Plays the appropriate sound upon keypress
    handleKeyPress(event) {
        if (event.keyCode === this.props.keyCode) {
            this.playSound();
        }
    }

    // Access audio element and play sound
    playSound() {
        this.sound.currentTime = 0;
        this.sound.play().catch(err => console.log(err));
        // Replaces any dashes in the id with spaces
        this.props.updateDisplay(this.props.id.replace('-', ' '));
    }

    render() {
        const { id, keyboard, src } = this.props;
        return (
            <button id={id} onClick={this.playSound} className="drum-pad">
                {keyboard}
                <audio 
                    id={keyboard} 
                    className="clip" 
                    ref={(element) => {this.sound = element}}  
                    src={src} 
                />
            </button>
        );
    }
}

export default DrumPad;
