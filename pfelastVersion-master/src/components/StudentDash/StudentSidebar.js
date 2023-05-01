import React from 'react'
import { Link } from 'react-router-dom'
const StudentSidebar = () => {
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
          <li className="side-nav-title side-nav-item">Navigation</li>
          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sidebarDashboards" aria-expanded="false" aria-controls="sidebarDashboards" className="side-nav-link">
              <i className="uil-home-alt" />
              
              <span> Dashboards </span>
            </a>
           
          </li>
          <li className="side-nav-title side-nav-item">Pages</li>
     
          <li className="side-nav-item">
            <Link to="/studentdash/kanban"  className="side-nav-link">
              <i className="uil-clipboard-alt" />
              <span> Tasks </span>
              <span className="menu-arrow" />
            </Link>
            <div className="collapse" id="sidebarTasks">
              <ul className="side-nav-second-level">
                <li>
                  <a href="apps-tasks.html">List</a>
                </li>
                <li>
                  <a href="apps-tasks-details.html">Details</a>
                </li>
                <li>
                  <a href="apps-kanban.html">Kanban Board</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="side-nav-item">
            <a href="apps-file-manager.html" className="side-nav-link">
              <i className="uil-folder-plus" />
              <span> Files </span>
            </a>
          </li>
          <li className="side-nav-item">
            <Link to="/studentdash/calendar"  className="side-nav-link">
              <i className="uil-calender" />
              <span> Calendar </span>
            </Link>
          </li>
        
         </ul>
        
        </div>
        
       
        {/* End Sidebar */}
        <div className="clearfix" />
      </div>
      {/* Sidebar -left */}
    </div>
  
  )
}

export default StudentSidebar
