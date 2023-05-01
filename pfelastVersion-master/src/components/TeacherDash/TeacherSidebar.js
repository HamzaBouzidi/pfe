import React from 'react'
import { Link } from 'react-router-dom'
const TeacherSidebar = () => {
  return (
    <div>
       <div className="leftside-menu">
      {/* LOGO */}
      <a href="index.html" className="logo text-center logo-light">
        <span className="logo-lg">
          <img src="assets/images/logo.png" alt height={16} />
        </span>
        <span className="logo-sm">
          <img src="assets/images/logo_sm.png" alt height={16} />
        </span>
      </a>
      {/* LOGO */}
      <a href="index.html" className="logo text-center logo-dark">
        <span className="logo-lg">
          <img src="assets/images/logo-dark.png" alt height={16} />
        </span>
        <span className="logo-sm">
          <img src="assets/images/logo_sm_dark.png" alt height={16} />
        </span>
      </a>
      <div className="h-100" id="leftside-menu-container" data-simplebar>
        {/*- Sidemenu */}
        <ul className="side-nav">
          <li className="side-nav-title side-nav-item">Pages</li>
          <li className="side-nav-item">
            <Link to="/teacherdash/project"  className="side-nav-link">
              <i className="uil-briefcase" />
              <span> Projects </span>
              <span className="menu-arrow" />
            </Link>      
          </li>
          <li className="side-nav-item">
            <Link to="/teacherdash/topic"  className="side-nav-link">
              <i className="uil-folder-plus" />
              <span> Topics </span>
              <span className="menu-arrow" />
            </Link>
          </li>
          <li className="side-nav-item">
            <Link to="/teacherdash/kanban"  className="side-nav-link">
              <i className="uil-clipboard-alt" />
              <span> Tasks </span>
              <span className="menu-arrow" />
            </Link>           
          </li>
          <li className="side-nav-item">
            <Link to="/teacherdash/calendar"  className="side-nav-link">
              <i className="uil-calender" />
              <span> Calendar </span>
              <span className="menu-arrow" />
            </Link>
          </li>
         
          
         
         
          
         
         
        </ul>
       </div>
    </div>
    </div>
  )
}

export default TeacherSidebar
