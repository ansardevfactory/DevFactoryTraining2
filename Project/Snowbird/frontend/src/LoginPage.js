import { useState } from "react";
import axios from "axios";
import "./style/styles.css";
import { useNavigate } from "react-router-dom";
import logo_snow from './images/logo_snow.png'
import dlogo from './images/dlogo.png'
import left from './images/left.png'

function LoginPage() {
  const [Username, setusername] = useState("");
  const [Password, setpassword] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const [vsble,setVisble]=useState(false)
  const navigate = useNavigate();

  function handleclick(e) { 
    e.preventDefault();
    var url = "https://2vlntjkuk1.execute-api.us-west-2.amazonaws.com/uservalidation";
    var req ='{"txtUserName": "'+Username+'", "txtPassword": "'+Password+'"}'
    var header = {};

    setVisble(true)
    setErrorMessage("")
    axios
      .post(url, req, header)
      .then((res) => {
        setVisble(false)
        console.log("hiii");
        console.log(res);
        console.log(res.data);
        console.log(res.data[0].VAL);
        var result = res.data[0].VAL;

        if (!Username || !Password) {
          // If username or password are empty
          return res.status(501).json({
              status: 501,
              message: 'Enter username and password'
          })
       }

        if (result == 0) {
          setErrorMessage("Error in Username Or Password");
          console.log("req" + result);
        } else {
          //  // var result=res.data;

          setErrorMessage("Success");
          console.log("req" + result);

          //   //ReactSession.set("token", res.data.token);
          //  //ReactSession.set("username", Username);
          //   //ReactSession.set("password", Password);
          //  //ReactSession.set("userid", result[0].id);
          navigate("/Dash");
        }
      })
      .catch(()=>{
        setVisble(false)
        setErrorMessage("Something went wrong!");
      });
  }
  function newclick(e) {
    e.preventDefault();
    navigate("/SignUp");
  }

  return (
    <div>
      <div className="Oouterdiv">
        <div className="colmn1">
          <div>
            <img src={left} className="image1" />
          </div>
        </div>
        <div className="colmn2">
          <div className="roww1">
            <img src={logo_snow} className="image2" />
            <input
              className="inpuut"
              onChange={(e) => {
                setusername(e.target.value)
              }}
              type="text"
              placeholder="Enter Email"
            />
            <input
              className="inpuut"
              onChange={(e) => {
                setpassword(e.target.value)
              }}
              type="password"
              placeholder="Enter Password"
            />
            <button className="Loginbutton" onClick={handleclick}>Continue</button>
            <p>{errormessage}</p>
          <label className="roww2">Privacy Policy . User Notice</label>
          <img src={dlogo} className="roww3" />
          <label className="roww4">
            One account for Jira,Confluence,Trello and more
          </label>
        </div>
        </div>
        <div className="colmn3">
          <img src={left} className="image3" />
        </div>
      </div>
    </div>
  );
}
export default LoginPage;