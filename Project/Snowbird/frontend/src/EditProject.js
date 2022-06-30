import axios from "axios";
import { ReactSession } from "react-client-session";
import { useEffect, useState } from "react";
import Menu from "./Menu";
function EditProject() {
  const [options, setOption] = useState([]);
  const [name, setTextName] = useState("");
  const [type, setTextType] = useState("");
  const [owner, setRefOwner] = useState("3");
  const [pdetails,setPdetails]=useState([]);
  const[desc,setDesc]=useState("");
  var pid;
  var pid=localStorage.getItem("Id");
 
  useEffect(()=>{

    
    console.log("pid"+pid);
    var url = "http://localhost:8000/ownerfetch";
    var url1="http://localhost:8000/projectload";
    var request1={"pid":pid};
    
    var header1={};
    var request = {};
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        var len = res.data.length;
        // setA(len);
        if (len > 0) {

          setOption(res.data);
         }
      })
      .catch();

      axios.post(url1,request1,header1).then((res)=>{
        console.log(res.data);
        setPdetails(res.data);
        

      }).catch();

  },[])
  function updateproject()
  {
    var url = "http://localhost:8000/projectUpdate";
    var request = { prjctname: name, prjcttype: type, refowner: owner ,id:pid,desc:desc};
    console.log("owner :" + JSON.stringify(owner));
    console.log("id :" + JSON.stringify(pid));
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log("reS"+res);
        if (res.data !='undefined') {
          alert("Project updated successfully");
        }

      })
      .catch();
  }
  
    return (
      
      <div>
      <div className="outer">
        {/* width:100% */}
        <div className="outer_row1">
          {/* width:50% */}
          <div className="path">
            <FcFlashOn />
            Test Project/
            <FcBookmark />
            Test-5
          </div>
          <div className="closeicon">{/* width:50% */}X</div>
        </div>
        <div className="outer_row2">
          {/* width:100% */}
          <div className="outer_column1">
            {/* width:60% */}
            <div>
              <input type="text"></input>
              {/* <label className="column1_row1">EditProject</label> */}
            </div>
            <div className="column1_row2">
              <button1>
                <GrAttachment />
                Attach
              </button1>
              <button2>
                <AiOutlineApartment /> Add a child issue
              </button2>
              <button3>
                <AiOutlineLink /> Link issue
              </button3>
              <select className="select">
                <option value=""></option>
              </select>
              <button4>...</button4>
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
                <button5>Show</button5>
                <button6>All</button6>
                <button7>Comments</button7>
                <button8>History</button8>
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
              <button9 className="row8">Save</button9>
              <button10 className="row9">Cancel</button10>
            </div>
          </div>
          <div className="outer_column2">
            <div className="column2_row1">
              <select className="select1">
                <option value="To Do">To Do</option>
              </select>
            </div>
            <div className="column2_row2">Details</div>
            <div className="column2_row3">
              <div className="column2_row3_1">
                <div className="list">Assignee</div>
                <div className="list">label</div>
                {/* <div className="list">label</div> */}
                {/* <div className="list">label</div> */}
                {/* <div className="list">label</div> */}
                {/* </div> */}
                <div className="column2_row3_2">
                  <div className="list">
                    <HiOutlineUserCircle />
                    Unassigned
                  </div>
                  <div className="list">None</div>
                  {/* <div className="list">label</div>
              <div className="list">label</div>
              <div className="list">
                <div className="list_A">A</div><div>label</div>
              </div>
            </div> */}
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

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      // <div>
      //   <div className="outer">
      //     {/* USer name with icon */}

      //     {/* <div className="firstrow">
      //       <div className="usericon"> </div>
      //       <label>User</label>
      //     </div> */}
      //     <div className="secondrow">
      //       {/* Side navigation menu */}
      //       {<Menu/>}
            
      //       <div className="secondcolumn">
      //         <div className="prowone">
      //           <label>Edit Project</label>
      //           <button onClick={updateproject}>SAVE</button>
      //         </div>
  
      //         <div className="psecondrow">
      //             <div className="titlerow">
      //             <label>Title</label><br></br>
      //             {pdetails.map((item,index)=>{
      //               return<>
      //                 <input type="text" defaultValue={item.txtName} onChange={(e) => { setTextName(e.target.value)}}></input>
      //               </>
      //             })}
                     
      //          </div>
      //          <div className="descriptiion">
      //              <label>Description</label><br></br>
      //              {/* <textarea/> */}
      //              {pdetails.map((item,index)=>{
      //               return<>
      //                     <input type="text" defaultValue={item.txtDescription } onChange={(e) => { setDesc(e.target.value)}}/>
      //               </>
      //              })}
                   
      //          </div>
  
      //          <div className="typerow">
      //            <label>Type</label><br></br>
                 
      //            <select     onChange={(e) => { setTextType(e.target.value) }}>
      //            {pdetails.map((pitem,pindex)=>{
      //                return<>
                     
      //                <option defaultValue={pitem.txtType}>{pitem.txtType}</option>
      //                 <option value={"Telecom"}>Telecom</option>
      //                <option value={"Business"}>Business</option>
      //                </>
      //              })}
                    
                    
      //            </select>
      //          </div>
  
      //          <div className="ownerrow">
      //           <label>Owner</label>
      //           <br></br>
      //           {/* onSelect={(e)=>{setRefOwner(e.target.value)}} */}
      //           <select onChange={(e) => { setRefOwner(e.target.value) }} >
                  
      //             {options.map((item, index) => {
      //               return <>

      //             <option>{item.txtUserName}</option>
      // </>
                    


      //             })}

      //           </select>
      //         </div>
      //         </div>
      //       </div>
  
  
      //  </div>
      //   </div>
      // </div>
    );
  }
  export default EditProject;
  