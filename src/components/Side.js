import React from 'react'


const Side = () => {
  return (
    <div className="main-head">
      <nav className="head-nav">
        <ul className="menu">
        <li>
          <a href="#">
          <span className="svg"><i className="fa-solid fa-house"></i></span>
          <span>Overview</span></a>
        </li>
          <li>
            <a href="#">
            <i id="svg" style={{color: "red"}} className="fa-solid fa-network-wired"></i>
            <span>Gateway</span></a>
          </li>
          <li>
            <a href="#">
            <i className="fa-solid fa-router"></i>
              <span>Devices</span></a>
          </li>

          <li>
            <a href="#">
              <svg className="paper-airplane">
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#paper-airplane"></use>
              </svg><span></span></a>
          </li>
        </ul>
      </nav>
</div>

  )
}

export default Side
