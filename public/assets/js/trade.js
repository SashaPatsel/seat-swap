
//  var orgId;

// $(".dropdown-item").on("click", function() {
//         event.preventDefault();
//         var subscription = $(this).data("value");
//         orgId = parseInt(subscription);
//         console.log(orgId);
//     })

//  // A function for creating an author. Calls getAuthors upon completion
//  function storeWatcher(watcher) {
//      $.post("/api/watchers", watcher).then(function() {
//          console.log("watcher", watcher)
//      })
//  }

//  $(document).on("submit", "#watcher-form", function() {
//      event.preventDefault()
//         console.log("I exist")
//      storeWatcher({
//     eventDate: $("#watcher-date").val().trim(),
//     numberOfSeats: $("#watcher-num").val().trim(),
//     UserId: 1,
//     OrganizationId: orgId
// });
//     $("#watcher-date").val("")
//     $("#watcher-num").val("")
//  })

$(document).ready(function() {

    $(".dropdown-item").on("click", function() {
        event.preventDefault();
        var subscription = $(this).data("value");
        var orgId = parseInt(subscription);
        createWatcher(orgId);
    })

    function createWatcher(orgId) {
        $("#watcher").on("click", function() {
                event.preventDefault()
                console.log("date", $("#watcher-date").val().trim());

                var watcher = {
                    eventDate: $("#watcher-date").val().trim(),
                    numberOfSeats: $("#watcher-num").val().trim(),
                    UserId: userID,
                    OrganizationId: orgId
                }

                storeWatcher(watcher);

                $("#watcher-date").val("");
                $("#watcher-num").val("");

        })
    }


    function storeWatcher(watcher) {
         $.post("/api/watchers", watcher).then(function() {
             console.log("watcher", watcher)
         })
    }


    function storeNewTix(newTix) {
         $.post("/api/tickets", newTix).then(function() {
             console.log("newTix", newTix)
         })
    }

    $(document).on("submit", "#add-tix-form", function() {
        event.preventDefault()
            console.log("I'm here")
        storeNewTix({
            date: $("#add-tix-date").val().trim(),
            seatSec: $("#add-tix-sec").val().trim(),
            seatRow: $("#add-tix-row").val().trim(),
            seatNum: $("#add-tix-num").val().trim(),
            eventTitle: $("#add-tix-name").val().trim(),
            status: "locked",
            UserId: userID
    });
     console.log("here it is", userID)   
     })


    var cookie = document.cookie.split(";");
        console.log("cookie", cookie)
    var userID = cookie[0];
        userID = userID.split("=");
        userID = userID[1];
        console.log("userID:", userID);
    var userName = cookie[1];
        userName = userName.split("=");
        userName = userName[1];
        userName = userName.split("%20");
        userName = userName[0] + " " + userName[1];
        console.log(userName);

});
    
        
