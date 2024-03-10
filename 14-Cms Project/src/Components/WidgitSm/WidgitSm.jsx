import React from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./WidgitSm.css";
import { newMembers } from '../../datas';

export default function WidgitSm() {
  return (
    <div className="container-widget">
      <span className="widgetTitle">New Join Members</span>
      <ul className="widgetList">
        {newMembers.map((user) => (
          <li key={user.id} className="widgetListItem">
            <img src="./logo192.png" className="wigetPic" alt="14" />

            <div className="widgetUser">
              <span className="widgetUserName">{user.username}</span>
              <span className="widgetUserTitle">{user.title}</span>
            </div>
            <button className="widgetButton">
              <VisibilityIcon className="widgetIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
