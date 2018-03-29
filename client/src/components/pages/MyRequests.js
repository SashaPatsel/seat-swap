import React from "react";
import "./myRequest.css";

const MyRequests = () => (
  <div className="navTabs">
<div className="card text-center">
  <div className="card-header c.head">
    Featured
  </div>
  <div className="card-body c.body">
    <div className = "row">
            <div className="col-md-12">
            <a href="#" className="btn btn-primary" className="text-center" id="accept">Accept</a>
            <br></br>
            <br></br>
            </div>
    </div>
    <div className = "row">
            <div className="col-md-6" id="left-ticket">
            <h5 className="card-title c.title">Special title treatment</h5>
            <p className="card-text c.text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="col-md-6 " id="right-ticket">
            <h5 className="card-title c.title">Special title treatment</h5>
            <p className="card-text c.text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
    </div>
    <div className = "row">
            <div className="col-md-12">
            <a href="#" className="btn btn-danger" id="decline">Reject</a>
            </div>
    </div>
         <div className="col-md-6">
        </div>
    </div>
  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>
);

export default MyRequests;