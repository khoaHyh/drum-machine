import React, { Component } from 'react';

// Inline-styling for drum-pad
const drumPadStyle = {
    border: "solid 1px black",
    borderRadius: "0.25rem",
    margin: "0.5rem",
    width: "5.4rem",
    height: "5.4rem",
}

export default class DrumPad extends Component {
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
        this.props.updateDisplay(this.props.id.replace('-', ' '));
        // console.log(this.props.id);
    }

    render() {
        const { id, keyboard, src } = this.props;
        return (
            <button id={id} onClick={this.playSound} className="drum-pad" style={drumPadStyle}>
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
