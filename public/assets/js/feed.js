 $(document).on("submit", "#comment-form", function() {
     event.preventDefault()
     storeComment({
         UserId: 1,
         OrganizationId: 1,
         comment: $("#comment-text").val().trim()
     });
     $("#comment-text").val("")
 })
$(document).on("click", "#pills-org-tix-tab", function() {
     event.preventDefault()
     toWindowshop({
         
         status: status,
         date:date
         // seatSec: seatSec,
         // seatNum: seatNum,
         // seatRow: seatRow,
         // eventTitle: eventTitle
       
        
     });
     $(".relatedTix").val("")
 });



 // A function for creating an author. Calls getAuthors upon completion
 function storeComment(comment) {
     $.post("/teamfeed", comment).then(function() {
         $(".comments-here").prepend("<div>" + comment.comment + "</div>")
         console.log(comment)
     })
 }

function renderComments() {
     $.get("/teamfeed/:org?", function(data) {
      
      for (var i = 0; i < data.length; i++) {
       var UserName = "Sasha Patsel"
         console.log(data[i].comment)
         $(".comments-here").prepend("<div class='comment'><span class='userName'>" + UserName + "</span>  " + data[i].comment + "</div>")
      }
     
    })
}
renderComments()


function toWindowshop(ticket){
    $.get("/api/tickets/?status=available").then(function(data){
        console.log(data);
        for (var i=0; i<data.length; i++){

        $(".relatedTix").prepend("<div class='ticket-info'>" +data[i].date+ data[i].seatSec + data[i].seatRow + data[i].seatNum + data[i].eventTitle + "</div>")
        }
        console.log(ticket)
        
    })
}



