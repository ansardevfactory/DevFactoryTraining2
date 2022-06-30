import "./style/styles.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Menu from './Menu'
import Header from "./Header";
import {  FaSearch } from "react-icons/fa";
import {
  BsChevronDown,
  BsStar,
  BsThreeDots,
  BsStarFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
function Task() {
  const navigate = useNavigate()
  const [taskarray, settaskarray] = useState([])
  function handleClick() {
    navigate('/AddTask')
  }
  function newClick(id) {
    localStorage.setItem('taskid',id)
    navigate('/EditTask')
  }

  useEffect(() => {
    //var url = 'http://localhost:8000/fetchtask'
    var url="https://b2lqp1icc0.execute-api.us-west-2.amazonaws.com/taskfetch_taskpage";
    var request = {}
    var header = {}

    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data)
        settaskarray(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        {/* <div className="firstrow">
          <div className="usericon"> </div>
          <label>User</label>
        </div> */}
          {<Header />}
        <div className="secondrow">
          {/* Side navigation menu */}

          <div className="firstcolumn">
            <Menu />
          </div>
          {/* Main outline */}
          <div className="secondcolumn">
            {/* <div className="prowone">
              <label>Task</label>
              <button onClick={handleClick}>Add Task</button>
            </div> */}

              <div className="prowone_prjct">
              <div className="prowone_prjct_left"><label>Tasks</label></div>
             <div className="prowone_prjct_right"> <button  onClick={handleClick}>Create New</button></div>
            </div>
            <div className="search_project">
                <div className="search_project_s1">
                   <input type="text"/>
                  <FaSearch className=""/>
                  </div>

                  <div className="search_project_s2">

                  </div>
                  <div className="row3">
            <table>
              <tr>
                <th>
                  <BsStarFill />
                </th>
                <th style={{fontWeight:"bolder"}}>Task</th>
                <th style={{fontWeight:"bolder"}}>Epic </th>
                <th style={{fontWeight:"bolder"}}>Status</th>
                <th style={{fontWeight:"bolder"}}>AssignedTo</th>
                <th></th>
              </tr>
              {taskarray.map((item,index)=>{
                return<>
                <tr>
                <td>
                  <BsStar />
                </td>
                <td>{item.taskname}</td>
                <td>{item.txtTitle}</td>
                <td>{item.txtStatus}</td>
                
                <td>
                  <div className="rowflex">
                    <div className="circle">{item.txtUserName.charAt(0)}</div><td>{item.txtUserName}</td>
                  </div>
                </td>
                <td>
                  <BsThreeDots onClick={newClick}/>
                </td>
              </tr>
              </>
              })}
              
              
              </table>
          </div>
              </div>

            {/* <table >
              <tr className="report_third" >
                <th>#id</th>
                <th>Task</th>
                <th>Status</th>
                <th>Epic</th>
                <th>ProjectName</th>
              </tr>
              {taskarray.map((item, index) => {
                return (
                  <>
                     <tr onClick={()=>newClick(item.id)}>
                     <td className="tbdata">{item.id}</td>
                      <td>{item.txtTitle}</td>
                      <td>{item.txtStatus}</td>
                      <td>{item.epicname}</td>
                      <td>{item.txtName}</td>
                    </tr>
                  </>
                )
              })}
            </table> */}
          </div>

          {/* <div className="pbutton">
            <button>1</button>
            <button>2</button>
            <button>...</button>
            <button>10</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Task