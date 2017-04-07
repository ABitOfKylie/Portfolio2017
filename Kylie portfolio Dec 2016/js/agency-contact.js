

// Curious Agency, Freelancer and Personal Portfolio Template
// agency contact page
// agency-contact.html
// All codes rights reserved by Curious Agency, Freelancer and Personal Portfolio Template  


$(document).ready(function(){
$(window).on("scroll",function(){
	var scrol = $(window).scrollTop();
	var cont = $("#contact").height();
	var contbox = $("#contactbox > .cbox2").offset().top;
if(scrol >= cont/3){
	$("#header").css({    // Changes the background color of menu when you scroll.
	'background' : '#101118',
	'boxShadow' : '1px 4px 10px -3px rgba(1,1,1,0.4)',
	'transition' : 'all 0.4s ease-out'
  });
}
else{
     $("#header").css({
	 'background' : 'none',
	 'boxShadow' : '1px 4px 10px -3px rgba(1,1,1,0)',
	 'transition' : 'all 0.2s ease'
  });
}
// Pop-up for contact address, email, timing and phone div.
if(scrol >= 120){
		$("#contactbox > .cbox1 > .address,.timing,.email,.phone").css("transform","scale(1)");
}
// Say Hi div fade-in.
if(scrol >= contbox/2){
 	$("#contactbox > .cbox2 > .contactform,.sayhi").css("opacity","1");
}
$("#contact > .contactimg").css({
	 'top': -scrol/2, 
});
    
// Fixed button at bottom right corner. Fade-in when scroll position is greater then 120.
if(scrol <= 120){
	$("#backtotop").css({"opacity":"0","cursor":"default"});
}
else{
		$("#backtotop").css({"opacity":"1","cursor":"pointer"});
	}	
});		
	$("#contact > .contactimg > .contacttext > h1,p").css('opacity','1');	 	 
});		

// Google Map.
// Set your office location.
// What you have to do is that just change .LatLng(22.7679, 78.8709) this code by your office address latitude and longitude.
// How to get your office latitude and longitude.
// Visit google.com/maps,
// Then search your place for example MG Road Guragon,
// Right-click on that location you will get some options,
// From them click-on what's here?, on-click you will get a pop-up at bottom of page that consist of latitude and longitude,
// Copy that and replace .LatLng(value,value) by your value.
function officemap(){
var mproperty = {
	 center : new google.maps.LatLng(22.7679, 78.8709),
	 mapType : google.maps.MapTypeId.ROADMAP,
	 zoom : 4
};
var mapbox = new google.maps.Map(document.querySelector("#contactbox > .cbox3"),mproperty); 

var marker = new google.maps.Marker({
		position : new google.maps.LatLng(22.7679, 78.8709),
});
marker.setMap(mapbox);
}
google.maps.event.addDomListener(window,"load",officemap);
