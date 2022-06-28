import axios from "axios";
import { useEffect, useState } from "react";
import "./style/styles.css";
import Menu from './Menu';
import Header from "./Header";
import {FiMail} from "react-icons/fi";
import {CgAsterisk} from "react-icons/cg";
function AddUser() {
  const[array,setArray]=useState([]);
  const [username,setUname]=useState("");
  const[password,setPassword]=useState("");
  const [type,setType]=useState("");

  var temp;
  useEffect(()=>{
    var url="http://localhost:8000/userRolefetch";
    var req={};
    var header={};
    axios.post(url,req,header).then((res)=>{
      console.log(res.data);
      
        var len = res.data.length;
        if (len > 0) {
          setArray(res.data);
         
       
          //console.log(JSON.stringify(array));
           }
    }).catch();
  },[])

 function adduser()
 {
   var url="http://localhost:8000/insertuser";
   var request={username:username,password:password,type:type};
   var header={};
   console.log(JSON.stringify(request));
   axios.post(url,request,header).then((res)=>{
     if(res.data=="User already exist!!!")
    alert(res.data);
   }).catch();

 }
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
          <div className="secondcolumn">
            {/* <div className="prowfirst">
              <FiMail className="prowfirst_mail"/>
            </div> */}
            <div className="prowone">
              <div className="prowone_left">
              <label>Add User</label></div>
              {/* <div className="prowone_right">
              <button onClick={adduser} >SAVE</button></div> */}
            </div>


            <div className="psecondrow">
              <div className="titlerow1">
                <div className="titlerow1_label"> <label >User Name  </label></div>
                <CgAsterisk className="asterik"/><div className="titlerow1_input"> <input type="text" onChange={(e)=>{setUname(e.target.value)}}/></div>
                 
              </div>

              <div className="titlerow2">
                <div className="titlerow2_label"> <label >Password   </label></div>
                <CgAsterisk className="asterik"/><div className="titlerow2_input"><input type="text" onChange={(e)=>{setPassword(e.target.value)}}/></div>
                
              </div>

              <div className="titlerow3">
                <div className="titlerow3_label"> <label >Role   </label></div>
                <CgAsterisk className="asterik"/><div className="titlerow3_input"><select><option>Employee</option></select></div>
                
              </div>
              <div className="titlerow4">
                <button className="titlerow4_button">Save</button>
              </div>
              </div>
            
              </div>

          
        </div>
      </div>
    </div>
  );
}
export default AddUser;
