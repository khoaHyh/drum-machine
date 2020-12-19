import React from 'react';

const DrumPad = ({ id, src }) => {
    return (
        <div className="drum-pad">
            <p>{id}</p>
            <p>{src}</p>
            
        </div>
    );
}

export default DrumPad;