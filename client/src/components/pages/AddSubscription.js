import React, {Component} from "react";
import Input from "../Form/Input";
import SubscriptionCard from "../SubscriptionCard";
import API from "./../../utils/API";

class AddSubscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OrganizationId: "",
     	subName: "",
      UserId:"",
      Organizations: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
  	this.getUserId();
    this.getOrganizationInfo();
  }


  getUserId = () => {
    const cookie = document.cookie.split(";");
      console.log("cookie", cookie)
    let userID = cookie[0];
      userID = userID.split("=");
      userID = userID[1];
      console.log("userID:", userID);
    this.setState({UserId: userID});
  }

  getOrganizationInfo = () => {
    API.getOrgs()
    .then(res => {
      this.setState({Organizations: res.data})
    }).catch(err =>
      console.log(err)
    );
    console.log("allorg", this.state.Organizations);
  }

	handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };  

  handleSubmit(event) {
    event.preventDefault();
    console.log("submit", this.state.OrganizationId, this.state.subName, this.state.UserId);

    fetch("/api/subscriptions", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        OrganizationId: this.state.OrganizationId,
        name: this.state.subName,
        UserId: this.state.UserId
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response  => {
      console.log(response);
      this.setState({
        OrganizationId: "",
        subName: ""
      });
      window.location.href = "/";
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div> 
      	<div className="col-10">          
          <form onSubmit={this.handleSubmit}>
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title">
                  <p>What have you subscribed to?</p>
                </div>
                <div className="panel-body">
                  <div className="section-content">                 
                    <div className="select">
                      <select className="form-control" value={this.state.OrganizationId} onChange={this.handleChange} name="OrganizationId">
                        <optgroup label="Pick One">
                          <option value=""></option>
                          {this.state.Organizations.map(organization => {
                            return <SubscriptionCard 
                            key={organization.id}
                            id={organization.id}
                            name={organization.name}
                            />
                          })}
                        </optgroup>        
                      </select> 
                    </div>                                  
                  </div>
                </div>
              </div>
            </div>
            
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title">
                  <p>Subscription Name:</p>
                </div>
                <div className="panel-body">
                  <div className="section-content">
                    <Input
                      value={this.state.subName}
                      onChange={this.handleChange}
                      name="subName"
                      placeholder="My Subscription"
                    />
                  </div>
                </div>
              </div>
            </div>
            <input id="save-sub" type="submit" value="Save" />
          </form>
        </div>
      </div>
    )
  }
}

export default AddSubscription;