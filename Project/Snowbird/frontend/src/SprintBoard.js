import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import Header from "./Header";
import SprintBox from "./SprintBox";
import { FaAngleDown, FaFlag, FaPlus, FaRegUserCircle, FaUser, FaUserCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { VscNoNewline } from "react-icons/vsc";
function SprintBoard() {
  const [sprintlist, setSprintList] = useState([]);
  const [state, setState] = useState("");
  const [select,setSelect]=useState("");
  useEffect(() => {
    var req = {};
    var header = {};
    var url = "http://localhost:8000/sprintfetch";

    axios
      .post(url, req, header)
      .then((res) => {
        console.log(JSON.stringify(res.data));
        setSprintList(res.data);
      })
      .catch();
      
  }, []);
  function selectstyle(){
    if(select=="todo")
    {
      
    }
  }
  const checkChange = () => {
    setState("checked");
  };
  function showlist(e)
  {
      console.log("e",e)
        // e.isClicked?"list":"none";
  }
  return (
    <>
      <div className="outer">
        {<Header />}
        <div className="secondrow">
          <div className="firstcolumn">
            <Menu />
          </div>
          <div className="secondcolumn">
            <div className="secondcolumn_row1">
              <label>Projects/</label>
            </div>
            <div className="secondcolumn_row2">
              <label className="test_sprint">Backlog</label>
            </div>
            <div className="secondcolumn_row3">
              <select>
                <option>--Select--</option>
                <option>Sprint 1</option>
                <option>Sprint 2</option>
              </select>
              {/* <div className="secondcolumn_search">
                <input type="text" className="secondcolumn_row3_text" />
                <FaSearch className="fasearch" />
              </div> */}
            </div>
            <div className="sprint_secondcolumn_row4" onClick={(e)=>{showlist(e.target.value)}}>
              <div className="sprintcolumnrow4_top">
                <div className="sprintcolumnrow4_top_right">
                  <FaAngleDown />
                  <label className="sprintcolumnrow4_top_main_label">
                    TEST 1 Sprint 1
                  </label>{" "}
                </div>
                <div className="sprintcolumnrow4_top_left">
                  <button>Complete Sprint</button>
                  <BsThreeDots className="threedots" />
                </div>
              </div>
              <div className="sprintcolumnrow4_sprintlist">
               <div className="list">
                <div className="sprintcolumnrow4_top_list_left">
                <FaFlag className="flag"/> <label className="sprintcolumnrow4_top_list_label">Test-1 BoardPage</label>
                <label className="testepic">TestEpic</label> </div>
                <div className="sprintcolumnrow4_top_list_right">
                <select className="select_sprintlist">
                    <option>TO-DO</option>
                </select>
                <FaUserCircle className="user_select"/>
                </div>
                </div>
                {/* tet */}
                <div className="list">
                <div className="sprintcolumnrow4_top_list_left">
                <FaFlag className="flag"/> <label className="sprintcolumnrow4_top_list_label">Test-2 Scrumboard</label>
                <label className="testepic">TestEpic</label> </div>
                <div className="sprintcolumnrow4_top_list_right">
                <select 
                
                 onChange={(e)=>{setSelect(e.target.value)}} className="select_sprintlist">
                    <option value={"todo"}>TO-DO</option>
                    <option className="green" value={"done"}>DONE</option>
                </select>
                <FaUserCircle className="user_select"/>
                </div>
                </div>
                
              
           
                       
              </div>
             
                <div className="sprint_secondcolumn_row4_createnew">
                   <FaPlus  className="craetenew_icon"/><label>Create issue</label>
                </div>
              
              {/* <div className="sprintcolumnrow4_sub"><FaFlag className="flag"/>
                    <label className="sprintcolumnrow4_sub_label">Test-5</label>
                    </div>   */}
            </div>
            <div className="sprint_secondcolumn_row5">
            <div className="sprint_secondcolumn_row5_left" > 
            <FaAngleDown className="angledown"/><label>Backlog</label>
            <label className="row5_label">(0 issues)</label>
            </div>
            <div className="sprint_secondcolumn_row5_right">
              <div className="backlog_right">
            <div className="dot">0</div>
            <button > Create Sprint</button>
            </div>
            </div>
              
                {/* <div className="sprint_secondcolumn_row5_left" >
                    <FaAngleDown className="angledown"/><label>Backlog</label>
                    <label className="row5_label">(0 issues)</label>
                </div>
                <div className= "sprint_secondcolumn_row5_right" >
                    <div className="dot"></div>
                    <button > Create Sprint</button>
                </div> */}
                
                </div>
                <div className= "sprint_secondcolumn_row6">
                  <label>Your backlog is empty</label>
                 </div>
                 <div className= "sprint_secondcolumn_row7">
                 <FaPlus  className="craetenew_icon"/><label>Create issue</label>
                 </div>
                 
           

            {/* <div className="task_row">
            <h3 style={{color:"gray"}}>Tasks</h3>
            <table>
            <thead>
            <th style={{width:15}}>#id</th>
            <th >Task</th>
            <th>Status</th>
            <th>Epic Name</th>
            <th>Project Name</th>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Task1</td>
                <td>To-do</td>
                <td>Epic1</td>
                <td>Event Management</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Task2</td>
                    <td>To-do</td>
                    <td>Epic2</td>
                    <td>Project Management</td>
                </tr>
            </tbody>
            </table> */}
            
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
export default SprintBoard;
