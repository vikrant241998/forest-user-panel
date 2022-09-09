import React, { useState } from "react";
// import material ui icons
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import OfflineShareSharpIcon from "@mui/icons-material/OfflineShareSharp";
import GpsNotFixedSharpIcon from "@mui/icons-material/GpsNotFixedSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <DashboardSharpIcon />,
    },
    {
      path: "/devicelist",
      name: "DeviceList",
      icon: <OfflineShareSharpIcon />,
    },
    {
      path: "/locationlist",
      name: "LocationList",
      icon: <GpsNotFixedSharpIcon />,
    },
    {
      path: "/adddevice",
      name: "Add Device",
      icon: <EnhancedEncryptionIcon />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            <div className="profile-container">
              <div className="profile-logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="profile-text">
                <h4>Admin</h4>
                <h5>Forest Panel</h5>
              </div>
            </div>
          </h1>
          <div
            style={{ marginLeft: isOpen ? "30px" : "0px", fontSize: "18px" }}
            className="bars"
          >
            <MenuSharpIcon onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
