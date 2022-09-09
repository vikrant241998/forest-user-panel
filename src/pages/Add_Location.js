import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Add_Location = () => {
  function formHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="main-cover">
      <Header name="Add Location" />
      <div className="main-container">
        <div className="cover-container">
          <div className="form-cover">
            <div className="form-container">
              <div className="title"> Add Location </div>
              <form onSubmit="formHandler">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Location Name</span>
                    <input
                      type="text"
                      placeholder="Enter Your Location"
                      required
                    />
                  </div>

                  <div className="input-box">
                    <span className="details">Supervisor Name</span>
                    <input
                      type="text"
                      placeholder="Enter Supervisor Name"
                      required
                    />
                  </div>

                  <div className="input-box">
                    <span className="details">Supervisor Phone No. </span>
                    <input type="text" placeholder="Enter Phone No." required />
                  </div>

                  <div className="input-box">
                    <span className="details">Address</span>
                    <input type="text" placeholder="Enter Address" required />
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

export default Add_Location;
