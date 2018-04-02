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
    }

    loadAllTix = () => {
        API.getAllTix()
            .then(res => {
                // console.log(res.data)
                this.getTix(res.data)
            })
            .catch(err => console.log(err));
    };

    componentDidMount = () => {
        this.loadAllTix()
    };

    getTix = (tickets) => {
        const userDates = [];

        tickets.map(function (newTix) {
            console.log
            const userTix = {
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
                />

                <Link to="/addTix" className="n-pills">
                    <Button size='small' id='exchange-button' className={window.location.pathname === "/addTix" ? "active" : ""}>
                        <Icon name='exchange' /> Find Tickets
                    </Button>
                </Link>
                
                <Link to="/addTix" className="n-pills">
                    <Button size='small' id='add-button' className={window.location.pathname === "/addTix" ? "active" : ""}>
                        <Icon name='add circle' /> Add Tickets
                    </Button>
                </Link>
            </div>
        );
    }
}

export default FullCal


