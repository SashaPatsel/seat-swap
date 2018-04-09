// import React...
import React from 'react';
import ReactDOM from 'react-dom';

// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';
import API from "../utils/API";
import { Button, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class FullCal extends React.Component {

    state = {
        events: [],
        UserId: ""
    }


  getUserId = () => {
    const cookie = document.cookie.split(";");
    console.log("cookie", cookie)
    let userID = cookie[0];
    userID = userID.split("=");
    userID = userID[1];
    console.log("userID:", userID);
    this.setState({ UserId: userID });
    setTimeout(this.getTixForUser(userID), 500)
  }

  getTixForUser (userId) {
        API.getTixForUser(userId)
            .then(res => {
                console.log(res.data)
                this.getTix(res.data)
            })
            .catch(err => console.log(err));
    };

    componentDidMount ()  {
        this.getUserId();
    };

    getTix = (tickets) => {
        const userDates = [];
        console.log("chicken")
        tickets.map(function (newTix) {
            console.log
            const userTix = {
                id: newTix.id,
                title: newTix.eventTitle,
                start: newTix.date
            }
            userDates.push(userTix)


        });
        console.log(userDates)
        this.setState({
            events: userDates

        })
    }

testFunc = event => {
    alert("chicken")
    console.log("chicken")
}
    render() {
        return (
            <div id="example-component" className="fullCal">
                <FullCalendar
                
                    id="fullCal-main"
                    header={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,listMonth'
                    }}
                    //  defaultDate={'2017-09-12'}
                    navLinks={true} // can click day/week names to navigate views
                    editable={false}
                    eventLimit={true} // allow "more" link when too many events
                    events={this.state.events}
                    eventClick={this.testFunc}
                />
            </div>
        );
    }
}

export default FullCal


