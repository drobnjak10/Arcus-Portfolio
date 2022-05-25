import React, { useEffect, useRef, useState } from 'react'
import './Counter.scss'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Count from './Count';

const Counter = () => {
    const [scrollStatus, setScrollStatus] = useState(false)

    const change = isVisible => {
        console.log('isVisible')
        setScrollStatus(isVisible)
    }

    return (
        <div className='counter section'>
            <div className="row">
                <div className="col">
                    <Count value={100} />
                    <div className="text">
                        projekata
                    </div>
                </div>
                <div className="col">
                    <Count value={250} />

                    <div className="text">
                        logotipa
                    </div>
                </div>
                <div className="col">
                    <Count value={630} />

                    <div className="text">
                        klijenata
                    </div>
                </div>
                <div className="col">
                    <Count value={15} />

                    <div className="text">
                        firmi
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter