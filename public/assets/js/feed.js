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
        var UserName = "Sasha Patsel"
         $(".comments-here").prepend("<div class='comment'><span class='userName'>" + UserName + "</span>  " + commment.comment + "</div>")
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



