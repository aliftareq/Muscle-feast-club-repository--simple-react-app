import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Exercise from '../Exercise/Exercise';
import Personalinfo from '../Personalinfo/Personalinfo';
import Question from '../Questions/Question';
import './Body.css'

const Body = () => {
    const [activities, setactivities] = useState([])
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setactivities(data))
    }, [])
    console.log(activities)
    return (
        <div className='body'>
            <div className="activities">
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
            <div className="info">
                <Personalinfo></Personalinfo>
                <Exercise></Exercise>
            </div>
        </div>
    );
};

export default Body;