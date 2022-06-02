import { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineClose,
} from "react-icons/ai";
import "./Portfolio.scss";

const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState("");
  const [images, setImages] = useState([]);

  const displayModal = (e) => {
    const src = e.target.nextSibling.getAttribute("src");
    setCurrentImage(src);
  };

  const changeCurrentImage = (direction) => {
    let current = images.findIndex((item) => {
      return item.image_path === currentImage;
    });

    console.log("current", current, images[current].image_path);

    if (direction === "next") {
      current += 1;
      if (current >= images.length) {
        setCurrentImage(images[0].image_path);
      } else {
        setCurrentImage(images[current].image_path);
      }
    }

    if (direction === "prev") {
      current -= 1;
      if (current < 0) {
        setCurrentImage(images[images.length - 1].image_path);
      } else {
        setCurrentImage(images[current].image_path);
      }
    }
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
    <main className="portfolio section" id="portfolio">
      <div className={`image-modal ${currentImage && "active"}`}>
        <div className="img">
          <AiOutlineClose
            size={50}
            color={"#000"}
            className="icon"
            style={{
              color: "#fff",
            }}
            onClick={() => setCurrentImage(null)}
          />
          <img src={`/gallery/${currentImage}`} className="big-image" alt="" />
          <AiOutlineArrowRight
            style={{
              zIndex: 999,
              color: "#fff",
              position: "absolute",
              right: "10px",
              top: "45%",
              cursor: "pointer",
            }}
            size={50}
            onClick={() => changeCurrentImage("next")}
          />
          <AiOutlineArrowLeft
            style={{
              zIndex: 999,
              color: "#fff",
              position: "absolute",
              left: "10px",
              top: "45%",
              cursor: "pointer",
            }}
            size={50}
            onClick={() => changeCurrentImage("prev")}
          />
        </div>
      </div>

      <div className="title">
        <h1>Portfolio</h1>
      </div>

      <div className="grid-container">
        <div className="column">
          <div className="img">
            <div className="overlay" onClick={displayModal}></div>
            <img src="/images/project4.jpg" height={630} alt="" />
          </div>
          <div className="img">
            <div className="overlay" onClick={displayModal}></div>
            <img src="/images/project2.jpg" height={270} alt="" />
          </div>
          <div className="img">
            <div className="overlay" onClick={displayModal}></div>
            <img src="/images/project3.jpg" alt="" height={400} />
          </div>
        </div>

        <div className="column">
          <div className="img">
            <div className="overlay" onClick={displayModal}></div>
            <img src="/images/home.jpg" alt="" height={270} />
          </div>
          <div className="img">
            <div className="overlay" onClick={displayModal}></div>
            <img src="/images/projec54.jpg" alt="" height={570} />
          </div>
          <div className="img">
            <div className="overlay" onClick={displayModal}></div>
            <img src="/images/sarska.jpg" alt="" height={460} />
          </div>
        </div>

        <div className="column item-3">
          <div className="img">
            <div className="overlay" onClick={displayModal}></div>
            <img src="/images/project1.jpg" alt="" height={450} />
          </div>
          <div className="img">
            <div className="overlay" onClick={displayModal}></div>
            <img src="/images/landing.jpg" alt="" height={270} />
          </div>
          <div className="img">
            <div className="overlay" onClick={displayModal}></div>
            <img src="/images/home.jpg" alt="" height={580} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
