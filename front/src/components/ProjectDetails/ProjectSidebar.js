import React from 'react'
import './ProjectSidebar.scss'

const ProjectSidebar = ({ isActive, setIsActive }) => {
  
    return (
      <div className={`sidebar-main-project ${isActive && 'active'}`}>
        <div className='sidebar-wrapp'>
          <div className="nav-logo">
            <img src="/images/arcus-logo.png" alt="" />
          </div>
          <div className="nav-link">
            <a href="#home" onClick={() => setIsActive(false)}>Početna</a>
          </div>
          <div className="nav-link">
            <a href="#about" onClick={() => setIsActive(false)}>O nama</a>
          </div>
          <div className="nav-link">
            <a href="#projects" onClick={() => setIsActive(false)}>Projekti</a>
          </div>
          <div className="nav-link">
            <a href="#services" onClick={() => setIsActive(false)}>Usluge</a>
          </div>
          <div className="nav-link">
            <a href="#gallery" onClick={() => setIsActive(false)}>Galerija</a>
          </div>
          <div className="nav-link">
            <a href="#contact" onClick={() => setIsActive(false)}>Kontakt</a>
          </div>
        </div>
      </div>
    )
}

export default ProjectSidebar