import { useState } from 'react';
import {
    MdAttachMoney,
    MdBarChart, MdChatBubbleOutline, MdDynamicFeed, MdLogout, MdMailOutline, MdOutlineLineStyle, MdPermIdentity, MdReport, MdStorefront, MdTimeline,
    MdTrendingUp, MdWorkOutline
} from 'react-icons/md';
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useAuth } from '../../AuthContext';
import { UserActions } from '../../constants';
import "./Sidebar.scss";

export default function Sidebar() {
    const { state, dispatch } = useAuth();
    const cookies = new Cookies()
    const [tab, setTab] = useState(0)

    const logout = async () => {
        cookies.remove('access_token')
        dispatch({ type: UserActions.LOGOUT })
    }

    const onClick = (e) => {
        setTab(e.target.tabIndex)
        console.log(e.target)
    }

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/admin" className="link">
                            <li className={`sidebarListItem ${tab === 0 && 'active'}`} onClick={e => onClick(e)} tabIndex={0}>
                                <MdOutlineLineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className={`sidebarListItem ${tab === 1 && 'active'}`} tabIndex={1} onClick={e => onClick(e)}>
                            <MdTimeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem" tabIndex={2}>
                            <MdTrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem" tabIndex={3}>
                                <MdPermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/admin/projects" className="link">
                            <li className={`sidebarListItem ${tab === 4 && 'active'}`} onClick={e => onClick(e)} tabIndex={4}>
                                <MdStorefront className="sidebarIcon" />
                                Projects
                            </li>
                        </Link>
                        <Link to="/admin/portfolio" className='link'>
                            <li className={`sidebarListItem ${tab === 5 && 'active'}`} onClick={e => onClick(e)} tabIndex={5}>
                                <MdAttachMoney className="sidebarIcon" />
                                Portfolio
                            </li>
                        </Link>
                        <li className="sidebarListItem" tabIndex={6}>
                            <MdBarChart className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem" tabIndex={7}>
                            <MdMailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem" tabIndex={8}>
                            <MdDynamicFeed className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem" tabIndex={9}>
                            <MdChatBubbleOutline className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem" tabIndex={10}>
                            <MdWorkOutline className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem" tabIndex={11} >
                            <MdTimeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem" tabIndex={12} >
                            <MdReport className="sidebarIcon" />
                            Reports
                        </li>
                        <li className="sidebarListItem" onClick={logout} tabIndex={13}>
                            <MdLogout className="sidebarIcon" />
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}