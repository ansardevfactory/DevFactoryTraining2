import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaAngleDown, FaAngleRight, FaSearch } from 'react-icons/fa'
import { ReactSession } from 'react-client-session'
import Menu from './Menu'
import Header from './Header'
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
          <div classname="ssecondcolumnn">
            <div className="RRoww1">
              <label className="Namesize">Good morning,</label>
              <input type="text"></input>
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
              <div className="RRowwc2lm4">
                <icon></icon>
                <label className="Done">0 due</label>
                <label className="nDays">in last 7 days</label>
              </div>
            </div>
            <div className="RRoww3">
              <div className="RRoww3clm1">
                <div>
                <label>Status Overview</label>
                <textarea className="Describe"></textarea></div>
                <div className="piedetails">
                  <div>
                    <div className="box"></div>
                    <label>To Do</label>
                    <input type="text"></input>
                  </div>
                  <div>
                    <div className="box"></div>
                    <label>In Progress</label>
                    <input type="text"></input>
                  </div>
                  <div>
                    <div className="box"></div>
                    <label>Completed</label>
                    <input type="text"></input>
                  </div>
                  <div>
                    <label>Total</label>
                    <input type="text"></input>
                  </div>
                </div>
              </div>
              <div className="RRoww3clm2">
                <label>Team Workload</label>
                <textarea></textarea>
                <div className="Workload">
                  icon<div className="Line1">Assignee</div>
                  <div className="Line2">Work distribution</div>
                  <div className="Line3">Count</div>
                  icon<div className="Line1">Assignee</div>
                  <div className="Line2">0%</div>
                  <div className="Line3">Count</div>
                  icon<div className="Line1">Assignee</div>
                  <div className="Line2">0%</div>
                  <div className="Line3">Count</div>
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
