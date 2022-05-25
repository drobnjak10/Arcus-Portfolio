import React from 'react'
import './Landing.scss'

const Landing = ({isActive, setIsActive}) => {

  
  return (
    <div className='section landing' id='home'>
      <div className="overlay">
        <div className="text">
          <h1>Arhitektura & Dizajn</h1>
        </div>
      </div>
      <div className={`left ${isActive && 'active'}`} onClick={() => setIsActive(!isActive)}>
        <div className="hamburger">
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  )
}

export default Landing