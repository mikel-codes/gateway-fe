import React from 'react'
import { NavLink } from 'react-router-dom'

const Side = () => {
  return (
    <div className="main-head">
      <nav className="head-nav">
        <ul className="menu">
        <li>
          <NavLink to="/overview">
          <span className="svg"><i className="fa-solid fa-house"></i></span>
          <span>Overview</span></NavLink>
        </li>
          <li>
            <NavLink to="gateways">
            <i id="svg" className="fa-solid fa-network-wired"></i>
            <span>Gateway</span></NavLink>
          </li>
          <li>
            <NavLink to="devices">
            <i className="fa-solid fa-router"></i>
              <span>Devices</span></NavLink>
          </li>


        </ul>
      </nav>
</div>

  )
}

export default Side
