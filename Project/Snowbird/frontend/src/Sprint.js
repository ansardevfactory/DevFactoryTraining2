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


function Sprint() {
  const navigate = useNavigate()
  //const count = 10
  const [sprintarray, setsprintarray] = useState([])

  //   { Id: 1, name: 'sprint1', count },
  //   { Id: 2, name: 'sprint2', count },
  //   { Id: 3, name: 'sprint3', count },
  //   { Id: 4, name: 'sprint4', count },
  //   { Id: 5, name: 'sprint5', count },
  // function handleClick() {
    // navigate('/AddSprint')
  // }
  function newClick(e,Id) {
    localStorage.setItem('spid',Id)
    console.log(Id)
   navigate('/EditSprint')
  }
  useEffect(() => {
    // var url = 'http://localhost:8000/fetchsprintlist'
    var url = "https://3pouusa736.execute-api.us-west-2.amazonaws.com/fetchsprintlist"
    var request = {}
    var header = {}

    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data)
        setsprintarray(res.data)
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
              <div className="prowone_prjct_left"><label>Sprints</label></div>
             {/* <div className="prowone_prjct_right"> <button  onClick={handleClick}>Create New</button></div> */}
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
                <th style={{fontWeight:"bolder"}}>Sprint</th>
                <th style={{fontWeight:"bolder"}}>AssignedTo</th>
                <th style={{fontWeight:"bolder"}}>StartDt</th>
                <th style={{fontWeight:"bolder"}}>EndDt</th>
                <th></th>
                </tr>
              {sprintarray.map((item, index) => {
                return (
                  <>
                    <tr onClick={(e)=>newClick(e,item.Id)}>
                      <td className="tbdata">{item.Id}</td>
                      <td>{item.txtSprintname}</td>
                      <td>{item.txtUserName}</td>
                      <td>{item.dtActstartdate}</td>
                      <td>{item.dtActenddate}</td>
                    </tr>
                
              
              </>
              )
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

export default Sprint
    
    
   /********************************************************** */ 
    /*<div>
      <div className="outer">
        {/* USer name with icon */
        {/* <div className="firstrow">
          <div className="usericon"> </div>
          <label>User</label>
        </div> */}
        // <div className="secondrow">
        //   {/* Side navigation menu */}

        //   {<Menu />}
        //   <div className="secondcolumn">
        //     <div className="prowone">
        //       <label>Sprint</label>
              /* <button onClick={handleClick}>Create New</button>
            </div>
            <table className="tablerow">
              <tr className="report_third">
                <th>#id</th>
                <th>Title</th>
                <th>Start date</th>
                <th>End date</th>
              </tr>

              {sprintarray.map((item, index) => {
                return (
                  <>
                    <tr onClick={(e)=>newClick(e,item.Id)}>
                      <td className="tbdata">{item.id}</td>
                      <td>{item.txtSprintName}</td>
                      <td>{item.dtActStartDate}</td>
                      <td>{item.dtActEndDate}</td>
                    </tr>
                  </>
                )
              })}
            </table> */

            /* <div className="pbutton">
              <button>1</button>
              <button>2</button>
              <button>...</button>
              <button>10</button>
            </div>
          </div>
        </div>
      </div> */
     /* </div> */
     /****************************************** */
