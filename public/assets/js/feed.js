 $(document).on("submit", "#comment-form", function() {
     event.preventDefault()
     storeComment({
         UserId: 1,
         OrganizationId: 2,
         comment: $("#comment-text").val().trim()
     });
     $("#comment-text").val("")
 })



 // A function for creating an author. Calls getAuthors upon completion
 function storeComment(comment) {
    var UserName = "Sasha Patsel"
     $.post("/teamfeed", comment).then(function() {
         $(".comments-here").prepend("<div class='comment'><span class='userName'>" + UserName + "</span>  " + comment.comment + "</div>")
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



