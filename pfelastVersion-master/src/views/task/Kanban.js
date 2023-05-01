import React from 'react'

const Kanban = () => {
  return (
    <div>
   <div className="container-fluid">
  {/* start page title */}
  <div className="row">
    <div className="col-12">
      <div className="page-title-box">
        <div className="page-title-right">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item"><a href="javascript: void(0);">Encadra</a></li>
            <li className="breadcrumb-item"><a href="javascript: void(0);">Tasks</a></li>
            <li className="breadcrumb-item active">Kanban Board</li>
          </ol>
        </div>
        <h4 className="page-title">Kanban Board 
          <a href="#" data-bs-toggle="modal" data-bs-target="#add-new-task-modal" className="btn btn-success btn-sm ms-3">Add New</a></h4>
      </div>
    </div>
  </div>     
  {/* end page title */} 
  <div className="row">
    <div className="col-12">
      <div className="board">
        <div className="tasks" data-plugin="dragula" data-containers="[&quot;task-list-one&quot;, &quot;task-list-two&quot;, &quot;task-list-three&quot;, &quot;task-list-four&quot;]">
          <h5 className="mt-0 task-header">TODO (3)</h5>
          <div id="task-list-one" className="task-list-items">
            {/* Task Item */}
            <div className="card mb-0">
              <div className="card-body p-3">
                <small className="float-end text-muted">18 Jul 2018</small>
                <span className="badge bg-danger">High</span>
                <h5 className="mt-2 mb-2">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#task-detail-modal" className="text-body">iOS App home page</a>
                </h5>
                <p className="mb-0">
                  <span className="pe-2 text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-briefcase-outline text-muted" />
                    iOS
                  </span>
                  <span className="text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-comment-multiple-outline text-muted" />
                    <b>74</b> Comments
                  </span>
                </p>
                <div className="dropdown float-end">
                  <a href="#" className="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical font-18" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-pencil me-1" />Edit</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-delete me-1" />Delete</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-plus-circle-outline me-1" />Add People</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-exit-to-app me-1" />Leave</a>
                  </div>
                </div>
                <p className="mb-0">
                  <img src="assets/images/users/avatar-2.jpg" alt="user-img" className="avatar-xs rounded-circle me-1" />
                  <span className="align-middle">Robert Carlile</span>
                </p>
              </div> {/* end card-body */}
            </div>
            {/* Task Item End */}
            {/* Task Item */}
            <div className="card mb-0">
              <div className="card-body p-3">
                <small className="float-end text-muted">18 Jul 2018</small>
                <span className="badge bg-secondary text-light">Medium</span>
                <h5 className="mt-2 mb-2">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#task-detail-modal" className="text-body">Topnav layout design</a>
                </h5>
                <p className="mb-0">
                  <span className="pe-2 text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-briefcase-outline text-muted" />
                    Hyper
                  </span>
                  <span className="text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-comment-multiple-outline text-muted" />
                    <b>28</b> Comments
                  </span>
                </p>
                <div className="dropdown float-end">
                  <a href="#" className="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical font-18" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-pencil me-1" />Edit</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-delete me-1" />Delete</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-plus-circle-outline me-1" />Add People</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-exit-to-app me-1" />Leave</a>
                  </div>
                </div>
                <p className="mb-0">
                  <img src="assets/images/users/avatar-1.jpg" alt="user-img" className="avatar-xs rounded-circle me-1" />
                  <span className="align-middle">Coder Themes</span>
                </p>
              </div> {/* end card-body */}
            </div>
            {/* Task Item End */}
            {/* Task Item */}
            <div className="card mb-0">
              <div className="card-body p-3">
                <small className="float-end text-muted">11 Jul 2018</small>
                <span className="badge bg-success">Low</span>
                <h5 className="mt-2 mb-2">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#task-detail-modal" className="text-body">Invite user to a project</a>
                </h5>
                <p className="mb-0">
                  <span className="pe-2 text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-briefcase-outline text-muted" />
                    CRM
                  </span>
                  <span className="text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-comment-multiple-outline text-muted" />
                    <b>68</b> Comments
                  </span>
                </p>
                <div className="dropdown float-end">
                  <a href="#" className="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical font-18" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-pencil me-1" />Edit</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-delete me-1" />Delete</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-plus-circle-outline me-1" />Add People</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-exit-to-app me-1" />Leave</a>
                  </div>
                </div>
                <p className="mb-0">
                  <img src="assets/images/users/avatar-3.jpg" alt="user-img" className="avatar-xs rounded-circle me-1" />
                  <span className="align-middle">Lucas Hardy</span>
                </p>
              </div> {/* end card-body */}
            </div>
            {/* Task Item End */}
          </div> {/* end company-list-1*/}
        </div>
        <div className="tasks">
          <h5 className="mt-0 task-header text-uppercase">In Progress (2)</h5>
          <div id="task-list-two" className="task-list-items">
            {/* Task Item */}
            <div className="card mb-0">
              <div className="card-body p-3">
                <small className="float-end text-muted">22 Jun 2018</small>
                <span className="badge bg-secondary text-light">Medium</span>
                <h5 className="mt-2 mb-2">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#task-detail-modal" className="text-body">Write a release note</a>
                </h5>
                <p className="mb-0">
                  <span className="pe-2 text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-briefcase-outline text-muted" />
                    Hyper
                  </span>
                  <span className="text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-comment-multiple-outline text-muted" />
                    <b>17</b> Comments
                  </span>
                </p>
                <div className="dropdown float-end">
                  <a href="#" className="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical font-18" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-pencil me-1" />Edit</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-delete me-1" />Delete</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-plus-circle-outline me-1" />Add People</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-exit-to-app me-1" />Leave</a>
                  </div>
                </div>
                <p className="mb-0">
                  <img src="assets/images/users/avatar-5.jpg" alt="user-img" className="avatar-xs rounded-circle me-1" />
                  <span className="align-middle">Sean White</span>
                </p>
              </div> {/* end card-body */}
            </div>
            {/* Task Item End */}
            {/* Task Item */}
            <div className="card mb-0">
              <div className="card-body p-3">
                <small className="float-end text-muted">19 Jun 2018</small>
                <span className="badge bg-success">Low</span>
                <h5 className="mt-2 mb-2">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#task-detail-modal" className="text-body">Enable analytics tracking</a>
                </h5>
                <p className="mb-0">
                  <span className="pe-2 text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-briefcase-outline text-muted" />
                    CRM
                  </span>
                  <span className="text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-comment-multiple-outline text-muted" />
                    <b>48</b> Comments
                  </span>
                </p>
                <div className="dropdown float-end">
                  <a href="#" className="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical font-18" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-pencil me-1" />Edit</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-delete me-1" />Delete</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-plus-circle-outline me-1" />Add People</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-exit-to-app me-1" />Leave</a>
                  </div>
                </div>
                <p className="mb-0">
                  <img src="assets/images/users/avatar-6.jpg" alt="user-img" className="avatar-xs rounded-circle me-1" />
                  <span className="align-middle">Louis Allen</span>
                </p>
              </div> {/* end card-body */}
            </div>
            {/* Task Item End */}
          </div> {/* end company-list-2*/}
        </div>
        
        <div className="tasks">
          <h5 className="mt-0 task-header text-uppercase">Done (1)</h5>
          <div id="task-list-four" className="task-list-items">
            {/* Task Item */}
            <div className="card mb-0">
              <div className="card-body p-3">
                <small className="float-end text-muted">16 Jul 2018</small>
                <span className="badge bg-success">Low</span>
                <h5 className="mt-2 mb-2">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#task-detail-modal" className="text-body">Dashboard design</a>
                </h5>
                <p className="mb-0">
                  <span className="pe-2 text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-briefcase-outline text-muted" />
                    Hyper
                  </span>
                  <span className="text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-comment-multiple-outline text-muted" />
                    <b>287</b> Comments
                  </span>
                </p>
                <div className="dropdown float-end">
                  <a href="#" className="dropdown-toggle text-muted arrow-none" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical font-18" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-pencil me-1" />Edit</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-delete me-1" />Delete</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-plus-circle-outline me-1" />Add People</a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item"><i className="mdi mdi-exit-to-app me-1" />Leave</a>
                  </div>
                </div>
                <p className="mb-0">
                  <img src="assets/images/users/avatar-10.jpg" alt="user-img" className="avatar-xs rounded-circle me-1" />
                  <span className="align-middle">Harvey Dickinson</span>
                </p>
              </div> {/* end card-body */}
            </div>
              <div className="modal fade task-modal-content" id="add-new-task-modal" tabIndex={-1} role="dialog" aria-labelledby="NewTaskModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="NewTaskModalLabel">Create New Task</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="p-2">
                <div className="mb-3">
                  <label className="form-label">Project</label>
                  <select className="form-select form-control-light">
                    <option>Select</option>
                    <option>Hyper - Admin Dashboard</option>
                    <option>CRM - Design &amp; Development</option>
                    <option>iOS - App Design</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <div className="mb-3">
                      <label htmlFor="task-title" className="form-label">Title</label>
                      <input type="text" className="form-control form-control-light" id="task-title" placeholder="Enter title" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="task-priority2" className="form-label">Priority</label>
                      <select className="form-select form-control-light" id="task-priority2">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="task-description" className="form-label">Description</label>
                  <textarea className="form-control form-control-light" id="task-description" rows={3} defaultValue={""} />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="task-title" className="form-label">Assign To</label>
                      <select className="form-select form-control-light" id="task-priority">
                        <option>Coderthemes</option>
                        <option>Robert Carlile</option>
                        <option>Louis Allen</option>
                        <option>Sean White</option>
                        <option>Riley Steele</option>
                        <option>Zak Turnbull</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="task-priority" className="form-label">Due Date</label>
                      <input type="text" className="form-control form-control-light" id="birthdatepicker" data-toggle="date-picker" data-single-date-picker="true" />
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <button type="button" className="btn btn-light" data-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-primary">Create</button>
                </div>
              </form>
            </div>
          </div>{/* /.modal-content */}
        </div>{/* /.modal-dialog */}
      </div>{/* /.modal */}

            {/* Task Item End */}
          </div> {/* end company-list-4*/}
        </div>
      </div> {/* end .board*/}
    </div> {/* end col */}
  </div>
  {/* end row*/}
</div> {/* container */}



    </div>
  )
}

export default Kanban
