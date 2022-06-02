import React from "react";
import "./Topnav.scss";
import { IoMdNotificationsOff } from 'react-icons/io'
import { GrLanguage } from 'react-icons/gr'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'


export default function Topnav() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/"><span className="logo">arcus design.</span></Link>
        </div>
        <div className="topRight">
          <Link to="/admin/projects/add">
            <button className="productAddButton" style={{ width: '150px', marginRight: '20px', padding: '10px' }}>Add Project</button>
          </Link>
          <div className="topbarIconContainer">
            <IoMdNotificationsOff />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            {/* <Language /> */}
            <GrLanguage />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <FiSettings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}