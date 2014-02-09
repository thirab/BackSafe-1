$(document).ready(function() {

	var userID=getUserID(); 
	var userObj=getUserObj();
	var username=getUserName();
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
		FB.api('/me', function(response) {
 		 userID=response.id;
		});
	}
	
	/*
	/Get user Name
	*/
	function getUserName(){
		FB.api('/me', function(response) {
 		 userName=response.name;
		});
	}
	
	/*
	/Get user ID
	*/
	function getUserObj(){
	if(!FB.getLoginStatus()){
		if(!isNewUser()){
			return Parse.Query(userID);
		}else{
			return new UserObj{Parse.Query(Parse.User).userID};
		}
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
		return Parse.Query(Parse.User).hasEvent;
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
		Parse.Query(userID).event;
	}
	
	/*
	/Return if user is new
	*/ 
	function isNewUser(userID){
		if(Parse.Query(Parse.User)!=null){
			return false;
		}
		return true;
	}
	
	/*
	/add user to DB
	*/ 
	function addNewUser(){
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
