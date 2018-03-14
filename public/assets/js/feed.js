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
   
     $.post("/teamfeed", comment).then(function() {
         $(".comments-here").prepend("<div class='comment'><span class='userName'>" + userName + "</span>  " + comment.comment + "</div>")
         console.log(comment)
     })
 }

// function renderComments() {
     $.get("/api/organization/2/teamfeed", function(data) {
      
      for (var i = 0; i < data.length; i++) {

         console.log("comments!!!!!!!!!!!!!", data[i].User.firstName)
         console.log("comments???????",data[i].User.firstName)
         $(".comments-here").prepend("<div class='comment'><span class='userName'>" + userName + "</span>  " + data[i].comment + "</div>")
      }
     
    })
// }
// renderComments()

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
userName = userName[0] + " " + userName [1];
console.log(userName);


