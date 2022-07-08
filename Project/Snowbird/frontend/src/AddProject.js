
import axios from 'axios'
import { ReactSession } from 'react-client-session'
import { useEffect, useState } from 'react'
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
import './style/styles.css'
function AddProject() {
  
  const [options, setOption] = useState([])
  const [name, setTextName] = useState('')
  const [type, setTextType] = useState('')
  const [owner, setRefOwner] = useState('')
  const [descri, setDescri] = useState('')
  //  Dropdown for owner
  useEffect(() => {
    //var url = "http://localhost:8000/ownerfetch";
    var url =
      ' https://wc9kyrz7xi.execute-api.us-west-2.amazonaws.com/ownerfetch'
    var request = {}
    var header = {}
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data)
        var len = res.data.length
        // setA(len);
        if (len > 0) {
          setOption(res.data)
        }
      })
      .catch()
  }, [])
  //Insert of new project
  function handleclick() {
    //  var url = "http://localhost:8000/projectinsert";
    //  var request = { name: name, type: type, owner: owner };
    var url =
      'https://d7pr4pwfi4.execute-api.us-west-2.amazonaws.com/projectinsert'
    var request =
      '{ "name": "' +
      name +
      '", "owner": "' +
      owner +
      '" ,"desc":"' +
      descri +
      '"}'
    console.log('owner :' + JSON.stringify(owner))
    var header = {}
    axios
      .post(url, request, header)
      .then((res) => {
        console.log('reS' + JSON.stringify(res.data))
        if (res.data != 'undefined') {
          alert('Inserted New project successfully')
        }
        //ReactSession.get("setRefOwner"+owner);
      })
      .catch()
  }

  return (
<div>
    <div className="outer">
      {/* width:100% */}
      {<Header />}
      {/* Main outline */}
      <div className="secondrow">
        <div className="firstcolumn">
          <Menu />
        </div>

        <div className="Seconddcolumn">
          {/* width:50% */}
          {/* <div className="path"><FcFlashOn/>Test Project/<FcBookmark/>Test-5</div> */}
          {/* <div className="closeicon">width:50%x</div> */}
          {/* </div> */}
          <div className="outer_row2">
            {/* width:100% */}
            <div className="outer_column1">
              {/* width:60% */}
              <div>
                <div className="path">
                  <FcFlashOn />
                  AddProject/
                  <FcBookmark />
                  Test-5
                </div>
                <input
                  type="text"
                  className="iinput"
                  onChange={(e) => {
                    setTextName(e.target.value)
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
                  onChange={(e) => {
                    setDescri(e.target.value)
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
                <button className="row8" onClick={handleclick}>
                  Save
                </button>
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
                  <div>
                    {/* <div className="list"><HiOutlineUserCircle/>Unassigned</div> */}
                    <div className="listt">
                      <select className="project_select">
                        {options.map((item, index) => {
                          return (
                            <>
                              <option value={item.id}>
                                {item.txtUserName}
                              </option>
                            </>
                          )
                        })}
                      </select>
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
  </div>

  /************************/

  // return (
  //   <div>
  //     <div className="outer">
  //       {/* USer name with icon */}
  //       {/* <div className="firstrow">
  //         <div className="usericon"> </div>
  //         <label>User</label>
  //       </div> */}
  //       <div className="secondrow">
  //         {/* Side navigation menu */}

  //         {<Menu/>}

  //         <div className="secondcolumn">
  //           <div className="prowone">
  //             <label>Add Project</label>
  //             <button onClick={handleclick}>SAVE</button>
  //           </div>

  //           <div className="psecondrow">
  //             <div className="titlerow">
  //               <label>Title</label>
  //               <br></br>
  //               {/* onChange={(e)=>{setTextName(e.target.value)}} */}
  //               <input type="text" onChange={(e) => { setTextName(e.target.value) }} />
  //             </div>
  //             <div className="descriptiion">
  //               <label>Description</label>
  //               <br></br>
  //               {/* <textarea/> */}
  //               <input type="text" onChange={(e) => { setDescri(e.target.value) }} />
  //             </div>

  //             <div className="typerow">
  //               <label>Type</label>
  //               <br></br>
  //               {/* onSelect={(e)=>{setTextType(e.target.value)}} */}
  //               <select onChange={(e) => { setTextType(e.target.value) }}>
  //                 <option>--options--</option>
  //                 <option>Telecom</option>
  //                 <option>Business</option>
  //               </select>
  //             </div>

  //             <div className="ownerrow">
  //               <label>Owner</label>
  //               <br></br>
  //               {/* onSelect={(e)=>{setRefOwner(e.target.value)}} */}
  //               <select onChange={(e) => { setRefOwner(e.target.value) }} >

  //                 {options.map((item, index) => {
  //                   return <option value={item.id}>{item.txtUserName}</option>

  //                 })}

  //               </select>
  //             </div>

  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
)
}
export default AddProject
