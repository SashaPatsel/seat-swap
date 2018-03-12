
$.ajax({
    url: "/api/users/" + userID,
    method: "GET"
}).done(function(response) {
    console.log(response);
    console.log("getting user info");
});



$.ajax("/api/cats", {
  type: "POST",
  data: newCat
}).then(
  function() {
    console.log("created new cat");
    // Reload the page to get the updated list
    location.reload();
  }
);


$.ajax("/api/users/" + userID, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );





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
