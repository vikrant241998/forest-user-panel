import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const LocationList = (props) => {
  return (
    <div className="main-cover">
      <Header name="Location" />
      <div className="main-container">
        <div className="cover-container">
          <div className="location-container">
            <div className="location-header">
              <div className="location-left">Location List</div>
              <div className="location-right">
                <input type="text" id="search" placeholder="Search here" />
                <Link to="/addlocation">
                  <button className="btn">Location Add</button>
                </Link>
              </div>
            </div>

            {/* Table code Start from here */}
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Location Name</th>
                    <th>Supervisor Name</th>
                    <th>Mobile Number</th>
                    <th>Total Device</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>123</td>
                    <td>Gurgaon</td>
                    <td>Vikrant Mulankar</td>
                    <td>+91 0123456789</td>
                    <td>50</td>
                    <td>Gurgaon</td>
                    <td>
                      <Link to="/">
                        <button>View</button>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td>123</td>
                    <td>Gurgaon</td>
                    <td>Vikrant Mulankar</td>
                    <td>+91 0123456789</td>
                    <td>50</td>
                    <td>Gurgaon</td>
                    <td>
                      <Link to="/">
                        <button>View</button>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td>123</td>
                    <td>Gurgaon</td>
                    <td>Vikrant Mulankar</td>
                    <td>+91 0123456789</td>
                    <td>50</td>
                    <td>Gurgaon</td>
                    <td>
                      <Link to="/">
                        <button>View</button>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td>123</td>
                    <td>Gurgaon</td>
                    <td>Vikrant Mulankar</td>
                    <td>+91 0123456789</td>
                    <td>50</td>
                    <td>Gurgaon</td>
                    <td>
                      <Link to="/">
                        <button>View</button>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td>123</td>
                    <td>Gurgaon</td>
                    <td>Vikrant Mulankar</td>
                    <td>+91 0123456789</td>
                    <td>50</td>
                    <td>Gurgaon</td>
                    <td>
                      <Link to="/">
                        <button>View</button>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td>123</td>
                    <td>Gurgaon</td>
                    <td>Vikrant Mulankar</td>
                    <td>+91 0123456789</td>
                    <td>50</td>
                    <td>Gurgaon</td>
                    <td>
                      <Link to="/">
                        <button>View</button>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td>123</td>
                    <td>Gurgaon</td>
                    <td>Vikrant Mulankar</td>
                    <td>+91 0123456789</td>
                    <td>50</td>
                    <td>Gurgaon</td>
                    <td>
                      <Link to="/">
                        <button>View</button>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td>123</td>
                    <td>Gurgaon</td>
                    <td>Vikrant Mulankar</td>
                    <td>+91 0123456789</td>
                    <td>50</td>
                    <td>Gurgaon</td>
                    <td>
                      <Link to="/">
                        <button>View</button>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td>123</td>
                    <td>Gurgaon</td>
                    <td>Vikrant Mulankar</td>
                    <td>+91 0123456789</td>
                    <td>50</td>
                    <td>Gurgaon</td>
                    <td>
                      <Link to="/">
                        <button>View</button>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td>123</td>
                    <td>Gurgaon</td>
                    <td>Vikrant Mulankar</td>
                    <td>+91 0123456789</td>
                    <td>50</td>
                    <td>Gurgaon</td>
                    <td>
                      <Link to="/">
                        <button>View</button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="Pagination-container">
              <ul>
                <li>
                  <Link to="#">
                    <button>First</button>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <button> Previous</button>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <button>1</button>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <button>Next</button>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <button>Last</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationList;
