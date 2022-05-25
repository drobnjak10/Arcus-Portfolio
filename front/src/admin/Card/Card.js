import React from 'react'
import './Card.scss'
import { FcHome } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Card = ({ title, link }) => {
  return (
    <div className='card-section'>
      <Link to={link}>
        <div className="icon">
          <FcHome size={80} />
        </div>
        <div className="title">
          {title} Page
        </div>
        <div className="description">
          Customize your {title} page
        </div>
      </Link>
    </div>
  )
}

export default Card