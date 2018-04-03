const MyRequests = () => (
  <div className="card-container">
    <div className="card text-center">
      <div className="card-header c.head">
        Featured
      </div>
      <div className="card-body c.body">
        <div className = "row">
          <div className="col-md-12">
            <a href="#" className="btn btn-primary text-center"  id="accept">Accept</a>
            <br></br>
            <br></br>
          </div>
        </div>
        <div className = "row">
                <div className="col-md-6 requested-ticket">
                <h5 className="card-title c.title">Oak vs. SF</h5>
                <p className="card-text c.text">4/3/2018</p>
                </div>
                <div className="col-md-6 offered-ticket">
                <h5 className="card-title c.title">Hamilton</h5>
                <p className="card-text c.text">5/23/2018</p>
                </div>
        </div>
      </div>
        <div className = "row card-footer">
                <div className="col-md-12">
                <a href="#" className="btn btn-danger" id="decline">Reject</a>
                </div>
        </div>
    </div> 
  </div> 