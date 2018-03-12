window.fbAsyncInit = function() {
    FB.init({
        appId: '586303611715029',
        cookie: true,
        xfbml: true,
        version: 'v2.12'
    });

    FB.AppEvents.logPageView();

};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

 $(document).on("submit", "#sub-name-form", function() {
     event.preventDefault()
     storeSubName({
         UserId: 1,
         name: $("#sub-name").val().trim(),
         OrganizationId: 1
     });

    $("#sub-name-form").addClass("hide")
    $("#tix-info-form").removeClass("hide")
 })

 function storeSubName(name) {
     $.post("/api/subscriptions", name).then(function() {
         console.log(name)
     })
 }

  $(document).on("submit", "#tix-info-form", function() {
     event.preventDefault()
     storeTixInfo({
        seatSec: $("#seat-section").val().trim(),
        seatRow: $("#seat-row").val().trim(),
        seatNum: $("#seat-number").val().trim(),
        
     });
 })

 function storeTixInfo(tickets) {
     $.post("/api/tickets", tickets).then(function() {
         console.log(tickets)
     })
 }