import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserTable = () => {

  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");


  const handleDeleteChange = async (event3,id) => {
    event3.preventDefault();
    const response7 = fetch(`http://127.0.0.1:9090/user/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  };

  const handleActivateChange = async (event, id) => {
    event.preventDefault();
    const response = fetch(`http://127.0.0.1:9090/user/activate/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    });
  };


  const handleBlockChange = async (event, id) => {
    event.preventDefault();
    const response = fetch(`http://127.0.0.1:9090/user/block/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    });
  };


  useEffect(() => {
    axios.get(`http://127.0.0.1:9090/user/`)
      .then(res => {
        console.log(res.data);
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  });


  return (
    <div>
      <div className="container-fluid">

        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><a href="javascript: void(0);">Encadra</a></li>
                  <li className="breadcrumb-item active">Users Table</li>
                </ol>
              </div>
              <h4 className="page-title">Users Table</h4>
            </div>
          </div>

          <div className="row">
            <div className="">
              <div className="card">
                <div className="card-body">

                  <div class="col-sm-12">
                    <div class="text-sm-end">
                      <a href="javascript:void(0);" class="btn btn-danger mb-2"><i class="mdi mdi-plus-circle me-2"></i> Add User</a>
                    </div></div>
                  <ul className="nav nav-tabs nav-bordered mb-3">
                    <li className="nav-item">
                      <a href="#striped-rows-preview" data-bs-toggle="tab" aria-expanded="false" className="nav-link active">
                        Preview
                      </a>
                    </li>

                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane show active" id="striped-rows-preview">
                      <div className="table-responsive-sm">
                        <table className="table table-striped table-centered mb-0">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Role</th>
                              <th>Email</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>

                            {data.map((item) => (
                              <tr key={item.id} >
                                <td>{item.userName}</td>
                                <td>{item.role}</td>
                                <td>{item.email}</td>
                                <td>{item.activated}</td>
                                <td>

                                  <button type="button" class="btn btn-danger  w-30 rounded-pill" onClick={(event) => {
                                   handleDeleteChange(event, item._id);
                                  }}>Delete</button>
                                  <button type="button" class="btn btn-success  w-30 rounded-pill" onClick={(event) => {
                                    handleActivateChange(event, item._id);
                                  }}>Activate</button>
                                  <button type="button" class="btn btn-dark  w-30 rounded-pill" onClick={(event) => {
                                    handleBlockChange(event, item._id);
                                  }}>Block</button>
                                 
                                </td>
                              </tr>
                            ))}
                            <tr>

                            </tr>
                        

                          </tbody>
                        </table>
                      </div> {/* end table-responsive*/}
                    </div> {/* end preview*/}
                    <div className="tab-pane" id="striped-rows-code">
                    </div> {/* end preview code*/}
                  </div> {/* end tab-content*/}
                </div> {/* end card body*/}
              </div> {/* end card */}
            </div>{/* end col*/}

          </div>
        </div>
      </div></div>
  )
}

export default UserTable
