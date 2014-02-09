$(document).ready(function() {

	var userObj=getUserObj();
	var username=getUserName();
	var userID=getUserID(); 
	var hasPost=hasEvent();
	var postObj=getUserEvent(userID);
	var friends=myFriends();
	var friendsMissing=missingFriends();;
	
	
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
	friends : "userFriends",
	post : "post"
	});
	
	/*
	/Get user ID
	*/
	function getUserID(){
	}
	
	/*
	/Get user Name
	*/
	function getUserName(){
	}
	
	/*
	/Get user ID
	*/
	function getUserObj(){
	if(!FB.getLoginStatus()){
	}else{
	//TODO
	Parse.FacebookUtils.logIn("TODO this is the permissions we want);
	}
	
	//if the db has the userid in it, return the userobject otherwise create a new userobject
	}
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
	
	//?
	FB.api('/me', function(response) {
 	 alert('Your name is ' + response.name);
 	 alert('Your ID is ' + response.id);
	});
	
	
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
