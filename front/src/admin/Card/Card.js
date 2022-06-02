import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ title, link, img }) => {
  return (
    <div
      className="card-section"
      style={{
        backgroundImage: `url('/images/${img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay">
        <Link to={link}>
          
          <div
            style={{
              fontSize: "2.4rem",
              color: "#fff",
              textTransform: "uppercase",
            }}
            className="title"
          >
            {title} Page
          </div>
          <div
            className="description"
            style={{ fontSize: "1.6rem", textTransform: "uppercase", color: '#a57d02' }}
          >
            Customize your {title} page
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
