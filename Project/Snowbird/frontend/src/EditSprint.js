import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react'
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

function EditSprint() {
  const [options, setOption] = useState([])
  const [Sprintname, settextSprintname] = useState('')
  const [Description, setdescription] = useState('')
  const [Status, setStatus] = useState('')
  const [assignedto, settxtUserName] = useState([])
  const [fromdate, setdtActstartdate] = useState('2022-06-30')
  const [todate, setdtActenddate] = useState()
  const [array, setArray] = useState([])
  const [taskarray, settaskarray] = useState([])
  const [statarray, setstatarray] = useState([
    { Id: 1, Status: 'To Do' },
    { Id: 2, Status: 'In Progress' },
    { Id: 3, Status: 'Review' },
    { Id: 4, Status: 'Completed' },
  ])
  const [sparray, setsparray] = useState([])
  const navigate = useNavigate()
  const [Id, setid] = useState('')

  useEffect(() => {
    //localStorage.getItem(Id)
    var tempid = localStorage.getItem('spid')
    //console.log(tempid)
    setid(tempid)

    var url = 'http://localhost:8000/fetchuser'
    var req = {}
    var header = {}
    axios
      .post(url, req, header)
      .then((res) => {
        setArray(res.data)
      })
      .catch()
    
    var url1 = 'http://localhost:8000/sprintdetails'
    var req1 = { Id: tempid }
    var header1 = {}
    axios
      .post(url1, req1, header1)
      .then((res) => {
        //alert('hi')
        //console.log(JSON.stringify(req1))
        console.log('response' + JSON.stringify(res.data))
       
        setsparray(res.data)

        settextSprintname(res.data[0].txtSprintname)
        setdescription(res.data[0].Description)
        setStatus(res.data[0].Status)
        settxtUserName(res.data[0].assignedto)
        setdtActstartdate(res.data[0].dtActstartdate)
        setdtActenddate(res.data[0].dtActenddate)
        console.log("hi"+res.data[0].dtActenddate)
      })
      .catch()
      var url2 = 'http://localhost:8000/fetchsprintwisetasklist'
    var req2 = {Id:tempid}
    var header2 = {}
    axios
      .post(url2, req2, header2)
      .then((res) => {
        // console.log(res)
        settaskarray(res.data)
      
      })
      .catch()
  }, [])

  function handleclick() {
    console.log(fromdate)
    var url = 'http://localhost:8000/updatesprint'
    var request = {
      Id: Id,
      txtSprintname: Sprintname,
      Description: Description,
      dtActdate: fromdate,
      dtActenddate: todate,
      Status: Status,
      txtUsername: assignedto,
    }
    // console.log(request)
    var header = {}

    axios
      .post(url, request, header)
      .then((res) => {
        // console.log('result' + JSON.stringify(res.data))
        if (res.data !== 'undefined') {
          alert('updated sprint')
        }
      })
      .catch()
  }
  function newClick() {
    navigate('/Task')
  }
  function newClick() {
    navigate('/EditTask')
   }

  return (
<div>
      <div className="outer">
        {/* Side navigation menu */}

        {<Header />}
        {/* Main outline */}
        <div className="secondrow">
          <div className="firstcolumn">
            <Menu />
          </div>
          <div className="Seconddcolumn">
            {/* width:50% */}
            {/* <div className="outer_row1"> */}
            {/* width:50% */}
            {/* <div className="path"><FcFlashOn/>Test Project/<FcBookmark/>Test-5</div> */}
            {/* <div className="closeicon">width:50%X</div> */}
            {/* </div> */}
            <div className="outer_row2">
              {/* width:100% */}
              <div className="outer_column1">
                {/* width:60% */}
                <div>
                  <div className="path">
                    <FcFlashOn />
                    EditSprint/
                    <FcBookmark />
                    Sprint-5
                  </div>
                  <input type="text" className="iinput" value={Sprintname}
                onChange={(e) => {
                  settextSprintname(e.target.value)
                }}
 />
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
                  <select className="sselect">
                    <option value=""></option>
                  </select>
                  <button className="row2_3buttons">...</button>
                </div>
                <div className="column1_row3">
                  <label>Description</label>

                  <textarea
                    rows="10"
                    cols="200"
                    placeholder="Add a description..."
                    value={Description}
                onChange={(e) => {
                  setdescription(e.target.value)
                }}

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
                  <button className="row8" onClick={handleclick}>Save</button>
                  <button className="row9">Cancel</button>
                </div>
              </div>
              <div className="outer_column2">
                <div className="column2_row1">
                  <div className="closeicon">{/* width:50% */}X</div>
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
                      {' '}
                      <div className="listt">
                        <select className="project_select"
                        value={assignedto}
                        onChange={(e) => {
                          settxtUserName(e.target.value)
                        }}
                      >
                        {array.map((item, index) => {
                          return (
                            <>
                              <option value={item.txtUserName}>
                                {item.txtUserName}
                              </option>
                            </>
                          )
                        })}</select>
                      </div>
                    </div>
                    <div className="listt">None</div>
                    <div className="listt">label</div>
                    <div className="listt">label</div>
                    <div className="listt">
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
                <div>
                  <label className="column3_row1">uploaded 8 minutes ago</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*secondrow*/}
      {/*outer*/}
    </div>
  )
}
export default EditSprint




    /*<div>
      <div className="outer">
        {/* USer name with icon */
       /* <div className="firstrow">
          <div className="usericon"> </div>
          <label>User</label>
        </div> */
       /* <div className="secondrow">
          {/* Side navigation menu */

         /* {<Menu />}
          {/* Main outline */
         /* <div className="secondcolumn">
            <div className="buttonright">
              <label>EditTask</label>
              <button onClick={handleClick}>SAVE</button>
            </div>
            <div className="seccolumsecondrow">
              <div className="titleinput">
                <label>Title</label><br></br>
                <input  type="text" value={title}></input>
              </div>
              <br></br>
              <div>
                <label className="titleinput" >
                   Description
                </label><br></br>
                <input className="descriptioninput" type="text" value={description}></input>
              </div>
<br></br>
<div className="statusin">
                <label className="lb1">Status</label> <label className="lb2">Estimated Hours</label>
                <br></br>
                <select className="select1" value={status} onChange={(e) => {
                    setStatus(e.target.value);
                  }}id="status-select">
                  
                  <option value="ToDo">ToDo</option>
                  <option value="InProgress">InProgress</option> 
                   <option value="Review">Review</option> 
                   <option value="Complete">Complete</option>
                </select>
                <input type="text"value={hours} onChange={(e) => {
                    setHours(e.target.value);
                  }}></input>
              </div>
              <br></br>
              <div className="assignuser">
                <label>Assigned to</label>
                <br></br>
                <select 
                  onSelect={(e) => {
                    setUser(e.target.value);
                  }}
                >
                  {user.map((item, index) => {
                    return <option>{item.txtUserName}</option>;
                  })}
                </select>
              </div>
              <div className="sprintinput">
                <label>Sprint Name</label>
                <br></br>
                <select
                  onSelect={(e) => {
                    setSprint(e.target.value);
                  }}
                >
                  {sprint.map((item, index) => {
                    return (
                      <>
                        <option>{item.txtSprintName}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="epicinput">
                <label>Epic Name</label>
                <br></br>
                <select
                  onSelect={(e) => {
                    setEpic(e.target.value);
                  }}
                >
                  {epic.map((item, index) => {
                    return (
                      <>
                        <option>{item.txtTitle}</option>
                        console.log(item.txtTitle);
                      </>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditTask;*/