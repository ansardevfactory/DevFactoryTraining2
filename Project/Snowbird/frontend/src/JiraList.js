import React from "react";
import { FaSearch } from "react-icons/fa";
import {
  BsChevronDown,
  BsStar,
  BsThreeDots,
  BsStarFill,
  BsFillCaretDownFill,
} from "react-icons/bs";

import "./style/style.css";
export default function JiraList() {
  return (
    <>
      <div className="header"></div>
      <div className="menurow">
        <div className="col1"></div>
        <div className="col2">
          <div className="row1">
            <div className="left">
              <label>Projects</label>
            </div>
            <div className="right">
              <button>Create Project</button>
            </div>
          </div>
          <div className="row2">
            <div className="searchdiv">
              <input type={"text"} />
              <FaSearch className="icon" />
            </div>
            <div className="searchdiv">
              <input type={"text"} />
              <BsChevronDown className="icon" />
            </div>
          </div>
          <div className="row3">
            <table>
              <tr>
                <th>
                  <BsStarFill />
                </th>
                <th>Name</th>
                <th>
                  <div className="rowflex">
                    Key
                    <BsFillCaretDownFill />
                  </div>
                </th>
                <th>Type</th>
                <th>Lead</th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <BsStar />
                </td>
                <td>My Project</td>
                <td>MP</td>
                <td>Team mananged software</td>
                <td>
                  <div className="rowflex">
                    <div className="circle">AK</div>Anjali
                  </div>
                </td>
                <td>
                  <BsThreeDots />
                </td>
              </tr>{" "}
              <tr>
                <td>
                  <BsStar />
                </td>
                <td>My Project</td>
                <td>MP</td>
                <td>Team mananged software</td>
                <td>
                  <div className="rowflex">
                    <div className="circle">AK</div>Anjali
                  </div>
                </td>
                <td>
                  <BsThreeDots />
                </td>
              </tr>{" "}
              <tr>
                <td>
                  <BsStar />
                </td>
                <td>My Project</td>
                <td>MP</td>
                <td>Team mananged software</td>
                <td>
                  <div className="rowflex">
                    <div className="circle">AK</div>Anjali
                  </div>
                </td>
                <td>
                  <BsThreeDots />
                </td>
              </tr>{" "}
              <tr>
                <td>
                  <BsStar />
                </td>
                <td>My Project</td>
                <td>MP</td>
                <td>Team mananged software</td>
                <td>
                  <div className="rowflex">
                    <div className="circle">AK</div>Anjali
                  </div>
                </td>
                <td>
                  <BsThreeDots />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

