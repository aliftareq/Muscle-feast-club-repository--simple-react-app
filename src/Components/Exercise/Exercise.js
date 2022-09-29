import React from 'react';
import './Exercise.css'

const Exercise = () => {
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
                    <p>200 seconds</p>
                </div>
                <div className='Exercise-boxes'>
                    <p><strong>Break Time</strong></p>
                    <p>15 seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Exercise;