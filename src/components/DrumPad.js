import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const DrumPad = ({ id, src }) => {
    return (
        <div className="drum-pad">
            <p>{id}</p>
            <p>{src}</p>
            <ReactAudioPlayer src={src} />
            <audio controls src={src} />
        </div>
    );
}

export default DrumPad;