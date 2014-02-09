$(document).ready(function() {
	
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
		
	});
	
});
