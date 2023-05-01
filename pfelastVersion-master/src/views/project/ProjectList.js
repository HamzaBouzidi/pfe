import React from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    ReadProjects()
}, [])
const { id } = useParams();
const navigate =useNavigate();
const ReadProjects = () => {
    fetch('http://127.0.0.1:3000/project/allproject')
      .then(res => res.json())
      .then(
        (result) => {
          setProjects(result)
        }
      )
}


const [showConfirmation, setShowConfirmation] = useState(false);
const DeleteProject = id => {
    axios
      .delete(`http://127.0.0.1:3000/project/delproject/${id}`)
      .then(res => {
        if (res.data.status === "SUCCESS") {
          alert("project has been deleted");
          setProjects(projects.filter(project => project._id !== id)); // remove deleted project from table
          navigate('/teacherdash/projectsList')
        } else {
          alert("project not deleted successfully");
        }
      })
      .catch(err => {
        if (err.response) {
          // The request was made and the server responded with an error status code
          console.log(err.response.data);
          
        } else if (err.request) {
          // The request was made but no response was received
          console.log(err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", err.message);
        }
      });
 
};
  return (
  <div>
  
  <div className="container-fluid">  

  <div className="row">
    <div className="col-12"> 
      <div className="page-title-box">
        <div className="page-title-right">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item"><a href="javascript: void(0);">Encadra</a></li>
            <li className="breadcrumb-item active">Projects Table</li>
          </ol>
        </div>
        <h4 className="page-title">Projects Table</h4>
      </div>
    </div>

  <div className="row">
    <div className="">
      <div className="card">
        <div className="card-body">
         
        <div className="col-sm-12">
        <div className="text-sm-end">
        <Link to="/teacherdash/addproject" className="btn btn-danger mb-2"><i class="mdi mdi-plus-circle me-2"></i> Add Project</Link>
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
                      <th>Members</th>
                      <th>Start Date</th>
                      <th>Progress</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {projects.map((project) => (            
        
              
                      <tr key={project.ID}>
                    
                        
                        <td>{project.name}</td>
                        <td>{project.team}</td>
                        <td>{project.date}</td>
                        <td>
                            <div class="progress progress-sm">
                            <div class="progress-bar progress-lg bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                               </div>
                   </td>
                        <td>{project.progress}</td>
                        
                        <td className="actions">  
                        <Link  to={`/teacherdash/editproject/${project._id}`} className="action-icon"> <i className="mdi mdi-pencil" /></Link>
                        <a href="javascript: void(0);" className="action-icon"  onClick={() => DeleteProject(project._id)} > <i className="mdi mdi-delete" /></a>                    
             
                        </td>             
                      </tr>
                         )
                         )}          
                                      
                  </tbody>
                </table>
              </div> {/* end table-responsive*/}                     
            </div> {/* end preview*/}
            <div className="tab-pane" id="striped-rows-code">
              <pre className="mb-0">{"                                                    "}<span className="html escape">{"\n"}{"                                                        "}&lt;table class="table table-striped table-centered mb-0"&gt;{"\n"}{"                                                            "}&lt;thead&gt;{"\n"}{"                                                                "}&lt;tr&gt;{"\n"}{"                                                                    "}&lt;th&gt;User&lt;/th&gt;{"\n"}{"                                                                    "}&lt;th&gt;Account No.&lt;/th&gt;{"\n"}{"                                                                    "}&lt;th&gt;Balance&lt;/th&gt;{"\n"}{"                                                                    "}&lt;th&gt;Action&lt;/th&gt;{"\n"}{"                                                                "}&lt;/tr&gt;{"\n"}{"                                                            "}&lt;/thead&gt;{"\n"}{"                                                            "}&lt;tbody&gt;{"\n"}{"                                                                "}&lt;tr&gt;{"\n"}{"                                                                    "}&lt;td class="table-user"&gt;{"\n"}{"                                                                        "}&lt;img src="assets/images/users/avatar-2.jpg" alt="table-user" class="me-2 rounded-circle" /&gt;{"\n"}{"                                                                        "}Risa D. Pearson{"\n"}{"                                                                    "}&lt;/td&gt;{"\n"}{"                                                                    "}&lt;td&gt;AC336 508 2157&lt;/td&gt;{"\n"}{"                                                                    "}&lt;td&gt;July 24, 1950&lt;/td&gt;{"\n"}{"                                                                    "}&lt;td class="table-action"&gt;{"\n"}{"                                                                        "}&lt;a href="javascript: void(0);" class="action-icon"&gt; &lt;i class="mdi mdi-pencil"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"                                                                        "}&lt;a href="javascript: void(0);" class="action-icon"&gt; &lt;i class="mdi mdi-delete"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"                                                                    "}&lt;/td&gt;{"\n"}{"                                                                "}&lt;/tr&gt;{"\n"}{"                                                                "}&lt;tr&gt;{"\n"}{"                                                                    "}&lt;td class="table-user"&gt;{"\n"}{"                                                                        "}&lt;img src="assets/images/users/avatar-3.jpg" alt="table-user" class="me-2 rounded-circle" /&gt;{"\n"}{"                                                                        "}Ann C. Thompson{"\n"}{"                                                                    "}&lt;/td&gt;{"\n"}{"                                                                    "}&lt;td&gt;SB646 473 2057&lt;/td&gt;{"\n"}{"                                                                    "}&lt;td&gt;January 25, 1959&lt;/td&gt;{"\n"}{"                                                                    "}&lt;td class="table-action"&gt;{"\n"}{"                                                                        "}&lt;a href="javascript: void(0);" class="action-icon"&gt; &lt;i class="mdi mdi-pencil"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"                                                                        "}&lt;a href="javascript: void(0);" class="action-icon"&gt; &lt;i class="mdi mdi-delete"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"                                                                    "}&lt;/td&gt;{"\n"}{"                                                                "}&lt;/tr&gt;{"\n"}{"                                                                "}&lt;tr&gt;{"\n"}{"                                                                    "}&lt;td class="table-user"&gt;{"\n"}{"                                                                        "}&lt;img src="assets/images/users/avatar-4.jpg" alt="table-user" class="me-2 rounded-circle" /&gt;{"\n"}{"                                                                        "}Paul J. Friend{"\n"}{"                                                                    "}&lt;/td&gt;{"\n"}{"                                                                    "}&lt;td&gt;DL281 308 0793&lt;/td&gt;{"\n"}{"                                                                    "}&lt;td&gt;September 1, 1939&lt;/td&gt;{"\n"}{"                                                                    "}&lt;td class="table-action"&gt;{"\n"}{"                                                                        "}&lt;a href="javascript: void(0);" class="action-icon"&gt; &lt;i class="mdi mdi-pencil"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"                                                                        "}&lt;a href="javascript: void(0);" class="action-icon"&gt; &lt;i class="mdi mdi-delete"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"                                                                    "}&lt;/td&gt;{"\n"}{"                                                                "}&lt;/tr&gt;{"\n"}{"                                                                "}&lt;tr&gt;{"\n"}{"                                                                    "}&lt;td class="table-user"&gt;{"\n"}{"                                                                        "}&lt;img src="assets/images/users/avatar-5.jpg" alt="table-user" class="me-2 rounded-circle" /&gt;{"\n"}{"                                                                        "}Sean C. Nguyen{"\n"}{"                                                                    "}&lt;/td&gt;{"\n"}{"                                                                    "}&lt;td&gt;CA269 714 6825&lt;/td&gt;{"\n"}{"                                                                    "}&lt;td&gt;February 5, 1994&lt;/td&gt;{"\n"}{"                                                                    "}&lt;td class="table-action"&gt;{"\n"}{"                                                                        "}&lt;a href="javascript: void(0);" class="action-icon"&gt; &lt;i class="mdi mdi-pencil"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"                                                                        "}&lt;a href="javascript: void(0);" class="action-icon"&gt; &lt;i class="mdi mdi-delete"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}{"                                                                    "}&lt;/td&gt;{"\n"}{"                                                                "}&lt;/tr&gt;{"\n"}{"                                                            "}&lt;/tbody&gt;{"\n"}{"                                                        "}&lt;/table&gt;{"\n"}{"                                                    "}</span>{"\n"}{"                                                "}</pre> {/* end highlight*/}
            </div> {/* end preview code*/}
          </div> {/* end tab-content*/}
        </div> {/* end card body*/}
      </div> {/* end card */}
    </div>{/* end col*/}
  
  </div>
 </div>  
  </div>
  

</div> 

  )
}

export default ProjectList
