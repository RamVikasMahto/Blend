$(document).ready(function() {
  $("#nav").mmenu({
	 "slidingSubmenus": false,
	 offCanvas	: {
		position	: "top",
		zposition	: "front"
	}
  }, {
	 // configuration
	 clone: true
  });
});