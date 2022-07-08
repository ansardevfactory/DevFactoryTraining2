import axios from 'axios'
import { BsPrinter } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { FaAngleDown, FaAngleRight, FaSearch } from 'react-icons/fa'
import { ReactSession } from 'react-client-session'
import Menu from './Menu'
import Header from './Header'
import './style/styles.css'
import Barchart from './Barchart'
function Velocitychart() {
  // const navigate = useNavigate()
  const [id, setPrjctId] = useState({})
  const [search, setSearch] = useState([])
  function searchproject() {
    var request = '{"search":"' + search + '"}'
    var url =
      'https://gbal56d010.execute-api.us-west-2.amazonaws.com/default/projectsearch'

    var header = {}
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data)
      })
      .catch()
    alert('searched')
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

          <div className="secondcolumnvel">
      
            <div className="search_velchart">
            
              <div className="search_project_s1">
                <input
                  type="text" 
                  onChange={(e) => {
                    setSearch(e.target.value)
                  }}
                />
                <FaSearch onClick={searchproject} />
              </div>
              <div className="velicons"><HiDownload/><BsPrinter/></div>
                
            </div>
            <div className="Vellabl"> 
               <label>Velocity Chart</label></div>
            <div className="Bargraph"><Barchart className="Chartvel"/></div>
          </div>
        </div>
      </div>
    </div>
  ) 
}
export default Velocitychart
