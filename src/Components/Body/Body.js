import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Exercise from '../Exercise/Exercise';
import Personalinfo from '../Personalinfo/Personalinfo';
import Question from '../Questions/Question';
import './Body.css'

const Body = () => {
    const [activities, setactivities] = useState([])
    const [cart, setcart] = useState([])
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setactivities(data))
    }, [])

    const addTolist = (id) => {
        console.log('button clicked', id)
        const selectedItems = activities.find(activity => activity.id === id)
        console.log(selectedItems)
        const newCart = [...cart, selectedItems]
        setcart(newCart)
    }
    console.log(cart)
    //console.log(activities)
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
                    cart={cart}>
                </Exercise>
            </div>
        </div>
    );
};

export default Body;