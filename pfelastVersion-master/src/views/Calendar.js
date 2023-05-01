// import React from 'react'
// import { useEffect } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// const Calendar = () => {
   

//         // useEffect(() => {
//         //   const calendarEl = document.getElementById('calendar')
//         //   const calendar = new FullCalendar.Calendar(calendarEl, {
//         //     plugins: [ dayGridPlugin ]
//         //   })
//         //   calendar.render()
//         // }, [])
      
//   return (
//     <div>
  
   
//     {/* Start Content*/}
//     <div className="container-fluid">
//       {/* start page title */}
//       <div className="row">
//         <div className="col-12">
//           <div className="page-title-box">
//             <div className="page-title-right">
//               <ol className="breadcrumb m-0">
//                 <li className="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
//                 <li className="breadcrumb-item"><a href="javascript: void(0);">Apps</a></li>
//                 <li className="breadcrumb-item active">Calendar</li>
//               </ol>
//             </div>
//             <h4 className="page-title">Calendar</h4>
//           </div>
//         </div>
//       </div>
//       {/* end page title */}
//       <div className="row">
//         <div className="col-12">
//           <div className="card">
//             <div className="card-body">
//               <div className="row">
//                 <div className="col-lg-3">
//                   <div className="d-grid">
//                     <button className="btn btn-lg font-16 btn-danger" id="btn-new-event"><i className="mdi mdi-plus-circle-outline" /> Create New
//                       Event</button>
//                   </div>
//                   <div id="external-events" className="m-t-20">
//                     <br />
//                     <p className="text-muted">Drag and drop your event or click in the calendar
//                     </p>
//                     <div className="external-event bg-success-lighten text-success" data-class="bg-success">
//                       <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle" />New
//                       Theme Release
//                     </div>
//                     <div className="external-event bg-info-lighten text-info" data-class="bg-info">
//                       <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle" />My
//                       Event
//                     </div>
//                     <div className="external-event bg-warning-lighten text-warning" data-class="bg-warning">
//                       <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle" />Meet
//                       manager
//                     </div>
//                     <div className="external-event bg-danger-lighten text-danger" data-class="bg-danger">
//                       <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle" />Create
//                       New theme
//                     </div>
//                   </div>
                 
//                 </div> {/* end col*/}
//                 <div className="col-lg-9">
//                   <div className="mt-4 mt-lg-0">
//                     <div id="calendar" />
//                   </div>
//                 </div> {/* end col */}
//               </div> {/* end row */}
//             </div> {/* end card body*/}
//           </div> {/* end card */}
//           {/* Add New Event MODAL */}
//           <div className="modal fade" id="event-modal" tabIndex={-1}>
//             <div className="modal-dialog">
//               <div className="modal-content">
//                 <form className="needs-validation" name="event-form" id="form-event" noValidate>
//                   <div className="modal-header py-3 px-4 border-bottom-0">
//                     <h5 className="modal-title" id="modal-title">Event</h5>
//                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
//                   </div>
//                   <div className="modal-body px-4 pb-4 pt-0">
//                     <div className="row">
//                       <div className="col-12">
//                         <div className="mb-3">
//                           <label className="control-label form-label">Event Name</label>
//                           <input className="form-control" placeholder="Insert Event Name" type="text" name="title" id="event-title" required />
//                           <div className="invalid-feedback">Please provide a valid event name</div>
//                         </div>
//                       </div>
//                       <div className="col-12">
//                         <div className="mb-3">
//                           <label className="control-label form-label">Category</label>
//                           <select className="form-select" name="category" id="event-category" required>
//                             <option value="bg-danger" selected>Danger</option>
//                             <option value="bg-success">Success</option>
//                             <option value="bg-primary">Primary</option>
//                             <option value="bg-info">Info</option>
//                             <option value="bg-dark">Dark</option>
//                             <option value="bg-warning">Warning</option>
//                           </select>
//                           <div className="invalid-feedback">Please select a valid event category</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-6">
//                         <button type="button" className="btn btn-danger" id="btn-delete-event">Delete</button>
//                       </div>
//                       <div className="col-6 text-end">
//                         <button type="button" className="btn btn-light me-1" data-bs-dismiss="modal">Close</button>
//                         <button type="submit" className="btn btn-success" id="btn-save-event">Save</button>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div> {/* end modal-content*/}
//             </div> {/* end modal dialog*/}
//           </div>
//           {/* end modal*/}
//         </div>
//         {/* end col-12 */}
//       </div> {/* end row */}
  

// </div>

//     </div>
//   )
// }

// export default Calendar
