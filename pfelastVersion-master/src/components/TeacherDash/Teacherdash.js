import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Rightsidebar from '../Rightsidebar'
import { Outlet } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'
const Teacherdash = () => {
  return (
  
    <div>
    <div className="loading" data-layout-config="{&quot;leftSideBarTheme&quot;:&quot;dark&quot;,&quot;layoutBoxed&quot;:false, &quot;leftSidebarCondensed&quot;:false, &quot;leftSidebarScrollable&quot;:false,&quot;darkMode&quot;:false, &quot;showRightSidebarOnStart&quot;: true}">
  {/* Begin page */}
  <div className="wrapper">
    {/* ========== Left Sidebar Start ========== */}
    <TeacherSidebar/>
  
    <div className="content-page">
      <div className="content">
        {/* Topbar Start */}
        <Header/>
        {/* end Topbar */}
        {/* Start Content*/}
        <div className="container-fluid">
        <Outlet/>
         </div>
        </div>
      </div>
      {/* content */}
      {/* Footer Start */}
     <Footer/>
      {/* end Footer */}
    </div>
  
  </div>
  {/* END wrapper */}
  {/* Right Sidebar */}
  <Rightsidebar/>
</div>

  )
}

export default Teacherdash
