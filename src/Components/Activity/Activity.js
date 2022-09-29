import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { img, name, trainer, time } = props.activity
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='activity-info'>
                <div>
                    <h5>Name : {name}</h5>
                    <p>Trainer : <strong>{trainer}</strong></p>
                    <p>Time : {time}</p>
                </div>
                <button>Add To List</button>
            </div>
        </div>
    );
};

export default Activity;