import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./ProjectDetails.scss";

const ProjectDetails = ({ project }) => {
  const [currentImage, setCurrentImage] = useState("");

  const images =
    project && project.image_path && project?.image_path.split("#");

  const displayModal = (e) => {
    const src = e.target.getAttribute("src");
    setCurrentImage(src);
  };

  if (!images) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-details section">
      <div className={`image-modal ${currentImage && "active"}`}>
        <div className="img">
          <AiOutlineClose
            size={30}
            color={"#000"}
            className="icon"
            onClick={() => setCurrentImage(null)}
          />
          <img src={currentImage} className="big-image" alt="" />
        </div>
      </div>
      <div className="col">
        <div className="left">
          <div className="row-1">
            <div className="img">
              <img
                src={`/projects/${images[0]}`}
                onClick={(e) => displayModal(e)}
                alt=""
              />
            </div>
            <div className="right">
              <div className="description">{project.description}</div>
            </div>
          </div>
          <div className="row-2">
            <div className="img-div">
              <img
                src={`/projects/${images[1]}`}
                alt=""
                onClick={(e) => displayModal(e)}
              />
            </div>
            <div className="img-div">
              <img
                src={`/projects/${images[2]}`}
                alt=""
                onClick={(e) => displayModal(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
