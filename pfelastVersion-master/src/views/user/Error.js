import React from 'react'

const Error = () => {
  return (
    <div>
 <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xxl-4 col-lg-5">
        <div className="card">
          {/* Logo */}
          <div className="card-header pt-4 pb-4 text-center bg-primary">
            <a href="index.html">
              <span><img src="assets/images/logo.png" alt height={18} /></span>
            </a>
          </div>
          <div className="card-body p-4">
            <div className="text-center">
              <h1 className="text-error">4<i className="mdi mdi-emoticon-sad" />4</h1>
              <h4 className="text-uppercase text-danger mt-3">Page Not Found</h4>
              <p className="text-muted mt-3">It's looking like you may have taken a wrong turn. Don't worry... it
                happens to the best of us. Here's a
                little tip that might help you get back on track.</p>
              <a className="btn btn-info mt-3" href="index.html"><i className="mdi mdi-reply" /> Return Home</a>
            </div>
          </div> {/* end card-body*/}
        </div>
        {/* end card */}
      </div> {/* end col */}
    </div>
    {/* end row */}
  </div>
  {/* end container */}
</div>

    </div>
  )
}

export default Error
