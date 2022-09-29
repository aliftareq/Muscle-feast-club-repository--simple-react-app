import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { cart, clickHandler2, time } = props
    let exerciseTime = 0;
    let breakTime = 0;
    if (time) {
        breakTime = time;
    }
    for (const item of cart) {
        exerciseTime = exerciseTime + item.time
    }
    return (
        <div className='exercise'>
            <div className='add-break'>
                <h4>Add A break</h4>
                <div className='buttons'>
                    <button onClick={() => clickHandler2(10)}>10s</button>
                    <button onClick={() => clickHandler2(20)}>20s</button>
                    <button onClick={() => clickHandler2(30)}>30s</button>
                    <button onClick={() => clickHandler2(40)}>40s</button>
                    <button onClick={() => clickHandler2(60)}>60s</button>
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