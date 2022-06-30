import axios from "axios";
import { useEffect, useState } from "react";
import "./style/styles.css";
import Menu from "./Menu";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

import Header from "./Header";
import {  FaSearch } from "react-icons/fa";
import {
  BsChevronDown,
  BsStar,
  BsThreeDots,
  BsStarFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
function Epic() {
  const navigate=useNavigate();
  const [array, setArray] = useState([]);
  //var url = "http://localhost:8000/epicfecth";
  var url="https://i3bfozp4kg.execute-api.us-west-2.amazonaws.com/epicfetch_epicpage";
  var request = {};
  var header = {};
  useEffect(() => {
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        for (const element of res.data) {
          element.isClicked = true;
        }
        setArray(res.data);
      })
      .catch();
  }, []);

  const handleClick = (e, index) => {
    e.preventDefault();
    var temp = [...array];
    console.log("temp" + JSON.stringify(temp[index]));
    temp[index].isClicked = temp[index].isClicked ? false : true;
    console.log("temp" + JSON.stringify(temp[index]));
    setArray(temp);
  };
function editepic(n)
{
  console.log("fetid"+n);
    //setPrjctId(n);
    localStorage.setItem("EpicId",n);
  navigate("/editepic")
}
function addepic()
{
  navigate("/addepic")
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
        {/* Main outline */}
        <div className="secondcolumn">
          {/* <div className="prowone">
            <label>Task</label>
            <button onClick={handleClick}>Add Task</button>
          </div> */}

            <div className="prowone_prjct">
            <div className="prowone_prjct_left"><label>Epic</label></div>
           <div className="prowone_prjct_right"> <button  onClick={addepic}>Create New</button></div>
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
              <th style={{fontWeight:"bolder"}}>Epic</th>
              <th style={{fontWeight:"bolder"}}>Project</th>
              <th style={{fontWeight:"bolder"}}>Status</th>
              <th style={{fontWeight:"bolder"}}>AssignedTo</th>
              <th></th>
            </tr>
            {array.map((item,index)=>{
              return<>
              <tr>
              <td>
                <BsStar />
              </td>
              <td>{item.epic}</td>
              <td>{item.txtName}</td>
              <td>{item.txtStatus}</td>
              
              <td>
                <div className="rowflex">
                  <div className="circle">{item.txtUserName.charAt(0)}</div><td>{item.txtUserName}</td>
                </div>
              </td>
              <td>
                <BsThreeDots onClick={()=>{editepic(item.id)}}/>
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












//   return (
//     <div>
//       <div className="outer">
//         {/* USer name with icon */}
//         {/* <div className="firstrow">
//           <div className="usericon"></div>
//           <label>User</label>
//         </div> */}
//         <div className="secondrow">
//           {/* Side navigation menu */}
//           {<Menu />}

//           {/* Main outline */}
//           <div className="secondcolumn">
//             <div className="prowone">
//               <label>Epic </label>
//               <button onClick={addepic}>Create New</button>
//             </div>
//             <div className="tablerow">
//               <table>
//                 <thead>
//                   <th className="withborder constant"></th>
//                   <th className="withborder constant">id</th>
//                   <th className="withborder">EpicName</th>
//                   <th className="withborder">Status</th>
//                   <th className="withborder">ProjectName</th>
//                 </thead>
//                 <tbody>
//                   {array.map((item, index) => {
//                     return (
//                       <>
//                         <tr  onClick={(e) => {
//   handleClick(e, index);
// }}
                          
//                         >
//                           <td>
//                             {item.isClicked? (
//                               <FaAngleDown
//                                 onClick={(e) => handleClick(e, item, index)}
//                               />
//                             ) : (
//                               <FaAngleRight
//                                 onClick={(e) => handleClick(e, item, index)}
//                               />
//                             )}
//                           </td>
                         
//                           <td className="constant" onClick={()=>{editepic(item.id)}}>{item.id}</td>
//                           <td>{item.txtStatus}</td>
//                           <td>{item.txtName}</td>
//                           <td></td>
//                         </tr>
//                         {item.Task.map((childItem, ChildIndex) => {
//                           return (
//                             <>
//                               <tr
//                                 className={item.isClicked ? "display" : "none"}
//                               >
//                                 <td></td>
//                                 <td></td>
//                                 <td className="task">{childItem.txtTitle}</td>
//                                 <td className="task">{childItem.txtStatus}</td>
//                               </tr>
//                             </>
//                           );
//                         })}
//                       </>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//             <div className="pbutton">
//               <button>1</button>
//               <button>2</button>
//               <button>3</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
}
export default Epic;
