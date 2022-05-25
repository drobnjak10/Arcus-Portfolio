import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApiRequest } from '../../apiCalls';
import ProjectContact from '../../components/ProjectDetails/ProjectContact';
import ProjectDetails from '../../components/ProjectDetails/ProjectDetails';
import ProjectLand from '../../components/ProjectDetails/ProjectLand';
import './Project.scss';

const Project = () => {
    const [isActive, setIsActive] = useState(false);
    const { id } = useParams();

    const [project, setProject] = useState([]);

    useEffect(() => {
      const fetchProjects = async () => {
        const response = await getApiRequest(`/projects/${id}`)
        setProject(response.project)
      }
  
      fetchProjects()
    }, [])
  
    
    return (
        <div>
            <ProjectLand setIsActive={setIsActive} isActive={isActive} project={project} />
            <ProjectDetails />
            <ProjectContact />
        </div>
    )
}

export default Project