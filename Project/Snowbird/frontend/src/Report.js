import Menu from "./Menu";
import { FaDownload, FaFlag } from "react-icons/fa";
import { FiHelpCircle, FiPrinter, FiRefreshCw } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import { AiOutlineMail } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import {HiBookmark} from "react-icons/hi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Report() {
  const [taskdetails, setTaskDetails] = useState([]);
  const [user, setUser] = useState([]);
  const [uid, setUid] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    var url_u = "http://localhost:8000/userfetch";
    var request = {};
    var header = {};
    axios
      .post(url_u, request, header)
      .then((res) => {
        console.log(res.data);
        var temp = res.data;
        console.log("temp", temp);
        setUser(temp);
      })
      .catch();
  }, []);

  function fetchtask() {
    var url = "http://localhost:8000/timesheet_taskfetch";
    var request = { userid: uid };
    var header = {};
    console.log("request" + JSON.stringify(request));
    axios
      .post(url, request, header)
      .then((res) => {
        console.log("response" + JSON.stringify(res.data));
        setTaskDetails(res.data);
      })
      .catch();
  }
  return (
    <>
      <div className="outer">
        {<Header />}
        <div className="secondrow">
          <div className="firstcolumn">
            <Menu />
          </div>
          {/* Main outline */}
          <div className="secondcolumn">
            <div className="report_secrow">
              <div className="report_secrow_left">
                {" "}
                <label>TimeSheet</label>
              </div>

              <div className="report_secrow_right">
                <AiOutlineMail className="timesheet_icons" />
                <FiUpload className="timesheet_icons" />
                <FiPrinter className="timesheet_icons" />
                <FiHelpCircle className="timesheet_icons" />
              </div>
            </div>
            <div className="timesheet_filters">
              <label className="timesheet_filter_label">Filters Applied</label>
              <label className="timesheet_users_label">Users</label>
              <select className="timesheet_select">
                <option>Anjaly</option>
                <option>Sushmitha</option>
                <option>Anitha</option>
              </select>
              <div className="date">
                <label>From Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="date">
                <label className="date_label">To Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              </div>
              <div className="timesheet_row3">
               
                <table id="report">
                  <tr className="mainheading">
                <th className="timesheet_task">Task</th>
                <th className="timesheet_actual">Actual From</th>
                <th>Actual To</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Estimated Hours</th>
                </tr>
                <tr>
                  <th><HiBookmark className="badge"/>Task1</th>
                  <th>2022-06-12</th>
                  <th>2022-06-19</th>
                  <th>High</th>
                  <th>To-do</th>
                  <th>08:00:00</th>
                </tr>
                <tr>
                <th><HiBookmark className="badge"/>Task2</th>
                  <th>2022-06-12</th>
                  <th>2022-06-19</th>
                  <th>Medium</th>
                  <th>In-Progress</th>
                  <th>04:00:00</th>
                </tr>
                <tr>
                <th><HiBookmark className="badge"/>Task3</th>
                  <th>2022-06-12</th>
                  <th>2022-06-19</th>
                  <th>Low</th>
                  <th>Review</th>
                  <th>04:00:00</th>
                </tr>
                </table>
              </div>









              
              {/* 
            
           */}
            
            {/* <div className="report_rowone">
            <label style={{color:'gray'}}>UserName</label>
            <br></br> */}
            {/* <input type="textbox" /> */}
            {/* <select onChange={(e) => {setUid(e.target.value) }}>
            <option>--options---</option>
            {user.map((item,index)=>{ */}
            {/* // <option>--Options----</option>
              return<>
                <option value={item.id}>{item.txtUserName}</option>
                </>
            })}
             </select>
            <button onClick={fetchtask}>OK</button>
          </div> */}

            {/* <div className="report_secrow">
            <h1>TimeSheet</h1>
            <h3>Parameters Passed-<label style={{fontWeight:'100',fontSize:'medium'}}>One:One,Two</label></h3>
            
          </div> */}
            {/* 
          <div className="icons">
            <FaDownload className="fa_download"  size={25}  ></FaDownload>&nbsp;&nbsp;
            <FiRefreshCw className="fa_download" size={25}></FiRefreshCw> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-down-to-line" /> */}
            {/* </div> */}

            <div className="report_third">
              {/* <table>
            <thead>
            <th >Task</th>
             <th>AssignedTo</th>
            <th>Status</th>
            <th>EstimatedHours</th>
            <th className="time" >ActualFrom</th>
            <th className="time" >ActualTo</th>
            <th>ActualHours</th>
            </thead>
            <tbody>
              {taskdetails.map((item,index)=>{
                return<>
                <tr>
                  <td>{item.txtDescription}</td>
                  <td>{item.txtUserName}</td>
                  <td>{item.txtStatus}</td>
                  <td>{item.EstHours}</td>
                  <td>{item.startdate}</td>
                  <td>{item.enddate}</td>
                  <td></td>
                </tr>
                </>
              })} */}
              {/* <tr>
                <td>LoginPage</td>  
                <td>Ajay</td>
                <td>InProgress</td>
                <td>40</td>
                <td>2022-04-21</td>
                <td>2022-05-10</td>
                <th>45</th>
                </tr> */}

              {/* </tbody>
            </table> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Report;
