$(function() {

  Parse.$ = jQuery;

  // TASK 1: ENTER YOUR APPLICATION AND JAVASCRIPT KEYS HERE
  Parse.initialize("K809xYpHgzM7reOEW2osYc6Utzqz33KkBN44daoR",
                   "cryRxrIRuA9LejD3xKIcg4XegnwzJLqErnm1ZH8X",
                   "jLs4QguNTMYHxHaBfOtw1U00g0xmn5MS6KDCnXJc");


//define objects

//events
var Event = Parse.Object.extend({
	destination: "destination",
	expectedBack: "expectedBack",
	bufferTime: "buffer",
	userDescription: "userDescription",
	travelingWith: "travelingWith",
	meetingWho: "meeting",
	timeLeaving: "timeLeaving",
	doing: "doing"
});

var UserObj = Parse.Object.extend({
	id : "facebookID",
	safe : "isSafe",
	friends : "userFriends"
	});


// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("gotBack", function(request,response){
	response.sucess("something!");
	//set user.safe = true;
});

Parse.Cloud.define("getFriends", function(user){
	response.sucess("showFriends!");
	
	//for user check friends
	//if friend.has event && event is expired
	//add to total friends to display
	//return friends / display them
});

Parse.Cloud.define("getEvent", function(user){
//todo for user get event
}
Parse.Cloud.define("post", function(request,response){
    new outEvent = new Event();
    outEvent.expectedBack=document.getElementById("back").value;
    outEvent.userDescription = document.getElementById("wearing").value;
    outEvent.travelingWith = document.getElementById("with").value;
    outEvent.meeting = document.getElementById("meeting").value;
    
    outEvent.save(null,{});

});

Parse.Cloud.define("CheckSafe", function(request,response){
	response.sucess("check all events to see if any have expired past time expected to get back, and send mesages!");
});


Parse.FacebookUtils.logIn("email,read_friendlists,publish_actions,publish_actions", {
  success: function(user) {
    if (!user.existed()) {
      alert("User signed up and logged in through Facebook!");
    } else {
      alert("User logged in through Facebook!");
    }
  },
  error: function(user, error) {
    alert("User cancelled the Facebook login or did not fully authorize.");
  }
});
});

