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
	expectedBack: "expectedBack"
	bufferTime: "buffer",
	userDescription: "userDescription",
	travelingWith: "travelingWith",
	meetingWho: "meeting",
	timeLeaving: "timeLeaving",
	doing: "doing"
});


// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("something", function(request,response){
	response.sucess("something!");
});

Parse.Cloud.define("getFriends", function(request,response){
	response.sucess("showFriends!");
});
Parse.Cloud.define("getEvents", function(user){
//todo for user get event
}
Parse.Cloud.define("post", function(request,response){
    new outEvent = new Event();
    outEvent.expectedBack=document.getElementById("back").value;
    outEvent.userDescription = document.getElementById("wearing").value;
    outEvent.travelingWith = document.getElementById("with").value;
    outEvent.meeting = document.getElementById("meeting").value;

});

Parse.Cloud.define("CheckSafe", function(request,response){
	response.sucess("check all events to see if any have expired past time expected to get back, and send mesages!");
});




});

