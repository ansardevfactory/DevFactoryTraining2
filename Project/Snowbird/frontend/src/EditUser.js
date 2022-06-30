import axios from "axios";
import { useEffect, useState } from "react";

import "./style/styles.css";
import Menu from './Menu';
import Header from "./Header";
import {FiMail} from "react-icons/fi";
import {CgAsterisk} from "react-icons/cg";
function EditUser() {
  var id=localStorage.getItem("id");
  const[uid,setId]=useState("");
  const [array,setArray]=useState([]);
  const[uname,setUname]=useState("");
  const[pw,setPw]=useState("");
  const[role,setRole]=useState("");
  const [uarray,setUArray]=useState([]);
  var nme=localStorage.getItem("name");
  const[errmsg,setErrorMsg]=useState("");
 const[msg,setMsg]=useState("");
  console.log("id"+id);
  useEffect(()=>{
    //alert("hi");
   // var url="http://localhost:8000/userupdatefetch";
   var url="https://8conoiw19k.execute-api.us-west-2.amazonaws.com/userupdatefetch_userPage";
    var header={};
    setId(id);
    //setUname(nme);
    var request='{"id":"'+id+'"}';
  
    axios.post(url,request,header).then((res)=>{
         console.log("res"+JSON.stringify(res.data));
         setArray(res.data);
       
          setUname(res.data[0].txtUserName);
         
          setPw(res.data[0].txtPassword);
       
          setRole(res.data[0].txtUserRole);

          setRole(res.data[0].refUserRole);

    }).catch();


   // var url1="http://localhost:8000/userRolefetch";
   var url1=" https://wu75jb9222.execute-api.us-west-2.amazonaws.com/userrolefetch";
    var req={};
    //console.log("name"+nme)
    var header1={};
    axios.post(url1,req,header1).then((res)=>{
      console.log(res.data);
      
        var len = res.data.length;
        if (len > 0) {
          setUArray(res.data);
          
          
          
         
       
          //console.log(JSON.stringify(array));
           }
    }).catch();

  },[])

  function edituser(){
   // var url="http://localhost:8000/userupdate";
   var url="https://20t9ec368d.execute-api.us-west-2.amazonaws.com/userupdate_userPage";
    var header={};
    var request='{"username":"'+uname+'","password":"'+pw+'","reftype":"'+role+'","id":"'+uid+'","suname":"'+nme+'"}';
    console.log("req"+request);
    // axios.post(url,request,header).then((res)=>{
    //   if(res.data.code=="ER_DUP_ENTRY")
    //   {
    //     alert("Duplicate entry");
       
    //   }
    //   else 
    //   {
    //     alert("User updated !")
    //   }
    //   console.log("after update"+JSON.stringify(res.data));

    // }).catch();
    if(uname && pw && role != "")
    {
      axios.post(url,request,header).then((res)=>{
        if(res.data=="user exists")
      {
      setErrorMsg("Username already in use!! Please try another!!")
      }
      else
      {
        setMsg("User updated succesfully!!!")
        setErrorMsg("");
      }
  
      }).catch();
    }
    else{
    setErrorMsg("All fields are mandatory!!");
    }

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
              <label>Edit User</label></div>
              {/* <div className="prowone_right">
              <button onClick={adduser} >SAVE</button></div> */}
            </div>


            <div className="psecondrow">
              <div className="titlerow1">
                <div className="titlerow1_label"> <label >User Name  </label></div>
                <CgAsterisk className="asterik"/>
                <div className="titlerow1_input">
                   <input type="text" value={uname} onChange={(e)=>{setUname(e.target.value)}}/></div>
                 
              </div>

              <div className="titlerow2">
                <div className="titlerow2_label"> <label >Password   </label></div>
                <CgAsterisk className="asterik"/>
                <div className="titlerow2_input">
                  <input type="password" value={pw} onChange={(e)=>{setPw(e.target.value)}} /></div>
                
              </div>

              <div className="titlerow3">
                <div className="titlerow3_label"> <label >Role   </label></div>
                <CgAsterisk className="asterik"/>
                <div className="titlerow3_input">
                <select  value={role}  onChange={(e)=>{setRole(e.target.value)}}>
                <option>---select---</option>
                    {uarray.map((uitem,uindex)=>{
                           
                        return<>
                         
                         <option value={uitem.id}>{uitem.txtUserRole}</option>
                       
                           </>
                       
                      })}
                      </select></div>
                
              </div>
              <div className="titlerow4">
                <button className="titlerow4_button" onClick={edituser}>Save</button>
              </div>
              <p className="errmsg">{errmsg}</p>
              <p className="msg">{msg}</p>
              </div>
            
              </div>

          
        </div>
      </div>
    </div>
  );
}
export default EditUser;
