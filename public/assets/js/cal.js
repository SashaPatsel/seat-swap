$(document).ready(function() {

    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,listMonth'
      },
      defaultDate: '2018-03-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2018-03-01',
        },
        {
          title: 'Long Event',
          start: '2018-03-07',
          end: '2018-03-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-03-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-03-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2018-03-11',
          end: '2018-03-13'
        },
        {
          title: 'Meeting',
          start: '2018-03-12T10:30:00',
          end: '2018-03-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2018-03-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2018-03-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2018-03-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2018-03-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2018-03-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-03-28'
        }
      ]
    });

  });



$(document).on("click", ".fc-day", function() {
    // $(this).addClass("sneak")
    // $("")
    // $(this).append("<form class='dyn-frm'><input placeholder='Enter an event' type='text'/></form>")
    console.log("modal")
    $("#initModal").modal("show");
})


$(document).on("submit", ".req-form", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    OrganizationId: $("#org").val().trim()
    var newReq = {
      eventDate: $("#date").val().trim(),
      numOfSeats: $("#num-tix").val().trim()
    };
    console.log("mod-sub")
    console.log($("#org").val().trim(), $("#date").val().trim(), $("#num-tix").val().trim())
})    
  // <script src='assets/fullcalendar-3.9.0/lib/jquery.min.js'></script>  

// app.post("/watchers", function(req, res) {
//        db.Watcher.create(req.body).then(function(dbWatcher) {
//          res.json(dbWatcher);
//        });
//    });