import React from 'react'
import './ProjectDetails.scss'

const ProjectDetails = () => {
  return (
    <div className='project-details section'>
      <div className="col">
        <div className="left">
          <div className="row-1">
            <img src="/images/project1.jpg" alt="" />
          </div>
          <div className="row-2">
            <div className="img-div">
              <img src="/images/project2.jpg" alt="" />
            </div>
            <div className="img-div">
              <img src="/images/project2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="description">
            Company non lorem ac erat suscipit bibendum. Nulla
            facilisi. Sedeuter nunc volutpat, mollis sapien vel,
            conseyer turpeutionyer masin libero sempe. Fusceler
            mollis augue sit amet hendrerit vestibulum.
            Duisteyerionyer venenatis lacus.
            Villa gravida eros ut turpis interdum ornare. Interdum
            et malesu they adamale fames ac anteipsu pimsine
            faucibus. Curabitur arcu site feugiat in torto
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectDetails