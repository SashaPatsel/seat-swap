// import React...
import React from 'react';
import ReactDOM from 'react-dom';

// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';
import API from "../utils/API";
class FullCal extends React.Component {
    
    loadAllTix = () => {
        API.getAllTix()
            .then(res =>
                // this.setState({ books: res.data, title: "", author: "", synopsis: "" })
                console.log(res.data)

            )
            .catch(err => console.log(err));
    };

    componentDidMount = () => {
        this.loadAllTix()
    }

    constructor(props) {
        super(props);
        this.state = {

            events: [
                {
                    title: 'All Day Event',
                    start: '2017-05-01'
                },
                {
                    title: 'Long Event',
                    start: '2017-05-07',
                    end: '2017-05-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2017-05-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2017-05-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2017-05-11',
                    end: '2017-05-13'
                },
                {
                    title: 'Meeting',
                    start: '2017-05-12T10:30:00',
                    end: '2017-05-12T12:30:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2017-05-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    // url: 'http://google.com/',
                    start: '2018-03-26T16:00:00'
                }
            ],
        }
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