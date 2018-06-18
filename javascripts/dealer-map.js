$(document).ready(function() {
// Nav scrolling
$(window).scroll(function () {
var scrollTop = $(window).scrollTop();
if ( scrollTop > 10 ) {
$('.slideMenu').addClass('scrolled');
} else {
$('.slideMenu').removeClass('scrolled');
}
});
// Ends Nav scrolling 

});

// all custom JS here //

			
			
// When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 9,

 scrollwheel: false,
                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(51.847290, 4.509401),  
                    center: new google.maps.LatLng(52.303473, 5.147295),  

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('dealer');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(51.847290, 4.509401),
                    map: map,
					icon: 'images/location.png',
                    title: 'Snazzy!'
                });
                  // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(52.303473, 5.147295),
                    map: map,
					icon: 'images/location.png',
                    title: 'Snazzy!'
                });
               
            }
			
			
		
