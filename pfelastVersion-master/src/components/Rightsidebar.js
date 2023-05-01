import React from 'react'

const Rightsidebar = () => {
  return (
    <div>
      <div className="end-bar">
    <div className="rightbar-title">
      <a href="javascript:void(0);" className="end-bar-toggle float-end">
        <i className="dripicons-cross noti-icon" />
      </a>
      <h5 className="m-0">Settings</h5>
    </div>
    <div className="rightbar-content h-100" data-simplebar>
      <div className="p-3">
        <div className="alert alert-warning" role="alert">
          <strong>Customize </strong> the overall color scheme, sidebar menu, etc.
        </div>
        {/* Settings */}
        <h5 className="mt-3">Color Scheme</h5>
        <hr className="mt-1" />
        <div className="form-check form-switch mb-1">
          <input className="form-check-input" type="checkbox" name="color-scheme-mode" defaultValue="light" id="light-mode-check" defaultChecked />
          <label className="form-check-label" htmlFor="light-mode-check">Light Mode</label>
        </div>
        <div className="form-check form-switch mb-1">
          <input className="form-check-input" type="checkbox" name="color-scheme-mode" defaultValue="dark" id="dark-mode-check" />
          <label className="form-check-label" htmlFor="dark-mode-check">Dark Mode</label>
        </div>
        {/* Width */}
        <h5 className="mt-4">Width</h5>
        <hr className="mt-1" />
        <div className="form-check form-switch mb-1">
          <input className="form-check-input" type="checkbox" name="width" defaultValue="fluid" id="fluid-check" defaultChecked />
          <label className="form-check-label" htmlFor="fluid-check">Fluid</label>
        </div>
        <div className="form-check form-switch mb-1">
          <input className="form-check-input" type="checkbox" name="width" defaultValue="boxed" id="boxed-check" />
          <label className="form-check-label" htmlFor="boxed-check">Boxed</label>
        </div>
        {/* Left Sidebar*/}
        <h5 className="mt-4">Left Sidebar</h5>
        <hr className="mt-1" />
        <div className="form-check form-switch mb-1">
          <input className="form-check-input" type="checkbox" name="theme" defaultValue="default" id="default-check" />
          <label className="form-check-label" htmlFor="default-check">Default</label>
        </div>
        <div className="form-check form-switch mb-1">
          <input className="form-check-input" type="checkbox" name="theme" defaultValue="light" id="light-check" defaultChecked />
          <label className="form-check-label" htmlFor="light-check">Light</label>
        </div>
        <div className="form-check form-switch mb-3">
          <input className="form-check-input" type="checkbox" name="theme" defaultValue="dark" id="dark-check" />
          <label className="form-check-label" htmlFor="dark-check">Dark</label>
        </div>
        <div className="form-check form-switch mb-1">
          <input className="form-check-input" type="checkbox" name="compact" defaultValue="fixed" id="fixed-check" defaultChecked />
          <label className="form-check-label" htmlFor="fixed-check">Fixed</label>
        </div>
        <div className="form-check form-switch mb-1">
          <input className="form-check-input" type="checkbox" name="compact" defaultValue="condensed" id="condensed-check" />
          <label className="form-check-label" htmlFor="condensed-check">Condensed</label>
        </div>
        <div className="form-check form-switch mb-1">
          <input className="form-check-input" type="checkbox" name="compact" defaultValue="scrollable" id="scrollable-check" />
          <label className="form-check-label" htmlFor="scrollable-check">Scrollable</label>
        </div>
        <div className="d-grid mt-4">
          <button className="btn btn-primary" id="resetBtn">Reset to Default</button>
          <a href="../../product/hyper-responsive-admin-dashboard-template/index.htm" className="btn btn-danger mt-3" target="_blank"><i className="mdi mdi-basket me-1" /> Purchase Now</a>
        </div>
      </div> {/* end padding*/}
    </div>
  </div>
    </div>
  )
}

export default Rightsidebar
