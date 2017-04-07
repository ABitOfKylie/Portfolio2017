

// Curious Agency, Freelancer and Personal Portfolio Template
// Mobile Menu
// All codes rights reserved by Curious Agency, Freelancer and Personal Portfolio Template  

$(document).ready(function(){
	$("#mobilemenuheader > .burgermenu").on('click',function(){
		$("#mobilemenu").fadeIn(200);
	});
	$("#mobilemenu > .cross").on('click',function(){
		$("#mobilemenu").fadeOut(200);
	});
});
