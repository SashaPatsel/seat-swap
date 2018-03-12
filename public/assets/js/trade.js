
 var orgId = 0;

$(".dropdown-item").on("click", function() {
        event.preventDefault();
        var subscription = $(this).data("value");
        orgId = parseInt(subscription);
        console.log(orgId);
    })

 // A function for creating an author. Calls getAuthors upon completion
 function storeWatcher(watcher) {
     $.post("/api/watchers", watcher).then(function() {
         console.log("watcher", watcher)
     })
 }

 $(document).on("submit", "#watcher-form", function() {
     event.preventDefault()
        console.log("I exist")
     storeWatcher({
    eventDate: $("#watcher-date").val().trim(),
    numberOfSeats: $("#watcher-num").val().trim(),
    UserId: 1,
    OrganizationId: orgId
});
    $("#watcher-date").val("")
    $("#watcher-num").val("")
 })

        // date: ,
        // seatSec: ,
        // seatRow: ,
        // seatNum: ,
        // eventTitle: ,
        // status: "locked"
        
