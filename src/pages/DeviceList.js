import React from "react";
import Header from "./Header";
// import { Link } from "react-router-dom";
import temp from "../images/temp.png";
import weather from "../images/weather.png";
import smoke from "../images/smoke.png";
import fire from "../images/fire.png";

const DeviceList = () => {
  return (
    <div className="main-cover">
      <Header name="Device" />
      <div className="main-container">
        <div className="cover-container">
          <div className="location-container">
            <div className="location-header">
              <div className="location-left">Device List</div>
              <div className="location-right-2">
                <input type="text" id="search" placeholder="Search here" />
              </div>
            </div>
          </div>

          <div className="device-card-container">
            <div className="device-card">
              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device ID :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>ABC123SA</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device Name :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Fire</span>
                </div>
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Location :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Gurgaon</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}  >Date :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>02-Sep-2021</span>
                </div>
              </div>

              <div className="width-line"></div>

              <div className="device-data-top">
              <div className="device-data">
                  <div className="device-temp-data">
                    <span>Weather</span>
                    <img src={weather} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Smoke &nbsp; </span>
                    <img src={smoke} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Temp</span>
                    <img src={temp} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Fire &nbsp; </span>
                    <img src={fire} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              {/* <img src={smoke} /> */}

              {/* <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Weather</span>
                    <img src={weather} />
                    <span style={{ marginLeft: "10px" }}>12 c</span>
                  </div>
                </div>
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Fire</span>
                    <img src={fire} />
                    <span style={{ marginLeft: "10px" }}>90 c</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="device-card">
              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device ID :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>ABC123SA</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device Name :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Fire</span>
                </div>
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Location :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Gurgaon</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}  >Date :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>02-Sep-2021</span>
                </div>
              </div>

              <div className="width-line"></div>

              <div className="device-data-top">
              <div className="device-data">
                  <div className="device-temp-data">
                    <span>Weather</span>
                    <img src={weather} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Smoke &nbsp; </span>
                    <img src={smoke} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Temp</span>
                    <img src={temp} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Fire &nbsp; </span>
                    <img src={fire} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              {/* <img src={smoke} /> */}

              {/* <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Weather</span>
                    <img src={weather} />
                    <span style={{ marginLeft: "10px" }}>12 c</span>
                  </div>
                </div>
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Fire</span>
                    <img src={fire} />
                    <span style={{ marginLeft: "10px" }}>90 c</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="device-card">
              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device ID :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>ABC123SA</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device Name :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Fire</span>
                </div>
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Location :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Gurgaon</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}  >Date :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>02-Sep-2021</span>
                </div>
              </div>

              <div className="width-line"></div>

              <div className="device-data-top">
              <div className="device-data">
                  <div className="device-temp-data">
                    <span>Weather</span>
                    <img src={weather} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Smoke &nbsp; </span>
                    <img src={smoke} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Temp</span>
                    <img src={temp} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Fire &nbsp; </span>
                    <img src={fire} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              {/* <img src={smoke} /> */}

              {/* <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Weather</span>
                    <img src={weather} />
                    <span style={{ marginLeft: "10px" }}>12 c</span>
                  </div>
                </div>
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Fire</span>
                    <img src={fire} />
                    <span style={{ marginLeft: "10px" }}>90 c</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="device-card">
              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device ID :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>ABC123SA</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device Name :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Fire</span>
                </div>
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Location :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Gurgaon</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}  >Date :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>02-Sep-2021</span>
                </div>
              </div>

              <div className="width-line"></div>

              <div className="device-data-top">
              <div className="device-data">
                  <div className="device-temp-data">
                    <span>Weather</span>
                    <img src={weather} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Smoke &nbsp; </span>
                    <img src={smoke} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Temp</span>
                    <img src={temp} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Fire &nbsp; </span>
                    <img src={fire} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              {/* <img src={smoke} /> */}

              {/* <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Weather</span>
                    <img src={weather} />
                    <span style={{ marginLeft: "10px" }}>12 c</span>
                  </div>
                </div>
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Fire</span>
                    <img src={fire} />
                    <span style={{ marginLeft: "10px" }}>90 c</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="device-card">
              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device ID :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>ABC123SA</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device Name :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Fire</span>
                </div>
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Location :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Gurgaon</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}  >Date :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>02-Sep-2021</span>
                </div>
              </div>

              <div className="width-line"></div>

              <div className="device-data-top">
              <div className="device-data">
                  <div className="device-temp-data">
                    <span>Weather</span>
                    <img src={weather} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Smoke &nbsp; </span>
                    <img src={smoke} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Temp</span>
                    <img src={temp} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Fire &nbsp; </span>
                    <img src={fire} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              {/* <img src={smoke} /> */}

              {/* <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Weather</span>
                    <img src={weather} />
                    <span style={{ marginLeft: "10px" }}>12 c</span>
                  </div>
                </div>
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Fire</span>
                    <img src={fire} />
                    <span style={{ marginLeft: "10px" }}>90 c</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="device-card">
              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device ID :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>ABC123SA</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device Name :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Fire</span>
                </div>
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Location :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Gurgaon</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}  >Date :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>02-Sep-2021</span>
                </div>
              </div>

              <div className="width-line"></div>

              <div className="device-data-top">
              <div className="device-data">
                  <div className="device-temp-data">
                    <span>Weather</span>
                    <img src={weather} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Smoke &nbsp; </span>
                    <img src={smoke} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Temp</span>
                    <img src={temp} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Fire &nbsp; </span>
                    <img src={fire} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              {/* <img src={smoke} /> */}

              {/* <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Weather</span>
                    <img src={weather} />
                    <span style={{ marginLeft: "10px" }}>12 c</span>
                  </div>
                </div>
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Fire</span>
                    <img src={fire} />
                    <span style={{ marginLeft: "10px" }}>90 c</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="device-card">
              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device ID :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>ABC123SA</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device Name :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Fire</span>
                </div>
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Location :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Gurgaon</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}  >Date :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>02-Sep-2021</span>
                </div>
              </div>

              <div className="width-line"></div>

              <div className="device-data-top">
              <div className="device-data">
                  <div className="device-temp-data">
                    <span>Weather</span>
                    <img src={weather} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Smoke &nbsp; </span>
                    <img src={smoke} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Temp</span>
                    <img src={temp} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Fire &nbsp; </span>
                    <img src={fire} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              {/* <img src={smoke} /> */}

              {/* <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Weather</span>
                    <img src={weather} />
                    <span style={{ marginLeft: "10px" }}>12 c</span>
                  </div>
                </div>
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Fire</span>
                    <img src={fire} />
                    <span style={{ marginLeft: "10px" }}>90 c</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="device-card">
              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device ID :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>ABC123SA</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device Name :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Fire</span>
                </div>
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Location :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Gurgaon</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}  >Date :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>02-Sep-2021</span>
                </div>
              </div>

              <div className="width-line"></div>

              <div className="device-data-top">
              <div className="device-data">
                  <div className="device-temp-data">
                    <span>Weather</span>
                    <img src={weather} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Smoke &nbsp; </span>
                    <img src={smoke} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Temp</span>
                    <img src={temp} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Fire &nbsp; </span>
                    <img src={fire} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              {/* <img src={smoke} /> */}

              {/* <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Weather</span>
                    <img src={weather} />
                    <span style={{ marginLeft: "10px" }}>12 c</span>
                  </div>
                </div>
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Fire</span>
                    <img src={fire} />
                    <span style={{ marginLeft: "10px" }}>90 c</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="device-card">
              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device ID :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>ABC123SA</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device Name :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Fire</span>
                </div>
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Location :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Gurgaon</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}  >Date :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>02-Sep-2021</span>
                </div>
              </div>

              <div className="width-line"></div>

              <div className="device-data-top">
              <div className="device-data">
                  <div className="device-temp-data">
                    <span>Weather</span>
                    <img src={weather} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Smoke &nbsp; </span>
                    <img src={smoke} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Temp</span>
                    <img src={temp} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Fire &nbsp; </span>
                    <img src={fire} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              {/* <img src={smoke} /> */}

              {/* <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Weather</span>
                    <img src={weather} />
                    <span style={{ marginLeft: "10px" }}>12 c</span>
                  </div>
                </div>
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Fire</span>
                    <img src={fire} />
                    <span style={{ marginLeft: "10px" }}>90 c</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="device-card">
              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device ID :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>ABC123SA</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device Name :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Fire</span>
                </div>
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Location :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Gurgaon</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}  >Date :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>02-Sep-2021</span>
                </div>
              </div>

              <div className="width-line"></div>

              <div className="device-data-top">
              <div className="device-data">
                  <div className="device-temp-data">
                    <span>Weather</span>
                    <img src={weather} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Smoke &nbsp; </span>
                    <img src={smoke} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Temp</span>
                    <img src={temp} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Fire &nbsp; </span>
                    <img src={fire} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              {/* <img src={smoke} /> */}

              {/* <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Weather</span>
                    <img src={weather} />
                    <span style={{ marginLeft: "10px" }}>12 c</span>
                  </div>
                </div>
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Fire</span>
                    <img src={fire} />
                    <span style={{ marginLeft: "10px" }}>90 c</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="device-card">
              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device ID :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>ABC123SA</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device Name :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Fire</span>
                </div>
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Location :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Gurgaon</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}  >Date :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>02-Sep-2021</span>
                </div>
              </div>

              <div className="width-line"></div>

              <div className="device-data-top">
              <div className="device-data">
                  <div className="device-temp-data">
                    <span>Weather</span>
                    <img src={weather} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Smoke &nbsp; </span>
                    <img src={smoke} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Temp</span>
                    <img src={temp} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Fire &nbsp; </span>
                    <img src={fire} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              {/* <img src={smoke} /> */}

              {/* <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Weather</span>
                    <img src={weather} />
                    <span style={{ marginLeft: "10px" }}>12 c</span>
                  </div>
                </div>
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Fire</span>
                    <img src={fire} />
                    <span style={{ marginLeft: "10px" }}>90 c</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="device-card">
              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device ID :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>ABC123SA</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Device Name :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Fire</span>
                </div>
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <span style={{color: "steelblue"}}>Location :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>Gurgaon</span>
                </div>
                <div className="device-data">
                  <span style={{color: "steelblue"}}  >Date :</span>
                  <span style={{ marginLeft: "10px", color:"#fff" }}>02-Sep-2021</span>
                </div>
              </div>

              <div className="width-line"></div>

              <div className="device-data-top">
              <div className="device-data">
                  <div className="device-temp-data">
                    <span>Weather</span>
                    <img src={weather} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Smoke &nbsp; </span>
                    <img src={smoke} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Temp</span>
                    <img src={temp} />
                     <sup>15.c</sup>
                  </div>
                </div>

                <div className="device-data">
                  <div className="device-temp-data">
                    <span>Fire &nbsp; </span>
                    <img src={fire} />
                     <sup> 15.c</sup>
                  </div>
                </div>               
              </div>

              {/* <img src={smoke} /> */}

              {/* <div className="device-data-top">
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Weather</span>
                    <img src={weather} />
                    <span style={{ marginLeft: "10px" }}>12 c</span>
                  </div>
                </div>
                <div className="device-data">
                  <div className="device-temp-data">
                    <span> Fire</span>
                    <img src={fire} />
                    <span style={{ marginLeft: "10px" }}>90 c</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceList;
