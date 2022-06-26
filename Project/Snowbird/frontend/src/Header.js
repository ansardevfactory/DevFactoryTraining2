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
import {VscGraph} from "react-icons/vsc"
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
      <div className="firstrow">
        <div className="logodiv" onClick={(e) => navigate("/dash")}>
          <span className="logotext"><FaPiedPiperSquare  /></span>
          <label className="snow">Snow</label><label className="bird"> Bird</label>
        </div>
        
        <div className="usericon">
          <FaUserCircle className="usericon_icon" />
          <div className="usericon_label"></div>
          <label></label>
          <div className="popup">
            <label>Logout</label>
          </div>
        </div>
      </div> 
    </>
  );
}
export default Menu;
