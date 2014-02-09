
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

Parse.Cloud.define("post", function(request,response){
    new outEvent(
    document.getElementById("back").value;
    document.getElementById("wearing").value;
    document.getElementById("with").value;
    document.getElementById("meeting").value;

});

Parse.Cloud.define("CheckSafe", function(request,response){
	response.sucess("check all events to see if any have expired past time expected to get back, and send mesages!");
});


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

