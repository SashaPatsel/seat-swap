$(document).ready(function() {

  $(".dropdown-item").on("click", function() {
      event.preventDefault();
      var subscription = $(this).data("value");
      console.log(subscription);
      getEventInfo(subscription);
  })

  $("#seat-submit").on("click", function() {
      event.preventDefault();
      var seatSec = $("#seat-section").val();
      var seatRow = $("#seat-row").val();
      var seatNum = $("#seat-number").val();
      console.log(seatSec, seatRow, seatNum);
  })

  function getEventInfo(subscription) {
      // https://api.sportradar.us/nba/{access_level}/{version}/{language_code}/games/{season_year}/{nba_season}/schedule.{format}?api_key={your_api_key}
      var nbaUrl = "https://api.sportradar.us/nba/trial/v4/en/games/2017/reg/schedule.json?api_key=" + keys.sportradar.nbakey;
      var mlbUrl = "https://api.sportradar.us/mlb/trial/v6.5/en/games/2018/reg/schedule.json?api_key=" + keys.sportradar.mlbkey;
      
      switch (subscription) {
            case "GSW":
            $.ajax({
                url: nbaUrl,
                method: "GET"
            }).done(function(response) {
                var events = [];
                for (var i = 0; i < response.games.length; i++) {
                   //console.log(response)
                  
                  if (response.games[i].home.alias === "GSW") {
                    var event = {};
                    console.log(response.games[i].away.name);
                    console.log(response.games[i].scheduled);

                    var away = response.games[i].away.name
                    event["title"] = "Golden State Warriors vs " + away;
                    event["start"] = response.games[i].scheduled;
                    events.push(event);
                  }
                  
                }
                console.log(events);
                renderCalendar(events);
            });   
            break;
          
          case "SF":
            $.ajax({
                url: mlbUrl,
                method: "GET"
            }).done(function(response) {
              var events = [];
                for (var i = 0; i < response.games.length; i++) {
                  //console.log(response)
                  if (response.games[i].home.abbr === "SF") {
                    var event = {};
                    console.log(response.games[i].away.name);
                    var away = response.games[i].away.name;
                    event["title"] = "Giants vs " + away;
                    console.log(response.games[i].scheduled);
                    event["start"] = response.games[i].scheduled;
                    events.push(event);
                  }
                }
                console.log(events);
                renderCalendar(events);
            });
            break;
      }
  } 

  function renderCalendar(events) {
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
        events: events
      });
  }
});