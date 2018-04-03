import React from "react";
import "./myRequest.css";
import API from "./../../utils/API";





class MyRequests extends React.Component {

  state = {

    matches:[],
    offers: []

  };



componentDidMount() {
    this.getUserId();
  }

  getUserId = () => {
    const cookie = document.cookie.split(";");
      console.log("cookie", cookie)
    let userID = cookie[0];
      userID = userID.split("=");
      userID = userID[1];
      console.log("userID:", userID);
    this.setState({UserId: userID});
    setTimeout(this.getInfo(userID),500)
  }

getInfo = id => {
  API.getWatcherAndMatch(id)
    .then(res => {
      //console.log(res.data)
      console.log("abc")

      this.setState({
        matches: res.data,
        offers: res.data

      })
      console.log(this.state.matches)
    })
      .catch(err => console.log(err));





                // <div className="col-md-6 requested-ticket">
                // <h5 className="card-title c.title">{match.Organization.name}</h5>
                // <p className="card-text c.text">{match.eventDate}</p>
                // </div>
                // <div className="col-md-6 offered-ticket">
                // <h5 className="card-title c.title">Hamilton</h5>
                // <p className="card-text c.text">5/23/2018</p>
                // </div>
}



render() {
  return (
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
            
    
                  <div className="col-md-6" id="requested-ticket">
                      <h5 className="card-title c.title">abc</h5>
                      <p className="card-text c.text">abc</p>
                  </div>
                  <div className="col-md-6" id="offered-ticket">
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

);


}

}

export default MyRequests;