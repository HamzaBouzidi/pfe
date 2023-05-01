import React from "react";


export const showErrorMsg = (msg) => (

    <div class="alert alert-danger" role="alert">{msg}</div>

);

export const showSuccessMsg = (msg) => (
    <div class="alert alert-success" role="alert"> {msg}</div>
   
);
export const showResetMsg = (msg) => (
  <div class="alert alert-success" role="alert"> {msg}</div>
 
);
export const showLoading = () =>{

    <div class="col-md">
    <div class="demo-inline-spacing">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
};
