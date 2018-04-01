import React from "react";
import "./myRequest.css";
import API from "../../utils/API";

class MyRequests extends React.Component {
    state = {
      watchers: []
    };

   getWatcherForUser = () => {
    API.getWatcherForUser()
    .then(res => {
      console.log(res.data)

      this.setState({
        watchers: res.data
      })
    })
   
    .catch(err => console.log(err));
}


  componentDidMount() {
    this.getWatcherForUser();
  }



render() {
    return (

    );
  }
}

export default MyRequests;