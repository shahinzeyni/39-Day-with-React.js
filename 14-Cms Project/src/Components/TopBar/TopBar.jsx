import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import SettingsSuggestSharpIcon from '@mui/icons-material/SettingsSuggestSharp';
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className='topbar'>
        <div className="topbar-wraper">
            <div className="topbar_left">
                <span className="logo">ShM❤</span>
            </div>
            <div className="topbar_right">
                <div className="topIconContainer">
                    <NotificationsIcon />
                    <div className="topIconBadge">2</div>
                </div>
                <div className="topIconContainer">
                    <LanguageSharpIcon />
                    <div className="topIconBadge">2</div>
                </div>
                <div className="topIconContainer">
                    <SettingsSuggestSharpIcon />
                </div>
                <img src="./logo192.png" alt="" className='avatar' />
            </div>
        </div>
    </div>
  )
}
