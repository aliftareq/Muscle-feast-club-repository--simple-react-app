import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Exercise from '../Exercise/Exercise';
import Personalinfo from '../Personalinfo/Personalinfo';
import './Body.css'

const Body = () => {
    const [activities, setactivities] = useState([])
    const [cart, setcart] = useState([])
    let [time, setTime] = useState(0)
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setactivities(data))
    }, [])

    const addTolist = (id) => {
        const selectedItems = activities.find(activity => activity.id === id)
        console.log(selectedItems)
        const newCart = [...cart, selectedItems]
        setcart(newCart)
    }
    const addBreakTime = (value) => {
        time = value;
        setTime(time)
    }
    return (
        <div className='body'>
            <div className="activities">
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                        clickHandler={addTolist}
                    ></Activity>)
                }
            </div>
            <div className="info">
                <Personalinfo></Personalinfo>
                <Exercise
                    cart={cart}
                    clickHandler2={addBreakTime}
                    time={time}>
                </Exercise>
            </div>
        </div>
    );
};

export default Body;