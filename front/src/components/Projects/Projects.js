import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getApiRequest } from '../../apiCalls'
import './Projects.scss'

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getApiRequest('/projects')

      setProjects(response.projects)
    }

    fetchProjects()
  }, [])

  const firstRow = projects.slice(0, 3)
  const secondRow = projects.slice(3, 7)

  return (
    <div className='projects' id='projects'>
      <div className="col">
        <h1>PROJEKTI</h1>
      </div>
      <div className="col-flex">
        <div className="row-one">
          {
            firstRow?.length && firstRow.map((project, index) => {

              return <div className={`img item-${index + 1}`} key={project.id}>
                <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: '#000' }}>
                  <img src={`/projects/${project.image_path}`} alt="" />
                  <div className="img-text">
                    <span className='category'>{project.category}</span>
                    <span className="text"> {project.title} </span>
                  </div>
                </Link>
              </div>
            })
          }

        </div>

        <div className="row-two">
          {
            secondRow?.length && secondRow.map((project, index) => {

              return <div className={`img item-${index + 1}`} key={project.id}>
                <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: '#000' }}>
                  <img src={`/projects/${project.image_path}`} alt="" />
                  <div className="img-text">
                    <span className='category'>{project.category}</span>
                    <span className="text"> {project.title} </span>
                  </div>
                </Link>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Projects