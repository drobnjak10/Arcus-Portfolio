import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import Topnav from "../../Topnav/Topnav";

const Gallery = () => {
  const [images, setImages] = useState([]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/gallery/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      await response.json();

      window.location.reload("/");
    } catch (error) {}
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:4000/gallery");
        const data = await response.json();
        setImages(data.images);
      } catch (error) {}
    }

    fetchData();
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
                <th>Image</th>
                <th>Created At</th>
                <th>
                  <Link to="/admin/gallery/add">
                    <button
                      className="productAddButton"
                      style={{
                        width: "100px",
                        marginRight: "20px",
                        padding: "10px",
                        background: 'green'
                      }}
                    >
                      Add Photo
                    </button>
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {images.length > 0
                ? images.map((image) => {
                    const date = new Date(image.created_at);
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
                      <tr key={image.id}>
                        <td>{image.id}</td>
                        <td>
                          <img
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                            src={`/gallery/${image.image_path}`}
                            width={100}
                            height={100}
                            alt=""
                          />
                        </td>
                        <td>{originalDate}</td>
                        <td>
                          <button
                            className="btn productListDelete"
                            onClick={() => handleDelete(image.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Gallery;
