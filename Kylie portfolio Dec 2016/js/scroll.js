

// Curious Agency, Freelancer and Personal Portfolio Template
// Scroll Effect
// All codes rights reserved by Curious Agency, Freelancer and Personal Portfolio Template  


$(document).ready(function(){
	$('html,body').animate({
  		'scrollTop' : 0 
	},10);
	$("#backtotop").on('click',function(){
		$("html,body").animate({
			scrollTop : 0
		},1200);
	});
});

/*$(window).on("load",function(){
	$('html,body').animate({
  		'scrollTop' : 0 
	},10);
});*/
