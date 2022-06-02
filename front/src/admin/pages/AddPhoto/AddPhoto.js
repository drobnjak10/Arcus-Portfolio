import { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Topnav from "../../Topnav/Topnav";

const AddPhoto = () => {
  const [file, setFile] = useState([]);
  const [error, setError] = useState(null);

  const addPhoto = async (formData) => {
    try {
      const response = await fetch("http://localhost:4000/gallery/add", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data && data.error) {
        setError(data.error);
        return;
      }

      setError(null);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let image of file) {
      formData.append("files", image);
    }

    const data = await addPhoto(formData);
  };

  return (
    <>
      <Topnav />
      <div className="container">
        <Sidebar />
        <div className="newProduct">
          <h1 className="addProductTitle">New Image</h1>
          <div className="addProductForm">
            <div className="addProductItem">
              <label>Image</label>
              <input
                type="file"
                id="file"
                multiple
                onChange={(e) => setFile(e.target.files)}
              />
            </div>

            <button
              className="addProductButton"
              onClick={handleClick}
              disabled={error ?? false}
              type="button"
            >
              Create
            </button>
            {error && (
              <div
                style={{
                  backgroundColor: "#b53622",
                  padding: "5px",
                  width: "80%",
                  color: "#fff",
                }}
              >
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPhoto;
