import React from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";

import { Link } from "react-router-dom";

import "./SideBar.css";


export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h1 className="sideBarTitle">Dashboard</h1>
          <ul className="sideBarList">
            <Link to="/home" className="sideBarLink">
              <li className="sideBarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sideBarListItem">
              <TimelineIcon className="sidebarIcon" />
              Line
            </li>
            <li className="sideBarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Analytics
            </li>
          </ul>
        </div>

        {/* ---------- */}
        <div className="sideBarMenu">
          <h1 className="sideBarTitle">Quic Menu</h1>
          <ul className="sideBarList">
            <Link to="/userlist" className="sideBarLink">
              <li className="sideBarListItem">
                <PermIdentityIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/newuser" className="sideBarLink">
              <li className="sideBarListItem">
                <StorefrontIcon className="sidebarIcon" />
                New User
              </li>
            </Link>
            <Link  to="/products" className="sideBarLink" >
            <li className="sideBarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              Products
            </li>
            </Link>
            <li className="sideBarListItem">
              <BarChartIcon className="sidebarIcon" />
              Transctions
            </li>
            <li className="sideBarListItem">
              <MailOutlineIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        {/* ---------- */}
        <div className="sideBarMenu">
          <h1 className="sideBarTitle">Notifications</h1>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <DynamicFeedIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sideBarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sideBarListItem">
              <MessageOutlinedIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        {/* ---------- */}
        <div className="sideBarMenu">
          <h1 className="sideBarTitle">Staff</h1>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <WorkOutlineIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sideBarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <ReportIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
