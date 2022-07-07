import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaAngleDown, FaAngleRight, FaSearch } from 'react-icons/fa'
import { ReactSession } from 'react-client-session'
import Menu from './Menu'
import Header from './Header'
import App from './App'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// ChartJS.register(ArcElement, Tooltip, Legend);

import './style/styles.css'

function Summarypage() {
  return (
    <div>
      <div className="outer">
        {<Header />}
        <div className="secondrow">
          {/* Side navigation menu */}
          <div className="firstcolumn">
            <Menu />
          </div>
          <div className="ssecondcolumnn">
            <div className="RRoww1">
              <label className="Namesize">Good morning,</label>
              <input className="IInput"type="text"></input>
            </div>
            <div className="RRoww2">
              <div className="RRoww2clm1">
                <icon></icon>
                <label className="Done">0 done</label>
                <label className="nDays">in last 7 days</label>
              </div>
              <div className="RRoww2clm2">
                <icon></icon>
                <label className="Done">0 updated</label>
                <label className="nDays">in last 7 days</label>
              </div>
              <div className="RRoww2clm3">
                <icon></icon>
                <label className="Done">0 created</label>
                <label className="nDays">in last 7 days</label>
              </div>
              <div className="RRoww2clm4">
                <icon></icon>
                <label className="Done">0 due </label>
                <label className="nDays">in last 7 days</label>
              </div>
            </div>
            <div className="RRoww3">
              <div className="RRoww3clm1">
                <div>
                <label className="laabl">Status Overview</label>
                <textarea className="Describe"></textarea></div>
                <div className="pieDesc">
                  <div className="Pchart"><App/></div>
                  {/* <div className="pdetail">
                    <div className="box"></div>
                    <label>To Do</label>
                    <input className="boxinput" type="text"></input>
                  </div>
                  <div className="pdetail">
                    <div className="box"></div>
                    <label>In Progress</label>
                    <input className="boxinput" type="text"></input>
                  </div>
                  <div className="pdetail">
                    <div className="box"></div>
                    <label>Completed</label>
                    <input className="boxinput" type="text"></input>
                  </div> */}
                  {/* <div>
                    <label className="laabl">Total</label>
                    <input className="boxinput"type="text"></input>
                  </div> */}
                </div>
              </div>
              <div className="RRoww3clm2">
                <label className="laabl">Team Workload</label>
                <textarea className="Describe" ></textarea>
                
                <div className="Workload">
                  <div  className="linenext">
                  <div className="Line0">Icon</div>
                  <div className="Line0">icon</div>
                  <div className="Line0">icon</div>
                  <div className="Line0">icon</div>
                  </div>
                  <div className="linenext">
                    <div className="Line1">Assignee</div>
                    <div className="Line1">Ajay</div>
                    <div className="Line1">Vandana</div>
                    <div className="Line1">Vrinda</div></div>
                  {/* <div className="Line2">Work distribution</div> */}
                  {/* <div className="Line3">Count</div> */}
                  {/* <div className="Line1">Assignee</div> */}
                  <div  className="linenext">
                    <div className="Line2">Work distribution</div>
                    <div className="Line2">0%</div>
                    <div className="Line2">0%</div>
                    <div className="Line2">0%</div></div>
                  <div  className="linenext">
                    <div className="Line3">Count</div>
                    <div className="Line3">15</div>
                    <div className="Line3">15</div>
                    <div className="Line3">15</div>
                    </div>
            {/* <div className="Line1">Assignee</div> */}
                  {/* <div className="Line2">0%</div> */}
                  {/* <div className="Line3">Count</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Summarypage
