import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import Topnav from "../../Topnav/Topnav";
import "./EditProject.scss";

const EditProject = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [project, setProject] = useState(null);
  const { id } = useParams();

  const editProject = async (formData) => {
    try {
      const response = await fetch(
        `http://localhost:4000/projects/edit/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data = await response.json();

      return data;
    } catch (error) {}
  };

  const handleClick = async () => {
    const formData = new FormData();

    formData.append("title", title || project.title);
    formData.append("category", category || project.category);
    formData.append(
      "short_description",
      shortDescription || project.short_description
    );
    formData.append("description", description || project.description);

    if (file) {
      for (let image of file) {
        formData.append("files", image);
      }
    } else {
      formData.append("files", project.image_path);
    }

    const response = await editProject(formData);
  };

  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await fetch(`http://localhost:4000/projects/${id}`);

        const data = await response.json();
        setProject(data.project);
      } catch (error) {}
    }
    fetchProject();
  }, []);

  return (
    <>
      <Topnav />
      <div className="container">
        <Sidebar />
        <div className="newProduct">
          <h1 className="addProductTitle">Edit Project</h1>
          <div className="addProductForm">
            <div className="addProductItem">
              <label>Image</label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files)}
              />
            </div>
            <div className="addProductItem">
              <label>Title</label>
              <input
                name="title"
                type="text"
                placeholder="Project Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="addProductItem">
              <label>Category</label>
              <input
                name="category"
                type="text"
                placeholder="Project Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="addProductItem">
              <label>Short Description</label>
              <input
                name="short_description"
                type="text"
                placeholder="short description..."
                onChange={(e) => setShortDescription(e.target.value)}
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <textarea
                name="description"
                id=""
                cols="30"
                rows="10"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <button className="addProductButton" onClick={handleClick}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProject;
