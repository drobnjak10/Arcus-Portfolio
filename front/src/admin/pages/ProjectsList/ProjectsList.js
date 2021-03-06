import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import Topnav from "../../Topnav/Topnav";
import "./productList.scss";

function ProjectsList() {
  const [projects, setProjects] = useState([]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/projects/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      await response.json();

      window.location.reload("/");
    } catch (error) {}
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:4000/projects/");

        const data = await response.json();

        setProjects(data.projects);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Topnav />
      <div className="container">
        <Sidebar />
        <div className="productList">
          <Table striped bordered hover className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Short Description</th>
                <th>Description</th>
                <th>Image</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <React.Fragment>
                {projects.length > 0
                  ? projects.map((project) => {
                      const date = new Date(project.created_at);
                      const originalDate =
                        date.getFullYear() +
                        "-" +
                        date.getMonth() +
                        "-" +
                        date.getDate() +
                        "/" +
                        date.getHours() +
                        ":" +
                        date.getMinutes() +
                        ":" +
                        date.getSeconds();
                      return (
                        <tr key={project.id}>
                          <td>{project.id}</td>
                          <td>{project.title} </td>
                          <td>{project.category} </td>
                          <td>{project.short_description}</td>
                          <td>{project.description.slice(0, 50) + "..."}</td>
                          <td>
                            <img
                              style={{
                                objectFit: "cover",
                                objectPosition: "center",
                              }}
                              src={`/projects/${project.image_path}`}
                              width={100}
                              height={100}
                              alt=""
                            />
                          </td>
                          <td>{originalDate}</td>
                          <td>
                            <Link
                              to={`/admin/projects/edit/${project.id}`}
                              project={project}
                              className="btn productListEdit"
                            >
                              Edit
                            </Link>
                            <button
                              className="btn productListDelete"
                              onClick={() => handleDelete(project?.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </React.Fragment>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default ProjectsList;
