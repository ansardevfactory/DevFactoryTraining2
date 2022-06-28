import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/styles.css';
import Menu from './Menu';
import Header from "./Header";
import m from './images/manager.png';
import { FaSearch, FaStar, FaUser } from 'react-icons/fa';
import {TiUser} from 'react-icons/ti';
import {BsEmojiSmile,BsEmojiSmileFill,BsThreeDots} from 'react-icons/bs'

function Users() {
    const [array,setArray]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
      var url="http://localhost:8000/userfetchforusers";
    var header={};
    var request={};
    axios.post(url,request,header).then((res)=>{
        console.log(res.data);
        setArray(res.data);
    }).catch();

    },[])
    

function newuser()
{

         navigate('/adduser');
    }
    function edituser(n,name)
    {
      console.log(n);
      navigate("/edituser")
      localStorage.setItem("id",n);
      localStorage.setItem("name",name);

    }
  
  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        {/* <div className="firstrow">
          <div className="usericon"></div>
          <label>User</label>
        </div> */}

{<Header />}
        <div className="secondrow">
          {/* Side navigation menu */}
          
          <div className="firstcolumn">
            <Menu />
          </div>
          <div className="secondcolumn">
          <div className="prowone">
            <div className="prowone_left"><label>User List</label></div>
             <div className="prowone_right"> <button onClick={newuser}>New User</button></div> 
             
            </div>
            <div className='secthirdrow'>
               <div className="search_user">
               <input type="text" />
               <FaSearch/>
               </div>
               </div>

               <div className="userlist">
               
                <table>
                  <tr>
                  <th><TiUser className='active'/></th>
                    
                    <th>id</th>
                    <th>Name</th>
                    <th>Role</th>
                  </tr>
                  <tr>
                    <td><input type="checkbox"/></td>
                    <td>1</td>
                    <td>Anajaly</td>
                    <td>Employee</td>
                    <td><BsThreeDots onClick={edituser} className='threedots_user' /></td>
                  </tr>
                  <tr>
                  <td><input type="checkbox"/></td>
                    <td>2</td>
                    <td>Hari</td>
                    <td>Employee</td>
                    <td><BsThreeDots  onClick={edituser} className='threedots_user'/></td>
                  </tr>
                </table>



               </div>
              {/* <table>
                <thead>
                  <th> Id</th>
                  <th> Users</th>
                  <th> UserRoles</th>
                </thead>
                <tbody>
                
                    {array.map((item,index)=>{
                       
                        return<>
                        <tr>
                        <td onClick={()=>{edituser(item.id,item.txtUserName)}}>{item.id}</td>
                        <td>{item.txtUserName}</td>
                        <td>{item.txtUserRole}</td>
                        <td></td>
                        </tr>
                        </>
                       
                    })}
                     
                    </tbody>
              </table> */}
           
          </div>
          {/* <div className="pages">
            <button>-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>10</button>
            <button>+</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default Users