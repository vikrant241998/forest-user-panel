import React from "react";
import HomeIcon from "@mui/icons-material/Home";
// import icons from Material Ui
import PowerSettingsNewSharpIcon from "@mui/icons-material/PowerSettingsNewSharp";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-box">
        <div className="left-header">
          <span>
            <Link to="/dashboard">
              <HomeIcon style={{ color: "lightblue" }} />
            </Link>
          </span>
          <span>{props.name}</span>
        </div>
        <div className="right-header">
          <span>
            <PowerSettingsNewSharpIcon style={{ color: "lightblue" }} />
          </span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
