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
function EditProject() {
  const [options, setOption] = useState([])
  const [name, setTextName] = useState('')
  const [type, setTextType] = useState('')
  const [owner, setRefOwner] = useState('3')
  const [pdetails, setPdetails] = useState([])
  const [desc, setDesc] = useState('')
  var pid
  var pid = localStorage.getItem('Id')

  useEffect(() => {
    console.log('pid' + pid)
    // var url = "http://localhost:8000/ownerfetch";
    var url =
      'https://wc9kyrz7xi.execute-api.us-west-2.amazonaws.com/ownerfetch'
    // var url1="http://localhost:8000/projectload";
    var url1 =
      ' https://0kcgyqm6ra.execute-api.us-west-2.amazonaws.com/editproject_selectedproject'
    var request1 = '{"pid":"' + pid + '"}'

    var header1 = {}
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

    axios
      .post(url1, request1, header1)
      .then((res) => {
        console.log(res.data)
        setPdetails(res.data)
        setTextName(res.data[0].txtName)
        setRefOwner(res.data[0].txtUserName)
        setRefOwner(res.data[0].id)
        setDesc(res.data[0].txtDescription)
      })
      .catch()
  }, [])
  function updateproject() {
    // var url = "http://localhost:8000/projectUpdate";
    // var request = { prjctname: name, prjcttype: type, refowner: owner ,id:pid,desc:desc};
    var url =
      ' https://rwxzbtkeol.execute-api.us-west-2.amazonaws.com/default/projectupdate'
    var request =
      '{ "prjctname": "' +
      name +
      '",  "refowner": "' +
      owner +
      '" ,"id":"' +
      pid +
      '","desc":"' +
      desc +
      '"}'
    console.log('owner :' + JSON.stringify(owner))
    console.log('id :' + JSON.stringify(pid))
    var header = {}
    axios
      .post(url, request, header)
      .then((res) => {
        console.log('reS' + res)
        if (res.data != 'undefined') {
          alert('Project updated successfully')
        }
      })
      .catch()
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
          {/* <div className="path"><FcFlashOn/>Test Project/<FcBookmark/>Test-5</div> */}
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

                  <input
                    type="text"
                    className="iinput"
                    value={name}
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
                    value={desc}
                    onChange={(e) => {
                      setDesc(e.target.value)
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
                  <button className="row8" onClick={updateproject}>
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
                    {/* <div className="list"><HiOutlineUserCircle/>Unassigned</div> */}
                    <div>
                      <div className="listt">
                        <select
                          className="project_select"
                          value={owner}
                          onChange={(e) => {
                            setRefOwner(e.target.value)
                          }}
                        >
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
                <div>
                  <label className="column3_row1">uploaded 8 minutes ago</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditProject

//  (
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
//             <label>Edit Project</label>
//             <button onClick={updateproject}>SAVE</button>
//           </div>

//           <div className="psecondrow">
//               <div className="titlerow">
//               <label>Title</label><br></br>
//               {pdetails.map((item,index)=>{
//                 return<>
//                   <input type="text" defaultValue={item.txtName} onChange={(e) => { setTextName(e.target.value)}}></input>
//                 </>
//               })}

//            </div>
//            <div className="descriptiion">
//                <label>Description</label><br></br>
//                {/* <textarea/> */}
//                {pdetails.map((item,index)=>{
//                 return<>
//                       <input type="text" defaultValue={item.txtDescription } onChange={(e) => { setDesc(e.target.value)}}/>
//                 </>
//                })}

//            </div>

//            <div className="typerow">
//              <label>Type</label><br></br>

//              <select     onChange={(e) => { setTextType(e.target.value) }}>
//              {pdetails.map((pitem,pindex)=>{
//                  return<>

//                  <option defaultValue={pitem.txtType}>{pitem.txtType}</option>
//                   <option value={"Telecom"}>Telecom</option>
//                  <option value={"Business"}>Business</option>
//                  </>
//                })}

//              </select>
//            </div>

//            <div className="ownerrow">
//             <label>Owner</label>
//             <br></br>
//             {/* onSelect={(e)=>{setRefOwner(e.target.value)}} */}
//             <select onChange={(e) => { setRefOwner(e.target.value) }} >

//               {options.map((item, index) => {
//                 return <>

//               <option>{item.txtUserName}</option>
//   </>

//               })}

//             </select>
//           </div>
//           </div>
//         </div>

//    </div>
//     </div>
//   </div>
// );
