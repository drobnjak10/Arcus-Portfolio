import React, { useState } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Count = ({ value }) => {
    const [scrollStatus, setScrollStatus] = useState(false)

    const change = isVisible => {
        setScrollStatus(isVisible)
    }
    
    return (
        <VisibilitySensor onChange={change}>
             <span className="number">
            {
                scrollStatus ?
                    <CountUp start={0} end={value} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                                +<span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp> : 0
            }
        </span>
        </VisibilitySensor>

    )
}

export default Count