import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleDown, FaAngleRight, FaSearch } from "react-icons/fa";
import { ReactSession } from "react-client-session";
import Menu from "./Menu";
import Header from "./Header";
import './style/styles.css';
import {
  BsChevronDown,
  BsStar,
  BsThreeDots,
  BsStarFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
function Project() {
  const navigate = useNavigate();
  const [array, setArray] = useState([]);
  const [id, setPrjctId] = useState({});
  var url = "http://localhost:8000/projectdetailfetchNew";
  var request = { poid: 4 };
  var header = {};
  useEffect(() => {
    axios
      .post(url, request, header)
      .then((res) => {
        setArray(res.data);
        // console.log(res.data);
      })
      .catch();
  }, []);

  function createnew() {
    navigate("/addproject");
  }

  function editproject(n) {
    console.log("fetid"+n);
    //setPrjctId(n);
    localStorage.setItem("Id",n);
    console.log("id:" + JSON.stringify(id));
    //localStorage.setItem("index",index);
   
    //console.log("index"+JSON.stringify(index));
    navigate("/editproject");

  }
  const handleExpand = (e, item, index) => {
    e.preventDefault();
    var temp = [...array];
    temp[index].isExpaned = temp[index].isExpaned ? false : true;
    setArray(temp);
  };
  const handleChildExpand = (e, item, index, childIndex) => {
    e.preventDefault();
    var temp = [...array];
    temp[index].array[childIndex].isExpaned = temp[index].array[childIndex]
      .isExpaned
      ? false
      : true;
    setArray(temp);
  };
    const handleTaskExpand = (e, item, index,taskindex) => {
      e.preventDefault();
      var temp = [...array];
      temp[index].array[taskindex].isExpaned = temp[index].array[taskindex]
        .isExpaned
        ? false
        : true;
      setArray(temp);
    };
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
            <div className="prowone_prjct">
              <div className="prowone_prjct_left"><label>Projects</label></div>
             <div className="prowone_prjct_right"> <button  onClick={createnew}>Create New</button></div>
            </div>
            {/* <div className="tablerow"> */}
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
                <th>Name</th>
                <th>
                  <div className="rowflex">
                    Key
                    <BsFillCaretDownFill />
                  </div>
                </th>
                <th>Type</th>
                <th>Lead</th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <BsStar />
                </td>
                <td>SnowBird</td>
                <td>SB</td>
                <td>Team mananged software</td>
                <td>
                  <div className="rowflex">
                    <div className="circle">S</div>Sunu
                  </div>
                </td>
                <td>
                  <BsThreeDots onClick={editproject}/>
                </td>
              </tr>{" "}
              <tr>
                <td>
                  <BsStar />
                </td>
                <td>ECommerce</td>
                <td>EC</td>
                <td>Team mananged software</td>
                <td>
                  <div className="rowflex">
                    <div className="circle">AS</div>Ansar
                  </div>
                </td>
                <td>
                  <BsThreeDots onClick={editproject} />
                </td>
              </tr>{" "}
              {/* <tr>
                <td>
                  <BsStar />
                </td>
                <td>My Project</td>
                <td>MP</td>
                <td>Team mananged software</td>
                <td>
                  <div className="rowflex">
                    <div className="circle">AK</div>Anjali
                  </div>
                </td>
                <td>
                  <BsThreeDots />
                </td>
              </tr>{" "} */}
              {/* <tr>
                <td>
                  <BsStar />
                </td>
                <td>My Project</td>
                <td>MP</td>
                <td>Team mananged software</td>
                <td>
                  <div className="rowflex">
                    <div className="circle">AK</div>Anjali
                  </div>
                </td>
                <td>
                  <BsThreeDots />
                </td>
              </tr> */}
            </table>
          </div>
              </div>
              <table>

                <tr>
                  <th></th>
                </tr>
                {/* <thead>
                  <th className="withborder constant"></th>
                  <th className="withborder constant">#id</th>
                  <th className="withborder">Project name</th>
                  <th className="withborder">Project owner</th>
                </thead> */}

                {/* ? */}
                        {/* <tr key={item.id}></tr> */}
                        {/* <td className="right constant"></td> */}
                        {/* <tr className="project"  >
                          <td>
                            {item.isExpaned ? (
                              <FaAngleDown
                                onClick={(e) => handleExpand(e, item, index)}
                              />
                            ) : (
                              <FaAngleRight
                                onClick={(e) => handleExpand(e, item, index)} 
                              />
                            )}
                          </td>
                          <td className="constant" onClick={() => { editproject(item.id); }} value={item.id} 
                          >
                            {item.id}
                          </td>
                          <td>{item.txtName}</td>
                          <td>{item.txtUserName}</td>
                          <td></td>
                          <td>{JSON.stringify(item.epic)}</td>  */}
                        {/* </tr>

                        {item.epic.map((epicitem, epicindex) => {
                          return (
                            <>
                              <tr
                                className={item.isExpaned ? "none" : "display"}
                              >
                                <td className="constant"></td>
                                <td className="epic">
                                  {epicitem.isExpaned ? (
                                    <FaAngleDown
                                      onClick={(e) =>
                                        handleChildExpand(
                                          e,
                                          item,
                                          index,
                                          epicindex
                                        )
                                      }
                                    />
                                  ) : (
                                    <FaAngleRight
                                      onClick={(e) =>
                                        handleChildExpand(
                                          e,
                                          item,
                                          index,
                                          epicindex
                                        )
                                      }
                                    />
                                  )}
                                </td>

                                <td></td> */}
                                {/* <td className="epic">{epicitem.txtTitle}</td>
                                <td className="epic">{epicitem.txtStatus}</td>
                                <td className="epic"></td>
                              </tr>

                              {epicitem.task.map((taskitem, taskindex) => {
                                return (
                                  <>
                                    <tr
                                      className={
                                        item.isExpaned ? "none" : "display"
                                      }
                                    >
                                      <td className="constant"></td>
                                      <td className="right constant">
                                        {taskitem.isExpaned ? (
                                          <FaAngleDown
                                            onClick={(e) =>
                                              handleTaskExpand(
                                                e,
                                                item,
                                                index,
                                                taskindex
                                              )
                                            }
                                          />
                                        ) : (
                                          <FaAngleRight
                                            onClick={(e) =>
                                              handleTaskExpand(
                                                e,
                                                item,
                                                index,
                                                taskindex
                                              )
                                            }
                                          />
                                        )}
                                      </td> */}

                                      {/* <td></td> */}
                                      {/* <td className="task">
                                        {taskitem.txtTitle}
                                      </td>
                                      <td className="task">
                                        {taskitem.txtStatus}
                                      </td> */}
                                      {/* <td> {JSON.stringify(epicitem.task)}</td> */}
                                    {/* </tr>
                                  </>
                                );
                              })}
                            </>
                          );
                        })}
                      </>
                    );
                  })}
                </tbody> */}
              </table>
              {/* <div className="pbutton">
                <button>1</button>
                <button>2</button>
                <button>3</button>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
