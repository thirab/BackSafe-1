function after_facebook() {
	var userID=getUserID(); 
	var username=getUserName();
	var userObj=getUserObj();
	var hasPost=hasEvent();
	var postObj=getUserEvent(userID);
	var friends=myFriends();
	var friendsMissing=missingFriends();;
	
	
  Parse.initialize("K809xYpHgzM7reOEW2osYc6Utzqz33KkBN44daoR",
                   "jLs4QguNTMYHxHaBfOtw1U00g0xmn5MS6KDCnXJc");

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
	
	var UserObj = Parse.Object.extend("Users",{
		defaults: {
			id : "facebookID",
			name : "name",
			safe : "isSafe",
			event : "event"
			}
	});
	
	function setUp(){
		$("#currentTrip").text("My current Trip");
		$("#returnTime").text("2 am");
	}
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
			//return Parse.Query(userID);
		}else{
			
		}
	}else{
	//TODO
	Parse.FacebookUtils.logIn("TODO this is the permissions we want");
	}
	//if the db has the userid in it, return the userobject otherwise create a new userobject
	}
	/*
	//Find the event of the user if they have one
	*/
	function checkMyEvent(){
	//todo
		//userObj.event;
		
	}
	
	/*
	/Return if a user has posted an event
	*/
	function hasEvent(){
		//return Parse.Query(Parse.User).hasEvent;
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
		//Parse.Query(userID).event;
	}
	
	/*
	/Return if user is new
	*/ 
	function isNewUser(userID){
		// if(Parse.Query(Parse.User)!=null){
// 			return false;
// 		}
		return true;
	}
	
	/*
	/add user to DB
	*/ 
	function addNewUser(){
		user = new UserObj({
			id:userID,
			name:userName,
			hasEvent:false,
			event:null,
			isSafe:true
			
		});
	}
	
	function backSafe(){
	//TODO 
	}

	
	$("#eventForm").on("submit", function(e) {
		e.preventDefault();

		console.log("Handling the submit");
		//add error handling here
		//gather the form data

		var event = new Event();
		event.set("destination", $("#dest").val());
		event.set("expectedBack", $("#back").val());
		event.set("userDescription", $("#wearing").val());
		event.set("travelingWith", $("#with").val());
		event.set("meetingWho",$("#meeting").val());


		event.save(null, {
			success:function() {
				console.log("Success");
				console.log(event.get("destination"));
			},
			error:function(e) {
				console.log(e);
			}
		});
		//location.reload();
	});
	setUp();
	
}
jQuery(document).ready(function() {

  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_UK/all.js', function(){
    FB.init({
      appId: '692151217495840',
    });     
    //$('#loginbutton,#feedbutton').removeAttr('disabled');
    //FB.getLoginStatus(updateStatusCallback);
    after_facebook();
  });
});
