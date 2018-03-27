// import React...
import React from 'react';
import ReactDOM from 'react-dom';

// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';
import API from "../utils/API";
class FullCal extends React.Component {

    state = {

        events: [
            // {
            //     title: 'Birthday Party',
            //     start: '2018-03-03T10:00:00.000Z'
            // },
            // {
            //     title: 'Click for Google',
            //     // url: 'http://google.com/',
            //     start: '2018-03-26T16:00:00'
            // }
        ],
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
            //                [ {
            //         title: 'Chicken',
            //         start: '2018-03-03T10:00:00.000Z'
            //     },
            //     {
            //         title: 'Click for Chicken',
            //         // url: 'http://google.com/',
            //         start: '2018-03-26T16:00:00'
            //     },
            //     {
            //         title: "gsw match 1", 
            //         start: "2018-04-01T10:00:00.000Z"
            //     }
            // ]
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
            </div>
        );
    }
}

export default FullCal


