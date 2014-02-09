$(document).ready(function() {

	var username="bob"; 
	var hasPost=false;
	var postObj="the object";
	var friends="my friends";
	var friendsMissing="missing?";
	
	
  Parse.initialize("E3aKqq2sCS2aC20YyNALua7YMGxMMZd71IJ0iTHb",
                   "NAU96IHJ6zOUUOpqaLVEj1dCMPv4H02N8B4SetPR");

  	var Event = Parse.Object.extend("Event",{
		defaults: {
			destination: "destination",
			expectedBack: "expectedBack",
			bufferTime: "buffer",
			userDescription: "userDescription",
			travelingWith: "travelingWith",
			meetingWho: "meeting",
			timeLeaving: "timeLeaving",
			doing: "doing"
		}
	});
	
	var UserObj = Parse.Object.extend({
	id : "facebookID",
	safe : "isSafe",
	friends : "userFriends"
	});
	
	/*
	//Find the event of the user if they have one
	*/
	function checkMyEvent(){
	}
	
	/*
	/Return if a user has posted an event
	*/
	function hasEvent()= new function(){
	}
	
	/*
	/Return friends of the user
	*/
	function myFriends(){
	}
	
	/*
	//Return missing friends of the user
	*/
	function missingFriends(){
	}
	
	/*
	//Return friends of the user's Event
	*/
	function getUserEvent(userID){
	}
	
	/*
	/Return if user is new
	*/ 
	function isNewUser(userID){
	}
	
	/*
	/add user to DB
	*/ 
	function addNewUser(userID){
	}
	
	
	$("#eventForm").on("submit", function(e) {
		e.preventDefault();

		console.log("Handling the submit");
		//add error handling here
		//gather the form data

		var event = new Event();
		event.destination = $("#dest").val();
		event.destination = $("#back").val();
		event.destination = $("#wearing").val();
		event.destination = $("#with").val();
		event.destination = $("#meeting").val();


		event.save(null, {
			success:function() {
				console.log("Success");
				console.log(event.destination);
			},
			error:function(e) {
				console.dir(e);
			}
		});
		location.reload();
	});
	
});
