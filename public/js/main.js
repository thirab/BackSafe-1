
$(function() {

  Parse.$ = jQuery;

  // TASK 1: ENTER YOUR APPLICATION AND JAVASCRIPT KEYS HERE
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

	var event = new Event();
	event.set("destination", "home");
	event.save(null, {
	  success: function(object) {
	    console.log("Success");
	  },
	  error: function (model, error) {
	    console.log("Error");
	  }
	});

});
