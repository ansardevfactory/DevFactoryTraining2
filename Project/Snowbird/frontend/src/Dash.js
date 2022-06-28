import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Singleuser from "./Singleuser";
import "./style/styles.css";
// import a1 from "./images/a1.png";
import Menu from "./Menu";
import Header from "./Header";
import { FaFlag } from "react-icons/fa";
import Moment from "moment";
import { FaSearch } from "react-icons/fa";
function Dash() {
  var navigate = useNavigate();
  const [array, setArray] = useState([]);
  const [task, setTask] = useState([]);
  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);
  const [thirdArray, setThirdArray] = useState([]);
  const [fourthArray, setFourthArray] = useState([]);
  const [dragElement, setDragElement] = useState({});
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [taskid, setTaskid] = useState("");
  const [time, setTime] = useState("");
  const [uid, setUId] = useState("");
  var temp;
  useEffect(() => {
    var url =
      "https://elvvu6z51m.execute-api.us-west-2.amazonaws.com/userfetch";
    var request = {};
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        for (const element of res.data) {
          element.isSelected = true;
          setArray(res.data);
        }
        console.log("array" + JSON.stringify(res.data));
      })
      .catch();
  }, []);

  // const SingleUserClick = (indx) => {
  //   // alert(indx)
  //   const temp = [...array];
  //   for (const element of temp) {
  //     element.isSelected = false;
  //   }
  //   temp[indx].isSelected = true;
  //   setArray(temp);
  // };

  function tasklist() {
    // e.preventDefault();
    setId(id);

    setFirstArray([]);
    setSecondArray([]);
    setThirdArray([]);
    setFourthArray([]);
    var url =
      "https://zrz50ev48l.execute-api.us-west-2.amazonaws.com/usertaskfetch";
    var header = {};
    console.log("id", id);
    var request = '{ "userId": "' + id + '" }';
    console.log("req" + JSON.stringify(request));
    axios
      .post(url, request, header)
      .then((res) => {
        setTask(res.data);
        var array1 = res.data;

        console.log("arr" + JSON.stringify(array1));
        for (const element of array1) {
          console.log("elemnt==>" + JSON.stringify(element));
          if (element.txtStatus == "to-do") {
            var ab = [...firstArray];
            setFirstArray([ab, element]);
            // console.log("hh"+[JSON.stringify(...firstArray), element])
            console.log("here1" + ab);
          } else if (element.txtStatus == "Inprogress") {
            var bc = [...secondArray];
            setSecondArray([bc, element]);
            console.log("here2" + bc);
          } else if (element.txtStatus == "Review") {
            var cd = [...thirdArray];
            setThirdArray([cd, element]);
            console.log("here3" + cd);
          } else if (element.txtStatus == "completed") {
            var ef = [...fourthArray];
            setFourthArray([ef, element]);
            console.log("here4" + ef);
          } else {
            console.log("no task");
          }
        }
      })

      .catch((err) => {});

    // SingleUserClick(index);
  }
  //   function setTaskClick(e, id,index) {

  //     e.preventDefault();

  //      setFirstArray([ ]);
  //     setSecondArray([ ]);
  //     setThirdArray([ ]);
  //     setFourthArray([ ]);
  //     //alert("hi" + id);
  //     var url = "http://localhost:8000/usertaskfetch";
  //     var request = { id: id };
  //     var header = {};
  //     axios
  //       .post(url, request, header)
  //       .then((res) => {
  //         console.log(res.data);
  //         setTask(res.data);
  //         var array1 = res.data;

  //         console.log("arr" + JSON.stringify(array1));
  //         for (const element of array1) {
  //           console.log("elemnt==>" + JSON.stringify(element));
  //           if (element.txtStatus == "To Do") {
  //             var ab = [...firstArray];
  //             setFirstArray([ab, element]);
  //             // console.log("hh"+[JSON.stringify(...firstArray), element])
  //             console.log("here1" + ab);
  //           } else if (element.txtStatus == "InProgress") {
  //             var bc = [...secondArray];
  //             setSecondArray([bc, element]);
  //             console.log("here2" + bc);
  //           } else if (element.txtStatus == "Review") {
  //             var cd = [...thirdArray];
  //             setThirdArray([cd, element]);
  //             console.log("here3" + cd);
  //           } else if (element.txtStatus == "Complete") {
  //             var ef = [...fourthArray];
  //             setFourthArray([ef, element]);
  //             console.log("here4" + ef);
  //           } else {
  //             console.log("no task");
  //           }
  //         }
  //       })

  //       .catch();
  //   }
  const allowDrop = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    // console.log(e);
    //console.log(dragElement.item);

    var target = e.target.className;
    if (target == "taskbar1") {
      // setStatus("to-do");
      var status = "to-do";
      setStatus(status);
    }
    if (target == "taskbar2") {
      // setStatus("Inprogress");
      var status = "Inprogress";
      setStatus(status);
    }
    if (target == "taskbar3") {
      //var s="Review"
      // setStatus("Review");
      var status = "Review";
      setStatus(status);
    }
    if (target == "taskbar4") {
      // setStatus("completed");
      var status = "completed";
      setStatus(status);
    }
    var startedDiv = dragElement.startedDiv;
    console.log("target" + target);
    console.log("id her" + id);
    console.log("status here", status);
    if (
      target != startedDiv &&
      (e.target.className == "taskbar1" ||
        e.target.className == "taskbar2" ||
        e.target.className == "taskbar3" ||
        e.target.className == "taskbar4")
    ) {
      if (startedDiv == "taskbar1") {
        delete firstArray[dragElement.index];
      } else if (startedDiv == "taskbar2") {
        delete secondArray[dragElement.index];
      } else if (startedDiv == "taskbar3") {
        delete thirdArray[dragElement.index];
      } else if (startedDiv == "taskbar4") {
        delete fourthArray[dragElement.index];
      }
      if (target == "taskbar1") {
        var temp = [...firstArray];
        console.log("dragelement1==>" + JSON.stringify(dragElement));
        var taskid = dragElement.item.id;
        setTaskid(taskid);
        var droptime = Moment(new Date()).format("YYYY-MM-DD hh:mm:ss ");
        console.log(droptime);
        setTime(droptime);
        temp.push(dragElement.item);
        setFirstArray(temp);
      } else if (target == "taskbar2") {
        var temp = [...secondArray];
        console.log("dragelement2==>" + JSON.stringify(dragElement));
        var taskid = dragElement.item.id;
        setTaskid(taskid);
        var droptime = Moment(new Date()).format("YYYY-MM-DD hh:mm:ss ");
        console.log(droptime);
        setTime(droptime);
        temp.push(dragElement.item);
        setSecondArray(temp);
      } else if (target == "taskbar3") {
        var temp = [...thirdArray];
        console.log("dragelement3==>" + JSON.stringify(dragElement));
        console.log("dragelement3==>" + JSON.stringify(dragElement.item.id));
        var taskid = dragElement.item.id;
        setTaskid(taskid);
        var droptime = Moment(new Date()).format("YYYY-MM-DD hh:mm:ss ");
        console.log(droptime);
        setTime(droptime);
        temp.push(dragElement.item);
        setThirdArray(temp);
      }
      if (target == "taskbar4") {
        var temp = [...fourthArray];
        console.log("dragelement4==>" + JSON.stringify(dragElement));
        var taskid = dragElement.item.id;
        setTaskid(taskid);
        setTime(droptime);
        var droptime = Moment(new Date()).format("YYYY-MM-DD hh:mm:ss ");
        console.log(droptime);
        temp.push(dragElement.item);
        setFourthArray(temp);
      }
    }

    var url_drop = "http://localhost:8000/logtable";
    var request = { status: status, user: id, taskid: taskid, logon: droptime };
    console.log("request", request);
    var header = {};
    axios
      .post(url_drop, request, header)
      .then((res) => {
        console.log(res.data);
      })
      .catch();
  };
  const handleDrag = (e, index, startedDiv, item) => {
    console.log(startedDiv);
    console.log(index);
    setDragElement({ index: index, startedDiv: startedDiv, item: item });
  };
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
          <div className="secondcolumn">
            <div className="secondcolumn_row1">
              <label>Projects/</label>
            </div>
            <div className="secondcolumn_row2">
              <label className="test_sprint">TEST Sprint1</label>
            </div>
            <div className="secondcolumn_row3">
              <select
                onChange={(e) => {
                  setId(e.target.value);
                }}
                onClick={tasklist}
              >
                <option>--Select--</option>
                {array.map((item, index) => {
                  return (
                    <>
                      <option value={item.id}>{item.txtUserName}</option>
                      {/* <option>Anjaly</option>
                <option>Sushmitha</option>
                <option>Dony</option>
                <option>Anitha</option> */}
                    </>
                  );
                })}
              </select>
              {/* <div className="secondcolumn_search">
                <input type="text" className="secondcolumn_row3_text" />
                <FaSearch className="fasearch" />
              </div> */}
            </div>
            {/* <div className="listcontainer"> */}
            {/* <div className="usernamerow">
              <div className="label_project"> <label >Project/</label>
              </div>
                {array.map((item, index) => {
                  return (
                    <> */}

            {/* {
                        <Singleuser
                          items={item}
                          index={index}
                          getUid={tasklist}
                          SingleUserClick={SingleUserClick}
                        />
                      } */}
            {/* </>
                  );
                })}
              </div> */}

            {/* Task status name */}
            {/* <div className="statusnamerow">
              <label>TO DO</label>
              <label>InProgress</label>
              <label>Review</label>
              <label>Complete</label>
            </div> */}
            <div className="secondcolumn_row4">
              <div className="taskbars">
                <div
                  className="taskbar1"
                  onDragOver={(e) => allowDrop(e)}
                  onDrop={(e) => handleDrop(e)}
                >
                  <label className="taskbar_label">TO DO</label>
                  <div className="taskbars_task">
                    {firstArray.map((item, index) => {
                      return (
                        <>
                          <FaFlag className="flagtodo" />
                          <label
                            draggable="true"
                            onDragStart={(e) =>
                              handleDrag(e, index, "taskbar1", item)
                            }
                          >
                            <label className="taskbars_task">
                              {item.txtTitle}
                            </label>
                          </label>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div
                  className="taskbar2"
                  onDragOver={(e) => allowDrop(e)}
                  onDrop={(e) => handleDrop(e)}
                >
                 
                  <label className="taskbar_label">IN PROGRESS</label>
                  {/* {JSON.stringify(secondArray)} */}
                  <div className="taskbars_task">
                    {/* <label>Task1</label> */}

                    {secondArray.map((item, index) => {
                      return (
                        <>
                          <FaFlag className="flagprogress" />
                          <label
                            draggable="true"
                            onDragStart={(e) =>
                              handleDrag(e, index, "taskbar2", item)
                            }
                          >
                            <label className="taskbar_tasks">
                              {item.txtTitle}
                            </label>
                          </label>
                        </>
                      );
                    })}
                  </div>
                </div>

                <div
                  className="taskbar3"
                  onDragOver={(e) => allowDrop(e)}
                  onDrop={(e) => handleDrop(e)}
                >
                  <label className="taskbar_label">ON REVIEW</label>
                  {/* {JSON.stringify(thirdArray)} */}
                  <div className="taskbars_task">
                    {thirdArray.map((item, index) => {
                      return (
                        <>
                          <FaFlag className="flagreview" />
                          <label
                            draggable="true"
                            onDragStart={(e) =>
                              handleDrag(e, index, "taskbar3", item)
                            }
                          >
                            <label className="taskbars_task">
                              {item.txtTitle}
                            </label>
                          </label>
                        </>
                      );
                    })}
                  </div>
                </div>

                <div
                  className="taskbar4"
                  onDragOver={(e) => allowDrop(e)}
                  onDrop={(e) => handleDrop(e)}
                >
                  {" "}
                  <label className="taskbar_label">COMPLETED</label>
                  {/* {JSON.stringify(fourthArray)} */}
                  <div className="taskbars_task">
                    {fourthArray.map((item, index) => {
                      return (
                        <>
                          <FaFlag className="flagcomplete" />
                          <label
                            draggable="true"
                            onDragStart={(e) =>
                              handleDrag(e, index, "taskbar4", item)
                            }
                          >
                            <label className="taskbars_task">
                              {item.txtTitle}
                            </label>
                          </label>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dash;
