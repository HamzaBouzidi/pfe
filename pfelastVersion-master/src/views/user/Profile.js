import React from 'react'

const Profile = () => {
  return (
    <div>
        <div class="container-fluid">


<div class="row">
    <div class="col-12">
        <div class="page-title-box">
            <div class="page-title-right">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                    <li class="breadcrumb-item active">Profile 2</li>
                </ol>
            </div>
            <h4 class="page-title">Profile 2</h4>
        </div>
    </div>
</div>     
     <div className="row">
  <div className="col-xl-4 col-lg-5">
    <div className="card text-center">
      <div className="card-body">
        <img src="assets/images/users/avatar-1.jpg" className="rounded-circle avatar-lg img-thumbnail" alt="profile-image" />
        <h4 className="mb-0 mt-2">Soeng Souy</h4>
        <p className="text-muted font-14">Founder</p>
        <button type="button" className="btn btn-success btn-sm mb-2">Follow</button>
        <button type="button" className="btn btn-danger btn-sm mb-2">Message</button>
        <div className="text-start mt-3">
          <h4 className="font-13 text-uppercase">About Me :</h4>
          <p className="text-muted font-13 mb-3">
            Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type.
          </p>
          <p className="text-muted mb-2 font-13"><strong>Full Name :</strong> <span className="ms-2">Geneva
              D. McKnight</span></p>
          <p className="text-muted mb-2 font-13"><strong>Mobile :</strong><span className="ms-2">(123)
              123 1234</span></p>
          <p className="text-muted mb-2 font-13"><strong>Email :</strong> <span className="ms-2 ">user@email.domain</span></p>
          <p className="text-muted mb-1 font-13"><strong>Location :</strong> <span className="ms-2">USA</span></p>
        </div>
        <ul className="social-list list-inline mt-3 mb-0">
          <li className="list-inline-item">
            <a href="javascript: void(0);" className="social-list-item border-primary text-primary"><i className="mdi mdi-facebook" /></a>
          </li>
          <li className="list-inline-item">
            <a href="javascript: void(0);" className="social-list-item border-danger text-danger"><i className="mdi mdi-google" /></a>
          </li>
          <li className="list-inline-item">
            <a href="javascript: void(0);" className="social-list-item border-info text-info"><i className="mdi mdi-twitter" /></a>
          </li>
          <li className="list-inline-item">
            <a href="javascript: void(0);" className="social-list-item border-secondary text-secondary"><i className="mdi mdi-github" /></a>
          </li>
        </ul>
      </div> {/* end card-body */}
    </div> {/* end card */}
    {/* Messages*/}
    <div className="card">
     
    </div> {/* end card*/}
  </div> {/* end col*/}
  <div className="col-xl-8 col-lg-7">
    <div className="card">
      <div className="card-body">
        <ul className="nav nav-pills bg-nav-pills nav-justified mb-3">
        <li className="nav-item">
            <a href="#timeline" data-bs-toggle="tab" aria-expanded="true" className="nav-link rounded-0 active">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#aboutme" data-bs-toggle="tab" aria-expanded="false" className="nav-link rounded-0">
             
            </a>
          </li>
         
          
        </ul>
        <div className="tab-content">
     
         

          <div className="tab-pane" id="settings">
            <form>
              <h5 className="mb-4 text-uppercase"><i className="mdi mdi-account-circle me-1" /> Personal Info</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstname" placeholder="Enter first name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Enter last name" />
                  </div>
                </div> {/* end col */}
              </div> {/* end row */}
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <label htmlFor="userbio" className="form-label">Bio</label>
                    <textarea className="form-control" id="userbio" rows={4} placeholder="Write something..." defaultValue={""} />
                  </div>
                </div> {/* end col */}
              </div> {/* end row */}
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="useremail" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                    <span className="form-text text-muted"><small>If you want to change email please <a href="javascript: void(0);">click</a> here.</small></span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="userpassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                    <span className="form-text text-muted"><small>If you want to change password please <a href="javascript: void(0);">click</a> here.</small></span>
                  </div>
                </div> {/* end col */}
              </div> {/* end row */}
           
              
              
        
              <div className="text-end">
                <button type="submit" className="btn btn-success mt-2"><i className="mdi mdi-content-save" /> Save</button>
              </div>
            </form>
          </div>
          {/* end settings content*/}
        </div> {/* end tab-content */}
      </div> {/* end card body */}
    </div> {/* end card */}
  </div> {/* end col */}
</div>


    </div>



         <div className="content-wrapper">
//   {/* Content */}
//   <div className="container-xxl flex-grow-1 container-p-y">
//     <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Account Settings /</span> Account</h4>
//     <div className="row">
//       <div className="col-md-12">
//         <ul className="nav nav-pills flex-column flex-md-row mb-3">
//           <li className="nav-item">
//             <a className="nav-link active" href="javascript:void(0);"><i className="bx bx-user me-1" /> Account</a>
//           </li>
         
//         </ul>
//         <div className="card mb-4">
//           <h5 className="card-header">Profile Details</h5>
//           {/* Account */}
//           <div className="card-body">
//             <div className="d-flex align-items-start align-items-sm-center gap-4">
//               <img src="../assets/img/avatars/1.png" alt="user-avatar" className="d-block rounded" height={100} width={100} id="uploadedAvatar" />
//               <div className="button-wrapper">
//                 <label htmlFor="upload" className="btn btn-primary me-2 mb-4" tabIndex={0}>
//                   <span className="d-none d-sm-block">Upload new photo</span>
//                   <i className="bx bx-upload d-block d-sm-none" />
//                   <input type="file" id="upload" className="account-file-input" hidden accept="image/png, image/jpeg" />
//                 </label>
//                 <button type="button" className="btn btn-outline-secondary account-image-reset mb-4">
//                   <i className="bx bx-reset d-block d-sm-none" />
//                   <span className="d-none d-sm-block">Reset</span>
//                 </button>
//                 <p className="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
//               </div>
//             </div>
//           </div>
//           <hr className="my-0" />
//           <div className="card-body">
//             <form id="formAccountSettings" method="POST" onsubmit="return false">
//               <div className="row">
//                 <div className="mb-3 col-md-6">
//                   <label htmlFor="firstName" className="form-label">First Name</label>
//                   <input className="form-control" type="text" id="firstName" name="firstName" autofocus />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label htmlFor="lastName" className="form-label">Last Name</label>
//                   <input className="form-control" type="text" name="lastName" id="lastName"  />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label htmlFor="email" className="form-label">E-mail</label>
//                   <input className="form-control" type="text" id="email" name="email"  />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label htmlFor="diplome" className="form-label">Diploma</label>
//                   <select  id="diplome" className="select2 form-select">
//                     <option value>Select Diplome</option>
//                     <option value="li">Licence</option>
//                     <option value="ma">Master</option>
//                     <option value="in">Ingeniérie</option>
                
//                   </select>
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label htmlFor="organization" className="form-label">Speciality</label>
//                   <select  id="specialite" className="select2 form-select">
//                     <option value>Select Speciality</option>
//                     <option value="cs">Computer Science</option>
//                     <option value="ti">TIC</option>
//                     <option value="ee">EEA</option>
                
//                   </select>
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
//                   <div className="input-group input-group-merge">
//                     <span className="input-group-text"> (+216)</span>
//                     <input type="text" id="phoneNumber" name="phoneNumber" className="form-control"  />
//                   </div>
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label htmlFor="address" className="form-label">Address</label>
//                   <input type="text" className="form-control" id="address" name="address"  />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label htmlFor="state" className="form-label">Project Code</label>
//                   <input className="form-control" type="text" id="state" name="code"  />
//                 </div>
                
                
                
//               </div>
//               <div className="mt-2">
//                 <button type="submit" className="btn btn-primary me-2">Save changes</button>
//                 <button type="reset" className="btn btn-outline-secondary">Cancel</button>
//               </div>
//             </form>
//           </div>
//           {/* /Account */}
//         </div>
        
//       </div>
//     </div>
//   </div>
//   {/* / Content */}
//   <div className="content-backdrop fade" />
 </div>

   </div>
  )
}

export default Profile
