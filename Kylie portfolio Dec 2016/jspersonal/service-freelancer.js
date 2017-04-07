

// Curious Agency, Freelancer and Personal Portfolio Template
// Service Page
// service-freelancer.html
// All codes rights reserved by Curious Agency, Freelancer and Personal Portfolio Template  

//After page loads h1, h2 and p tag opacity changes to 1.  

$(document).ready(function(){
	$("#service > .serviceintro > h1").css("opacity","1");
	$("#service > .serviceintro > h2").css("opacity","1");
	$("#service > .serviceintro > p").css("opacity","1");
});

//While scrolling service page services and client testimonial opacity changes to 1.  

$(window).on("scroll",function(){
		var a = $(window).scrollTop();
		var b = $("#service > .serviceintro > h2").offset().top;
		var c = $("#service > .servbox > .ser9").offset().top;

		// var d = $("#testimonial > .testimonialbox > .tbox3").offset().top;
	if(a >= b){
		$("#service > .servbox > .ser1").css("opacity","1");
		$("#service > .servbox > .ser2").css("opacity","1");
		$("#service > .servbox > .ser3").css("opacity","1");
		$("#service > .servbox > .ser4").css("opacity","1");
		$("#service > .servbox > .ser5").css("opacity","1");
		$("#service > .servbox > .ser6").css("opacity","1");
		$("#service > .servbox > .ser7").css("opacity","1");
		$("#service > .servbox > .ser8").css("opacity","1");
		$("#service > .servbox > .ser9").css("opacity","1");
		// $("#service > .servbox > .ser10").css("opacity","1");
		// $("#service > .servbox > .ser11").css("opacity","1");

	}
	// if(a >= c){
	// 	$("#testimonial > .testimonialbox > .tbox1").css("opacity","1");
	// 	$("#testimonial > .testimonialbox > .tbox2").css("opacity","1");
	// 	$("#testimonial > .testimonialbox > .tbox3").css("opacity","1");
	// }
	if(a >= c){
		$("#servicecont > h1:nth-child(1)").css("opacity","1");
		$("#servicecont > h1:nth-child(2)").css("opacity","1");
	}
});
