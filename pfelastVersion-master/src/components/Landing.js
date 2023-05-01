import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../views/user/Login'
import Register from '../views/user/Register'
const Landing = () => {
  return (
    <div>
  <div className="loading" data-layout-config="{&quot;darkMode&quot;:false}">
    {/* NAVBAR START */}
    <nav className="navbar navbar-expand-lg py-lg-3 navbar-dark">
      <div className="container">
        {/* logo */}
        <a href="index.html" className="navbar-brand me-lg-5">
          <img src="assets/images/logo.png" alt className="logo-dark" height={18} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <i className="mdi mdi-menu" />
        </button>
        {/* menus */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* left menu */}
          <ul className="navbar-nav me-auto align-items-center">
            {/* <li className="nav-item mx-lg-1">
              <a className="nav-link active" href>Sign In</a>
            </li> */}
            {/* <li className="nav-item mx-lg-1">
              <a className="nav-link" href>Sign In</a>
            </li>
            <li className="nav-item mx-lg-1">
              <a className="nav-link" href>Sign Up</a>
            </li> */}
           
          </ul>
          {/* right menu */}
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item me-3">
              <a href="../../product/hyper-responsive-admin-dashboard-template/index.htm" target="_blank" className="nav-link d-lg-none">Sign In</a>
              <Link to="/login" target="_blank" className="btn btn-sm btn-light btn-rounded d-none d-lg-inline-flex">
                <i className="sign-in" /> Sign In
              </Link>
            </li> 
            <li className="nav-item me-0">
            <Link to="/register" target="_blank" className="nav-link d-lg-none">Sign Up</Link>
              <Link to="/register" target="_blank" className="btn btn-sm btn-light btn-rounded d-none d-lg-inline-flex">
              <i className="sign-up" /> Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* NAVBAR END */}
    {/* START HERO */}
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="mt-md-4">
              
              <h2 className="text-white fw-normal mb-4 mt-3 hero-title">
                Welcome to Encadra ! 
              </h2>
              <p className="mb-4 font-16 text-white-50"> " Encadra is an innovative platform designed to streamline and optimize the process of mentoring and coaching, enabling you to easily manage and organize all your mentoring activities in one place."</p>
              <a href target="_blank" className="btn btn-success">Get Started<i className="mdi mdi-arrow-right ms-1" /></a>
            </div>
          </div>
          <div className="col-md-5 offset-md-2">
            <div className="text-md-end mt-3 mt-md-0">
              <img src="assets/images/startup.svg" alt className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>

   
 
    {/* <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h1 className="mt-0"><i className="mdi mdi-heart-multiple-outline" /></h1>
              <h3>Features you'll <span className="text-danger">love</span></h3>
              <p className="text-muted mt-2">Hyper comes with next generation ui design and have multiple benefits
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-2 py-5 align-items-center">
          <div className="col-lg-5">
            <img src="assets/images/features-1.svg" className="img-fluid" alt />
          </div>
          <div className="col-lg-6 offset-lg-1">
            <h3 className="fw-normal">Inbuilt applications and pages</h3>
            <p className="text-muted mt-3">Hyper comes with a variety of ready-to-use applications and pages that help to speed up the development</p>
            <div className="mt-4">
              <p className="text-muted"><i className="mdi mdi-circle-medium text-primary" /> Projects &amp; Tasks</p>
              <p className="text-muted"><i className="mdi mdi-circle-medium text-primary" /> Ecommerce Application Pages</p>
              <p className="text-muted"><i className="mdi mdi-circle-medium text-primary" /> Profile, pricing, invoice</p>
              <p className="text-muted"><i className="mdi mdi-circle-medium text-primary" /> Login, signup, forget password</p>
            </div>
            <a href className="btn btn-primary btn-rounded mt-3">Read More <i className="mdi mdi-arrow-right ms-1" /></a>
          </div>
        </div>
        <div className="row pb-3 pt-5 align-items-center">
          <div className="col-lg-6">
            <h3 className="fw-normal">Simply beautiful design</h3>
            <p className="text-muted mt-3">The simplest and fastest way to build dashboard or admin panel. Hyper is built using the latest tech and tools and provide an easy way to customize anything, including an overall color schemes, layout, etc.</p>
            <div className="mt-4">
              <p className="text-muted"><i className="mdi mdi-circle-medium text-success" /> Built with latest Bootstrap</p>
              <p className="text-muted"><i className="mdi mdi-circle-medium text-success" /> Extensive use of SCSS variables</p>
              <p className="text-muted"><i className="mdi mdi-circle-medium text-success" /> Well documented and structured code</p>
              <p className="text-muted"><i className="mdi mdi-circle-medium text-success" /> Detailed Documentation</p>
            </div>
            <a href className="btn btn-success btn-rounded mt-3">Read More <i className="mdi mdi-arrow-right ms-1" /></a>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <img src="assets/images/features-2.svg" className="img-fluid" alt />
          </div>
        </div>
      </div>
    </section> */}
   
  
   
  
   
  </div>
</div>

  )
}

export default Landing
