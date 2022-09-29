import React, { useEffect, useState } from 'react';
import { addToDb, getSavedTime } from '../../Resources/utilities/fakedb';
import Activity from '../Activity/Activity';
import Exercise from '../Exercise/Exercise';
import Personalinfo from '../Personalinfo/Personalinfo';
import './Body.css'

const Body = () => {
    //states
    const [activities, setactivities] = useState([])
    const [cart, setcart] = useState([])
    let [time, setTime] = useState(0)

    // use effect for fetching data from api
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setactivities(data))
    }, [])
    // useEffect for fetching data from local storage.
    useEffect(() => {
        const storedTime = getSavedTime()
        setTime(storedTime)
    }, [])

    const addTolist = (id) => {
        const selectedItems = activities.find(activity => activity.id === id)
        const newCart = [...cart, selectedItems]
        setcart(newCart)
    }
    const addBreakTime = (value) => {
        time = value;
        setTime(time)
        addToDb(value)
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