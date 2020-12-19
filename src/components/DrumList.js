import React from 'react';
import DrumPad from './DrumPad';

const DrumList = ({ sounds }) => {
    return (
        <div className="drum-list">
            {
                sounds.map((sound, i) => {
                    return (
                        <DrumPad 
                            id={i}
                            src={sounds[i].src}
                        />
                    )
                })
            }
        </div>
    );
}

export default DrumList;