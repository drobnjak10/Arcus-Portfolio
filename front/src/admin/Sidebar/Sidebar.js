import { useState } from "react";
import {
  MdAttachMoney,
  MdLogout,
  MdOutlineLineStyle,
  MdStorefront,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import "./Sidebar.scss";

export default function Sidebar() {
  const { logout } = useAuth();
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    logout();
    navigate("/");
  };

  const onClick = (e) => {
    setTab(e.target.tabIndex);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/admin" className="link">
              <li
                className={`sidebarListItem ${tab === 0 && "active"}`}
                onClick={(e) => onClick(e)}
                tabIndex={0}
              >
                <MdOutlineLineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/admin/projects" className="link">
              <li
                className={`sidebarListItem ${tab === 4 && "active"}`}
                onClick={(e) => onClick(e)}
                tabIndex={4}
              >
                <MdStorefront className="sidebarIcon" tabIndex={4} />
                Projects
              </li>
            </Link>
            <Link to="/admin/portfolio" className="link">
              <li
                className={`sidebarListItem ${tab === 5 && "active"}`}
                onClick={(e) => onClick(e)}
                tabIndex={5}
              >
                <MdAttachMoney className="sidebarIcon" />
                Portfolio
              </li>
            </Link>
            <Link to="/admin/gallery" className="link">
              <li
                className={`sidebarListItem ${tab === 2 && "active"}`}
                onClick={(e) => onClick(e)}
                tabIndex={2}
              >
                <MdAttachMoney className="sidebarIcon" />
                Gallery
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li
              className="sidebarListItem"
              onClick={logoutHandler}
              tabIndex={13}
            >
              <MdLogout className="sidebarIcon" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
