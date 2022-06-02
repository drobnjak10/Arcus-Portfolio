import React, { useEffect, useState } from "react";
import { getApiRequest } from "../../apiCalls";
import "./Leader.scss";

const Leader = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getApiRequest("/portfolio/");

      setInfo(response.portfolio[0]);
    }

    fetchData();
  }, []);

  return (
    <div className="section leader">
      <div className="title">
        <h1>Tim Lider</h1>
      </div>
      <div className="col">
        <div className="info">
          <div className="text">
            <span>{info?.career.toLowerCase()}</span>
            <span className="name">{info?.name}</span>
            <span className="desc">{info?.about}</span>
          </div>
          <div className="img">
            <img src={`/projects/${info?.image_path}`} alt="" />
            <div className="icons">
              <span className="icon">
                <a href={info?.facebook}>
                  <img src="/icons/facebook.png" alt="" />
                </a>
              </span>
              <span className="icon">
                <a href={info?.instagram}>
                  <img src="/icons/instagram.png" alt="" />
                </a>
              </span>
              <span className="icon">
                <a href={info?.linkedin}>
                  <img src="/icons/linkedin.png" alt="" />
                </a>
              </span>
              <span className="icon">
                <a href={info?.twitter}>
                  <img src="/icons/behance.png" alt="" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leader;
