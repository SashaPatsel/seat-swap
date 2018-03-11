 $(document).on("submit", "#comment-form", function() {
     event.preventDefault()
     storeComment({
         UserId: 1,
         OrganizationId: 1,
         comment: $("#comment-text").val().trim()
     });
     $("#comment-text").val("")
 })



 // A function for creating an author. Calls getAuthors upon completion
 function storeComment(comment) {
     $.post("/teamfeed", comment).then(function() {
         $(".comments-here").append("<div>" + comment.comment + "</div>")
     })
 }

function renderComments() {
     $.get("/teamfeed/:org?", function(data) {
      
      for (var i = 0; i < data.length; i++) {
        
         console.log(data[i].comment)
         $(".comments-here").append("<div>" + data[i].comment + "</div>")
      }
     
    })
}
renderComments()



