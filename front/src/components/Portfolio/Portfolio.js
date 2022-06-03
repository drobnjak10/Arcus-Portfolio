import { useCallback, useMemo, useRef } from "react";
import { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineClose,
} from "react-icons/ai";
import "./Portfolio.scss";

// event listener for gallery 
const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState("");
  const [images, setImages] = useState([]);

  const displayModal = (e) => {
    const src = e.target.nextSibling.getAttribute("src");
    setCurrentImage(src.split("/")[2]);
  };

  const allImages = useMemo(() => {
    return images?.map((image) => image);
  }, [images]);

  const changeCurrentImage = useCallback(
    (direction) => {
      let current = allImages.findIndex((item) => {
        return item.image_path === currentImage;
      });

      if (direction === "next") {
        current++;
        if (current >= allImages.length) {
          setCurrentImage(allImages[0]?.image_path);
        } else {
          setCurrentImage(allImages[current]?.image_path);
        }
      }

      if (direction === "prev") {
        current--;
        if (current < 0) {
          setCurrentImage(allImages[allImages.length - 1]?.image_path);
        } else {
          setCurrentImage(allImages[current]?.image_path);
        }
      }
    },
    [currentImage]
  );

  const handler = useCallback(({ key }) => {
    if(!currentImage) {
      return;
    }
    if (key === "ArrowRight") {
      changeCurrentImage("next");
    }

    if (key === "ArrowLeft") {
      changeCurrentImage("prev");
    }
  }, [currentImage]);

  
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:4000/gallery");
      const data = await response.json();
      setImages(data.images);
    } catch (error) {}
  }, [currentImage]);

  useEffect(() => {
    fetchData();
  }, []);
  
  useEventListener("keydown", handler);
  

  const copyImages = [...images];

  const firstColumn = copyImages.splice(0, 3) || null;
  const secondColumn = copyImages.splice(0, 3) || null;
  const thirdColumn = copyImages.splice(0, 3) || null;

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
        <div className="column first">
          {firstColumn?.length > 0 &&
            firstColumn.map((image, index) => {
              return (
                <div className="img" key={image.id}>
                  <div className="overlay" onClick={displayModal}></div>
                  <img
                    src={`/gallery/${image.image_path}`}
                    alt=""
                    className={`img-${index + 1}`}
                  />
                </div>
              );
            })}
        </div>

        <div className="column second">
          {secondColumn?.length > 0 &&
            secondColumn.map((image, index) => {
              return (
                <div className="img" key={image.id}>
                  <div className="overlay" onClick={displayModal}></div>
                  <img
                    src={`/gallery/${image.image_path}`}
                    alt=""
                    className={`img-${index + 1}`}
                  />
                </div>
              );
            })}
        </div>

        <div className="column third item-3">
          {thirdColumn?.length > 0 &&
            thirdColumn.map((image, index) => {
              return (
                <div className="img" key={image.id}>
                  <div className="overlay" onClick={displayModal}></div>
                  <img
                    src={`/gallery/${image.image_path}`}
                    alt=""
                    className={`img-${index + 1}`}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
