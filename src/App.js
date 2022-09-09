import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./pages/Header";
import Dashboard from "./pages/Dashboard";
import DeviceList from "./pages/DeviceList";
import LocationList from "./pages/LocationList";
import Add_Location from "./pages/Add_Location";
import Add_Device from "./pages/Add_Device";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <div className="main">
          <div className="main-screen">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/devicelist" element={<DeviceList />} />
              <Route path="/locationlist" element={<LocationList />} />
              <Route path="/addlocation" element={<Add_Location />} />
              <Route path="/adddevice" element={<Add_Device />} />
              <Route path="/header" element={<Header location="Location" />} />
            </Routes>
          </div>
        </div>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
