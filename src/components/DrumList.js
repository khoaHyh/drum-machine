import React from 'react';
import DrumPad from './DrumPad';

// Pass in an array of objects to display through array.map
const DrumList = ({ sounds }) => {
    return (
        <div className="drum-list">
            {
                // Only need the second parameter of array.map for index
                sounds.map((sound, i) => {
                    return (
                        <DrumPad 
                            id={sounds[i].id}
                            keyboard={sounds[i].keyboard}
                            src={sounds[i].src}
                        />
                    )
                })
            }
        </div>
    );
}

export default DrumList;