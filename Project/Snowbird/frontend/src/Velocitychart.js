import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaAngleDown, FaAngleRight, FaSearch } from 'react-icons/fa'
import { ReactSession } from 'react-client-session'
import Menu from './Menu'
import Header from './Header'
import './style/styles.css'
function Velocitychart() {
  const navigate = useNavigate()
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

          <div className="secondcolumn">
            <div className="search_project">
              <div className="search_project_s1">
                <input
                  type="text"
                  onChange={(e) => {
                    setSearch(e.target.value)
                  }}
                />
                <FaSearch className="search" onClick={searchproject} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Velocitychart
