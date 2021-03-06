import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react'
// import "./styles/SnowBirdStyle.css";
import './style/styles.css'
import Menu from './Menu'
import Header from './Header'
import { DiAptana } from 'react-icons/di'
import { AiOutlineApartment } from 'react-icons/ai'
import { AiOutlineLink } from 'react-icons/ai'
import { FcBookmark } from 'react-icons/fc'
import { FcFlashOn } from 'react-icons/fc'
import { BiSortDown } from 'react-icons/bi'
import { GrAttachment } from 'react-icons/gr'
import { HiOutlineUserCircle } from 'react-icons/hi'
function EditEpic() {
  const [user, setUser] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [refassign, setRefAssign] = useState('')
  var epicid = localStorage.getItem('EpicId')
  useEffect(() => {
    // var url = "http://localhost:8000/userfetch";
    var url = 'https://elvvu6z51m.execute-api.us-west-2.amazonaws.com/userfetch'
    var request = {}
    var header = {}
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data)
        setUser(res.data)
      })
      .catch()
  }, [])

  function handleClick(e) {
    console.log('hi')
    var url = 'http://localhost:8000/updateEpic'
    var req =
      '{"txtTitle":"' +
      title +
      '","txtDescription":"' +
      description +
      '",txtStatus":"' +
      status +
      '","refassignee":4,id:epicid}'
    var header = {}
    axios
      .post(url, req, header)
      .then((res) => {
        console.log(res.data)
        setUser(res.data)
      })
      .catch()

    alert('Success')
  }
  return (
    
      <div>
        <div className="outer">
          {/* width:100% */}
          {<Header />}
          <div className="secondrow">
            {/* width:50% */}
            <div className="firstcolumn">
            <Menu />
          </div>
            {/* <div className="path"> */}
              {/* <FcFlashOn /> */}
              {/* Epic/ */}
              {/* <FcBookmark /> */}
              {/* Test-5 */}
            {/* </div> */}
            {/* <div className="closeicon">width:50%X</div> */}
          {/* </div> */}
          <div className="Seconddcolumn">
          <div className="outer_row2">
          {/* width:100% */}
            <div className="outer_column1">
              {/* width:60% */}
              <div>
              <div className="path">
                    <FcFlashOn />
                    EditProject/
                    <FcBookmark />
                    Project-5
                  </div>

                <input type="text" className="iinput" />
                {/* <label className="column1_row1">AddProject</label> */}
              </div>
              <div className="column1_row2">
                <button className="row2buttons">
                  <GrAttachment />
                  Attach
                </button>
                <button className="row2_1buttons">
                  <AiOutlineApartment /> Add a child issue
                </button>
                <button className="row2_2buttons">
                  <AiOutlineLink /> Link issue
                </button>
                {/* <select className="select">
               <option value=""></option>
             </select> */}
                <button className="row2_3buttons">...</button>
              </div>
              <div className="column1_row3">
                <label>Description</label>

                <textarea
                  rows="10"
                  cols="200"
                  placeholder="Add a description..."
                ></textarea>
              </div>
              <div className="column1_row4">
                <label>Activity</label>
              </div>
              <div className="column1_row5">
                <div className="row5">
                  <button className="row5buttons">Show</button>
                  <button className="row5buttons">All</button>
                  <button className="row5buttons">Comments</button>
                  <button className="row5buttons">History</button>
                </div>

                <div className="row5_1">
                  <label>
                    Newest First <BiSortDown />
                  </label>
                </div>
              </div>
              <div className="column1_row6">
                <div className="row6"> A </div>
                <div className="row7">
                  <textarea rows="10" cols="200"></textarea>
                </div>
              </div>
              <div className="column1_row7">
                <button className="row8" onClick={handleClick}>
                  Save
                </button>
                <button className="row9">Cancel</button>
              </div>
            </div>
            <div className="outer_column2">
              <div className="column2_row1">
              <div className="closeicon">X</div>
                <select className="select1">
                  <option value="To Do">To Do</option>
                </select>
              </div>
              <div className="column2_row2">Details</div>
              <div className="column2_row3">
                <div className="column2_row3_1">
                  <div className="listt1">Assignee</div>
                  <div className="listt1">label</div>
                  <div className="listt1">label</div>
                  <div className="listt1">label</div>
                  <div className="listt1">label</div>
                </div>
                <div className="column2_row3_2">
                  {/* <div className="list"><HiOutlineUserCircle/>Unassigned</div> */}
                  <div> 
                  <div className="listt1">
                    <select className="project_select">
                      {user.map((item, index) => {
                        return (
                          <>
                            <option value={item.id}>{item.txtUserName}</option>
                          </>
                        )
                      })}
                    </select>
                  </div>
                  </div>
                  <div className="listt1">None</div>
                  <div className="listt1">label</div>
                  <div className="listt1">label</div>
                  <div className="listt1">
                    <div className="list_A">A</div>
                    <div>label</div>
                  </div>
                </div>
              </div>
              <div className="column3_row1">
                <label>created 9 minutes ago</label>
                <label className="cl3row1">
                  <DiAptana />
                  Configure
                </label>
              </div>
              <div className="column3_row2">
                <label>uploaded 8 minutes ago</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default EditEpic

//   return (
//     <div>
//       <div className="outer">
//         {/* USer name with icon */}
//         {/* <div className="firstrow">
//           <div className="usericon"> </div>
//           <label>User</label>
//         </div> */}
//         <div className="secondrow">
//           {/* Side navigation menu */}

//           {<Menu />}

//           {/* Main outline */}
//           <div className="secondcolumn">
//             <div className="buttonright">
//               <label>EditEpic</label>
//               <button onClick={handleClick}>SAVE</button>
//             </div>
//             <div className="seccolumsecondrow">
//               <div className="titleinput">
//                 <lable>Title</lable><br></br>
//                 <input  type="text" onChange={(e)=>{setTitle(e.target.value)}}></input>
//               </div>
//               <br></br>
//               <div>
//                 <lable className="titleinput">
//                    Description
//                 </lable><br></br>
//                 <input className="descriptioninput" type="text" onChange={(e)=>{setDescription(e.target.value)}}></input>
//               </div>
// <br></br>
//               <div className="statusinlongwidth">
//                 <label>Status</label>
//                 <br></br>
//                 <select className="select1" id="status-select" onChange={(e)=>{setStatus(e.target.value)}}>
//                   <option value="">-- option--</option>
//                   <option value="ToDo">ToDo</option>
//                   <option value="InProgress">InProgress</option>
//                   <option value="Review">Review</option>
//                   <option value="Complete">Complete</option>
//                 </select>
//               </div>
//               <br></br>
//               <div className="assignuser">
//                 <label>Assigned to</label>
//                 <br></br>
//                 <select
//                   onSelect={(e) => {
//                     setUser(e.target.value);
//                   }}
//                 >
//                   {user.map((item, index) => {
//                     return <option value={item.id}>{item.txtUserName}</option>;
//                   })}
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default EditEpic;
