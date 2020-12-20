import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const drumPadStyle = {
    border: "solid 1px black",
    borderRadius: "0.25rem",
    margin: "0.5rem",
    width: "2rem",
    height: "2rem",
}

const DrumPad = ({ id, keyboard, src }) => {
    return (
        <button id={id} className="drum-pad" style={drumPadStyle} >
            {keyboard}
            <ReactAudioPlayer src={src} />
        </button>
    );
}

export default DrumPad;