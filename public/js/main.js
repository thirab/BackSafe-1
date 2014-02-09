
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

	// The Application
	// ---------------

	  var ManageAppView = Parse.View.extend({

	    events: {
	      "click #submit-btn":  "createEvent"
	    },

		initialize: function() 
	      docu.event = new Event();
	    },
	    
	    // If you hit return in the main input field, create new Todo model
	    createEvent: function(e) {

			var event = new Event();
			event.set("destination", this.$("#dest").value());
			event.save(null, {
			  success: function(object) {
			    console.log("Success");
			  },
			  error: function (model, error) {
			    console.log("Error");
			  }
			});

	      console.log("Event " + event.destination);
	    }
	  });

	  // The main view for the app
	  var AppView = Parse.View.extend({
	    // Instead of generating a new element, bind to the existing skeleton of
	    // the App already present in the HTML.
	    el: $("#backsafeapp"),

	    initialize: function() {
	      this.render();
	    },

	    render: function() {
	      new ManageAppView();
	    }
	  });

});
