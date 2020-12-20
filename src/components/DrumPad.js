import React, { Component } from 'react';
// import ReactAudioPlayer from 'react-audio-player';

const drumPadStyle = {
    border: "solid 1px black",
    borderRadius: "0.25rem",
    margin: "0.5rem",
    width: "2rem",
    height: "2rem",
}

export default class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keypress", this.handleKeyPress);
    }

    handleKeyPress(event) {
        if (event.key === this.props.keyboard.toLowerCase()) {
            this.playSound();
        }
    }

    playSound() {
        this.sound.play();
    }

    render() {
        const { id, keyboard, src } = this.props;
        return (
            <button id={id} onClick={this.playSound} className="drum-pad" style={drumPadStyle}>
                {keyboard}
                <audio id={keyboard} className="clip" ref={(element) => {this.sound = element}}  src={src} />
            </button>
        );
    }
}

// const DrumPad = ({ id, keyboard, src }) => {
//     console.log(keyboard)
//     return (
//         <button id={id} className="drum-pad" style={drumPadStyle} >
//             {keyboard}
//             <ReactAudioPlayer src={src} />
//         </button>
//     );
// }

// export default DrumPad;