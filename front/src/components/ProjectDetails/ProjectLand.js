import React from 'react'
import './ProjectLand.scss'
import { IoArrowBackSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'


const ProjectLand = ({ isActive, setIsActive, project }) => {

    return (
        <div className='section project-land' id='project-land' style={{ backgroundImage: `url('/projects/${project.image_path}')` }}>
            <div className="overlay">
                <div className="text">
                    <h1>{ project.title }</h1>
                    <span> { project.category } / { project.title } </span>
                </div>
            </div>
            <div className={`left ${isActive && 'active'}`} onClick={() => setIsActive(!isActive)}>
                <div className="hamburger">
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
            <Link to="/" className='back-btn'>
                <IoArrowBackSharp size={25} />
            </Link>
        </div>
    )
}

export default ProjectLand