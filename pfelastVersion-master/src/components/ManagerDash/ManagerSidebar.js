import React from 'react'
import { Link } from 'react-router-dom'
const ManagerSidebar = () => {
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
            <Link to="/managerdash/files"  className="side-nav-link">
              <i className="uil-folder-plus" />
              <span> Files </span>
            </Link>
          </li>
         


    
      </ul>
      </div>
      {/* Sidebar -left */}
    </div>
    </div>
  )
}

export default ManagerSidebar
