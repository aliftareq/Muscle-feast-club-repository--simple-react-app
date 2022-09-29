import React from 'react';
import './Personalinfo.css'
import image from '../../Resources/alif.jpg'

const Personalinfo = () => {
    return (
        <div className='person-info'>
            <div>
                <img src={image} alt="" />
                <div>
                    <strong>Alif Hossain</strong> <br />
                    Chittagong,Bangladesh
                </div>
                <div className='shape-info'>
                    <div>
                        <strong>56</strong><small>kg</small> <br />
                        Weight
                    </div>
                    <div>
                        <strong>5.7</strong> <br />
                        Height
                    </div>
                    <div>
                        <strong>23</strong><small>yrs</small> <br />
                        Age
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Personalinfo;