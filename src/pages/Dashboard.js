import React from "react";
import Header from "./Header";
// import Material ui icons
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SignalCellularNodataIcon from "@mui/icons-material/SignalCellularNodata";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Dashboard = () => {
  return (
    <div className="main-cover">
      <Header name="Dashboard" />
      <div className="main-container">
        <div className="cover-container">
          <div className="dash-card-container">
            <div className="dash-card">
              <div className="dash-logo">
                <PhonelinkIcon style={{ fontSize: "3rem", padding: "8px" }} />
              </div>
              <div className="dash-card-text">
                <h3>Total Device</h3>
                <h4>5</h4>
              </div>
            </div>

            <div className="dash-card">
              <div className="dash-logo">
                <TravelExploreIcon
                  style={{ fontSize: "3rem", padding: "8px" }}
                />
              </div>
              <div className="dash-card-text">
                <h3>Mapped Device</h3>
                <h4>4</h4>
              </div>
            </div>

            <div className="dash-card">
              <div className="dash-logo">
                <SignalCellularNodataIcon
                  style={{ fontSize: "3rem", padding: "8px" }}
                />
              </div>
              <div className="dash-card-text">
                <h3>Unused Device</h3>
                <h4>0</h4>
              </div>
            </div>

            <div className="dash-card">
              <div className="dash-logo">
                <LocalGroceryStoreIcon
                  style={{ fontSize: "3rem", padding: "8px" }}
                />
              </div>
              <div className="dash-card-text">
                <h3>No. Of Container</h3>
                <h4>3</h4>
              </div>
            </div>

            <div className="dash-card">
              <div className="dash-logo">
                <LocationOnIcon style={{ fontSize: "3rem", padding: "8px" }} />
              </div>
              <div className="dash-card-text">
                <h3>No. Of Location</h3>
                <h4>1</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
