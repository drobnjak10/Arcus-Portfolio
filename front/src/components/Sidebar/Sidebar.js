import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import "./Sidebar.scss";

const Sidebar = ({ isActive, setIsActive }) => {
  const { user } = useAuth();

  return (
    <div className={`sidebar-main ${isActive && "active"}`}>
      <div className="sidebar-wrapp">
        <div className="nav-logo">
          <img src="/images/arcus-logo.png" alt="" />
        </div>
        <div className="nav-link">
          <a href="#home" onClick={() => setIsActive(false)}>
            Početna
          </a>
        </div>
        <div className="nav-link">
          <a href="#about" onClick={() => setIsActive(false)}>
            O nama
          </a>
        </div>
        <div className="nav-link">
          <a href="#projects" onClick={() => setIsActive(false)}>
            Projekti
          </a>
        </div>
        <div className="nav-link">
          <a href="#services" onClick={() => setIsActive(false)}>
            Usluge
          </a>
        </div>
        <div className="nav-link">
          <a href="#portfolio" onClick={() => setIsActive(false)}>
            Portfolio
          </a>
        </div>
        <div className="nav-link">
          <a href="#contact" onClick={() => setIsActive(false)}>
            Kontakt
          </a>
        </div>
        {user && (
          <div className="nav-link">
            <Link to="/admin" onClick={() => setIsActive(false)}>
              Admin
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
