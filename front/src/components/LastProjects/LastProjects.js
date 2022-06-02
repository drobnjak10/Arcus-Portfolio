import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getApiRequest } from "../../apiCalls";
import "./LastProjects.scss";

const LastProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getApiRequest("/projects");

      setProjects(response.projects);
    };

    fetchProjects();
  }, []);

  const lastestProjects = projects
    .sort((project1, project2) => {
      return new Date(project2.created_at) - new Date(project1.created_at);
    })
    .slice(0, 3);

  return (
    <div className="last-projects">
      <div className="col">
        <h1>Poslednji projekti</h1>
      </div>
      <div className="col-flex">
        {lastestProjects.length &&
          lastestProjects?.map((project) => {
            return (
              <div className="card" key={project.id}>
                <Link
                  to={`/project/${project.id}`}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <div className="card-img">
                    <img src={`/projects/${project.image_path}`} alt="" />
                    <span>{project.category}</span>
                  </div>
                  <div className="card-text">
                    <h3 className="title">{project.title}</h3>
                    <div className="project-info">
                      <span className="category">{project.category}</span>
                      <span className="date">October 18, 2021 22</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LastProjects;
