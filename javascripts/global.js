// all custom JS here //
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

$(document).ready(function(){
    $("#set_pos").click(function(){
    var scrol_pos = $("#small_div").scrollTop();
    $("#small_div").scrollTop(scrol_pos + 150);
  });
});

$(document).ready(function(){
        $('.forOne').click(function(event) {
          $(".calculate").addClass("fadeOutt");
          $(".over-b").addClass("fadeInn");
          $(".stepOne").addClass("fadeInn");
          $(".step").addClass("fadeInnn");
          $(".calculate").addClass("zero");
          $(".heading").addClass("fadeD");
          $(".quoteBox .step li:first-child").addClass("active");
          $(".stepOne").removeClass("zero");
          $(".over-b").removeClass("zero");
          $(".step").removeClass("zero");
          $(".heading").removeClass("zero");
		  

        }); 
        $('.forTwo').click(function(event) {
          $(".stepOne").removeClass("fadeInn");
          $(".stepOne").addClass("fadeD	");
          $(".stepOne").addClass("zero");
          $(".heading1").removeClass("zero");
          $(".heading1").addClass("fadeD");
          $(".stepTwo ").removeClass("zero");
          $(".stepTwo ").addClass("fadeInnn");
          $(".step").addClass("fadeInnn");
          $(".calculate").addClass("zero");
          $(".heading").addClass("zero");
          $(".quoteBox .step li:first-child").addClass("done");
          $(".quoteBox .step li:nth-child(2)").addClass("active");
		  
        }); 
        $('.forThree').click(function(event) {
          $(".stepTwo").removeClass("fadeInn");
          $(".stepTwo").addClass("zero");
          $(".heading1").removeClass("fadeD");
          $(".quoteBox .step li:nth-child(2)").addClass("done");
          $(".quoteBox .step li:nth-child(3)").addClass("active");
          $(".stepOne").addClass("zero");
          $(".stepThree").removeClass("zero");
          $(".stepThree").addClass("fadeInn");
          $(".heading1").addClass("zero");
          $(".heading2").removeClass("zero");
		  

        }); 
   });
      
   $(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.mobileMenu').fadeOut();
		} else {
			$('.mobileMenu').fadeIn();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
	
$('.bxslider').bxSlider({
  video: true,
  auto: true,
  fade:true,
  useCSS: false
});

    $(function () {
            $('#dg-container').carrousel({
                current: 0,
                autoplay: true,
                interval: 3000
            });
        });

(function($){
			$(window).load(function(){
				
				$("#content-1").mCustomScrollbar({
					theme:"minimal"
				});
				
			});
		})(jQuery);
		
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
                var mapElement = document.getElementById('map');

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
			
			
		
