import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { cart } = props
    let exerciseTime = 0;
    let breakTime = 0;
    for (const item of cart) {
        exerciseTime = exerciseTime + item.time
    }
    return (
        <div className='exercise'>
            <div className='add-break'>
                <h4>Add A break</h4>
                <div className='buttons'>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>60s</button>
                </div>
            </div>
            <div className='exercise-details'>
                <h4>Exercise Details</h4>
                <div className='Exercise-boxes'>
                    <p><strong>Exercise Time</strong></p>
                    <p>{exerciseTime} seconds</p>
                </div>
                <div className='Exercise-boxes'>
                    <p><strong>Break Time</strong></p>
                    <p>{breakTime} seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Exercise;