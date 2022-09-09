import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Add_Device = () => {
  return (
    <div className="main-cover">
      <Header name="Add Device" />
      <div className="main-container">
        <div className="cover-container">
          <div className="form-cover">
            <div className="form-container">
              <div className="title"> Add Device </div>
              <form onSubmit="formHandler">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Device Name</span>
                    <input
                      type="text"
                      placeholder="Enter Device Name"
                      required
                    />
                  </div>

                  <div className="input-box">
                    <span className="details">Device ID</span>
                    <input type="text" placeholder="Enter Device ID" required />
                  </div>

                  <div className="input-box">
                    <span className="details">Device Address </span>
                    <input
                      type="text"
                      placeholder="Enter Device Address"
                      required
                    />
                  </div>

                  <div className="input-box">
                    <span className="details">Phone No.</span>
                    <input type="text" placeholder="Enter Phone No." required />
                  </div>
                </div>

                <div className="button">
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_Device;
