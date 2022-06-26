import "./style/styles.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CgBoard } from "react-icons/cg";
import {
  FaProjectDiagram,
  FaBolt,
  FaCheck,
  FaRunning,
  FaUser,
  FaCalendarCheck,
  FaScroll,
  FaPiedPiperSquare,
  FaUserCircle,
} from "react-icons/fa";
import { VscGraph } from "react-icons/vsc"
function Menu() {
  var navigate = useNavigate();
  const [select, setSelect] = useState(false);

  useEffect(() => {
    localStorage.setItem("select1", true);
    console.log("Select from report", select);
  }, []);

  function project() {
    navigate("/project");
  }
  function epic() {
    navigate("/epic");
  }
  function board() {
    navigate("/dash");
  }
  function task() {
    navigate("/task");
  }
  function sprint() {
    navigate("/sprint");
  }
  function users() {
    navigate("/users");
  }
  function report(select2) {
    navigate("/report");
    console.log("select2", select2);
    setSelect(true);

    //console.log("select in report",select);
  }
  function attendance() {
    navigate("/attendance");
  }
  function sprintboard() {
    navigate("/sprintboard");
  }
  function showlist(e) {
    setSelect(true);
    e.preventDefault();
    console.log(select);
    console.log("stae" + select);

    console.log(select);
  }
  return (
    <>
      <nav>
        <li onClick={board}>
          {" "}
          <div className="menu_icon_label"><CgBoard className="menu_iconcg" />
          Board</div>
        </li>
        <li ><div className="menu_icon_label">
          <FaProjectDiagram className="menu_icon" /> 
          Projects</div>
        </li>
        
        <li onClick={epic}><div className="menu_icon_label">
          <FaBolt className="menu_icon" />
          Epics</div>
        </li>
        <li onClick={task}><div className="menu_icon_label">
          <FaCheck className="menu_icon" />
          Tasks</div>
        </li>
        <li onClick={sprint}><div className="menu_icon_label">
          <FaRunning className="menu_icon" />
          Sprints</div>
        </li>
        <li onClick={users}><div className="menu_icon_label">
          <FaUser className="menu_icon" />
          Users</div>
        </li>
        <li onClick={attendance}><div className="menu_icon_label">
          <FaCalendarCheck className="menu_icon" />
          Attendance</div>
        </li>
        <li onClick={sprintboard}><div className="menu_icon_label">
          <FaScroll className="menu_icon" />
          Scrum Board</div>
        </li>
        <li onClick={showlist}><div className="menu_icon_label">
          <VscGraph className="menu_icon" />
          Report</div>
        </li>
        <ul className="dropdown">
          <li
            onClick={report}
            className={select ? "show" : "hide"}
            id="timesheet"
          ><div className="menu_icon_label">
            TimeSheet</div>
          </li>
        </ul>
      </nav> </>
  );
}
export default Menu;
