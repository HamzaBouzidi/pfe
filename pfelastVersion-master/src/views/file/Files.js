import React from 'react'
import { Link } from 'react-router-dom'
const Files = () => {
  return (
    <div>
      <div className="container-fluid">
  {/* start page title */}
  <div className="row">
    <div className="col-12">
      <div className="page-title-box">
        <div className="page-title-right">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
            <li className="breadcrumb-item"><a href="javascript: void(0);">Apps</a></li>
            <li className="breadcrumb-item active">File Manager</li>
          </ol>
        </div>
        <h4 className="page-title">File Manager</h4>
      </div>
    </div>
  </div>
  {/* end page title */}
  <div className="row">
    {/* Right Sidebar */}
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          {/* Left sidebar */}
          <div className="page-aside-left">
            <div className="btn-group d-block mb-2">
              <button type="button" className="btn btn-success dropdown-toggle w-100" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-plus" /> Create New </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#"><i className="mdi mdi-folder-plus-outline me-1" /> Folder</a>
                <a className="dropdown-item" href="#"><i className="mdi mdi-file-plus-outline me-1" /> File</a>
                <a className="dropdown-item" href="#"><i className="mdi mdi-file-document me-1" /> Document</a>
                <a className="dropdown-item" href="#"><i className="mdi mdi-upload me-1" /> Choose File</a>
              </div>
            </div>
            <div className="email-menu-list mt-3">
              <a href="#" className="list-group-item border-0"><i className="mdi mdi-folder-outline font-18 align-middle me-2" />My Files</a>
             
              <a href="#" className="list-group-item border-0"><i className="mdi mdi-delete font-18 align-middle me-2" />Deleted Files</a>
            </div>
         
              
          </div>
          {/* End Left sidebar */}
          <div className="page-aside-right">
            <div className="d-flex justify-content-between align-items-center">
              <div className="app-search">
                <form>
                  <div className="mb-2 position-relative">
                    <input type="text" className="form-control" placeholder="Search files..." />
                    <span className="mdi mdi-magnify search-icon" />
                  </div>
                </form>
              </div>
              <div>
                <button type="submit" className="btn btn-sm btn-light"><i className="mdi mdi-format-list-bulleted" /></button>
                <button type="submit" className="btn btn-sm"><i className="mdi mdi-view-grid" /></button>
                <button type="submit" className="btn btn-sm"><i className="mdi mdi-information-outline" /></button>
              </div>
            </div>
            <div className="mt-3">
              <h5 className="mb-2">Quick Access</h5>
              <div className="row mx-n1 g-0">
                <div className="col-xxl-3 col-lg-6">
                  <div className="card m-1 shadow-none border">
                    <div className="p-2">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <div className="avatar-sm">
                            <span className="avatar-title bg-light text-secondary rounded">
                              <i className="mdi mdi-folder-zip font-16" />
                            </span>
                          </div>
                        </div>
                        <div className="col ps-0">
                          <a href="javascript:void(0);" className="text-muted fw-bold">Hyper-sketch.zip</a>
                          <p className="mb-0 font-13">2.3 MB</p>
                        </div>
                      </div> {/* end row */}
                    </div> {/* end .p-2*/}
                  </div> {/* end col */}
                </div> {/* end col*/}
                <div className="col-xxl-3 col-lg-6">
                  <div className="card m-1 shadow-none border">
                    <div className="p-2">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <div className="avatar-sm">
                            <span className="avatar-title bg-light text-secondary rounded">
                              <i className="mdi mdi-folder font-16" />
                            </span>
                          </div>
                        </div>
                        <div className="col ps-0">
                          <a href="javascript:void(0);" className="text-muted fw-bold">Compile Version</a>
                          <p className="mb-0 font-13">87.2 MB</p>
                        </div>
                      </div> {/* end row */}
                    </div> {/* end .p-2*/}
                  </div> {/* end col */}
                </div> {/* end col*/}
                <div className="col-xxl-3 col-lg-6">
                  <div className="card m-1 shadow-none border">
                    <div className="p-2">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <div className="avatar-sm">
                            <span className="avatar-title bg-primary-lighten text-primary rounded">
                              <i className="mdi mdi-folder-zip-outline font-16" />
                            </span>
                          </div>
                        </div>
                        <div className="col ps-0">
                          <a href="javascript:void(0);" className="text-muted fw-bold">admin.zip</a>
                          <p className="mb-0 font-13">45.1 MB</p>
                        </div>
                      </div> {/* end row */}
                    </div> {/* end .p-2*/}
                  </div> {/* end col */}
                </div> {/* end col*/}
                <div className="col-xxl-3 col-lg-6">
                  <div className="card m-1 shadow-none border">
                    <div className="p-2">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <div className="avatar-sm">
                            <span className="avatar-title bg-light text-secondary rounded">
                              <i className="mdi mdi-file-pdf-outline font-16" />
                            </span>
                          </div>
                        </div>
                        <div className="col ps-0">
                          <a href="javascript:void(0);" className="text-muted fw-bold">Docs.pdf</a>
                          <p className="mb-0 font-13">7.5 MB</p>
                        </div>
                      </div> {/* end row */}
                    </div> {/* end .p-2*/}
                  </div> {/* end col */}
                </div> {/* end col*/}
                <div className="col-xxl-3 col-lg-6">
                  <div className="card m-1 shadow-none border">
                    <div className="p-2">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <div className="avatar-sm">
                            <span className="avatar-title bg-light text-secondary rounded">
                              <i className="mdi mdi-file-pdf-outline font-18" />
                            </span>
                          </div>
                        </div>
                        <div className="col ps-0">
                          <a href="javascript:void(0);" className="text-muted fw-bold">License-details.pdf</a>
                          <p className="mb-0 font-13">784 KB</p>
                        </div>
                      </div> {/* end row */}
                    </div> {/* end .p-2*/}
                  </div> {/* end col */}
                </div> {/* end col*/}
                <div className="col-xxl-3 col-lg-6">
                  <div className="card m-1 shadow-none border">
                    <div className="p-2">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <div className="avatar-sm">
                            <span className="avatar-title bg-light text-secondary rounded">
                              <i className="mdi mdi-folder-account font-18" />
                            </span>
                          </div>
                        </div>
                        <div className="col ps-0">
                          <a href="javascript:void(0);" className="text-muted fw-bold">Purchase Verification</a>
                          <p className="mb-0 font-13">2.2 MB</p>
                        </div>
                      </div> {/* end row */}
                    </div> {/* end .p-2*/}
                  </div> {/* end col */}
                </div> {/* end col*/}
                <div className="col-xxl-3 col-lg-6">
                  <div className="card m-1 shadow-none border">
                    <div className="p-2">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <div className="avatar-sm">
                            <span className="avatar-title bg-light text-secondary rounded">
                              <i className="mdi mdi-folder-account font-18" />
                            </span>
                          </div>
                        </div>
                        <div className="col ps-0">
                          <a href="javascript:void(0);" className="text-muted fw-bold">Hyper Integrations</a>
                          <p className="mb-0 font-13">874 MB</p>
                        </div>
                      </div> {/* end row */}
                    </div> {/* end .p-2*/}
                  </div> {/* end col */}
                </div> {/* end col*/}
              </div> {/* end row*/}
            </div> {/* end .mt-3*/}

          </div> 
          {/* end inbox-rightbar*/}
        </div>
        {/* end card-body */}
        <div className="clearfix" />
      </div> {/* end card-box */}
    </div> {/* end Col */}
  </div>{/* End row */}
</div> {/* container */}

    </div>
  )
}

export default Files
