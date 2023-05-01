import React from 'react'
import { useState } from 'react'
const AddProject = () => {
  const [name, setName] = useState('');
  const [members, setMembers] = useState('');
  const [startDate, setStartDate] = useState('');
  const [progress, setProgress] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, such as submit it to a server
  };


 

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
                  <li className="breadcrumb-item"><a href="javascript: void(0);">Projects</a></li>
                  <li className="breadcrumb-item active">Add Project</li>
                </ol>
              </div>
              <h4 className="page-title">Create Project</h4>
            </div>
          </div>
        </div>     
        {/* end page title */} 
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="mb-3">
                        <label htmlFor="projectname" className="form-label">Name</label>
                        <input type="text" id="projectname" className="form-control" name="name"  placeholder="Enter project name" value={name} onChange={(event) => setName(event.target.value)} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="projectmember" className="form-label">Members</label>
                        <input type="text" id="projectmember" className="form-control" name="member"  placeholder="Enter project members" value={members} onChange={(event) => setMembers(event.target.value)} />
                      </div>
                      <div className="mb-3 position-relative" id="datepicker1">
                        <label className="form-label">Start Date</label>
                        <input type="text" className="form-control" data-provide="datepicker" placeholder ="Enter start date " data-date-container="#datepicker1" data-date-format="d-M-yyyy" data-date-autoclose="true" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="project-progress" className="form-label">Progress</label>
                        <input type="number" id="project-progress" className="form-control" min="0" max="100" placeholder="Enter project progress" value={progress} onChange={(event) => setProgress(event.target.value)} />
                      </div>
                    </div> {/* end col*/}
                  </div> {/* end row */}
                  <div className="row">
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">Create</button>
                    </div>
                  </div>
                </form>
              </div> {/* end card-body */}
            </div> {/* end card*/}
          </div> {/* end col*/}
        </div> {/* end row */}
      </div>





    </div>
  )
}

export default AddProject
