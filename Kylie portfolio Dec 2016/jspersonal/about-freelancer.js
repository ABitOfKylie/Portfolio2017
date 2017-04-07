

// Curious Agency, Freelancer and Personal Portfolio Template
// About Page
// about-freelancer.html
// All codes rights reserved by Curious Agency, Freelancer and Personal Portfolio Template  

//After page loads h1, h2 and p tag opacity changes to 1.  
$(document).ready(function(){
	// $("#about > .aboutintro > h1").css("opacity","1");
	$("#about > .aboutintro > h2").css("opacity","1");
	$("#about > .aboutintro > p").css("opacity","1");
});

//While scrolling service page services and client testimonial opacity changes to 1.  

$(window).on("scroll",function(){
		var a = $(window).scrollTop();
		var b = $("#about > .aboutintro > h2").offset().top;
		var c = $(".servbox > .ser3").offset().top;
		// var d = $("#testimonial > .testimonialbox > .tbox3").offset().top;
	if(a >= b){
		$(".servbox > .ser1").css("opacity","1");
		$(".servbox > .ser2").css("opacity","1");
		$(".servbox > .ser3").css("opacity","1");
		// $("#service > .servbox > .ser4").css("opacity","1");
		// $("#service > .servbox > .ser5").css("opacity","1");
		// $("#service > .servbox > .ser6").css("opacity","1");
	}
	// if(a >= c){
	// 	$("#testimonial > .testimonialbox > .tbox1").css("opacity","1");
	// 	$("#testimonial > .testimonialbox > .tbox2").css("opacity","1");
	// 	$("#testimonial > .testimonialbox > .tbox3").css("opacity","1");
	// }
	if(a >= c){
		$("#aboutcont > h1:nth-child(1)").css("opacity","1");
		$("#aboutcont > h1:nth-child(2)").css("opacity","1");
	}
});






// $(document).ready(function(){
// 	$("#about > .aboutintro > h1").css("opacity","1");
// 	$("#about > .aboutintro > h2").css("opacity","1");
// 	$("#about > .aboutintro > p").css("opacity","1");
// });

// //While scrolling about page client logos and content opacity changes to 1.  

// $(window).on("scroll",function(){
// 	var a = $(window).scrollTop();
// 	var b = $("#about > .pics > p").offset().top;
// 	var c = $("#about > .pics > .pic1").offset().top;
// 	// var d = $("#clients > .clientbox > .cl4").offset().top;
// 	var d = $("#service > .servbox > .ser6").offset().top;

// 	if(a >= b){
// 		$("#clients > .clientbox > h1").css("opacity","1");
// 		$("#clients > .clientbox > p").css("opacity","1");
// 	}
// 	if(a >= c){
// 		$("#clients > .clientbox > .cl1").css("opacity","1");
// 		$("#clients > .clientbox > .cl2").css("opacity","1");
// 		$("#clients > .clientbox > .cl3").css("opacity","1");
// 		$("#clients > .clientbox > .cl4").css("opacity","1");
// 		$("#clients > .clientbox > .cl5").css("opacity","1");
// 		$("#clients > .clientbox > .cl6").css("opacity","1");
// 		$("#clients > .clientbox > .cl7").css("opacity","1");
// 		$("#clients > .clientbox > .cl8").css("opacity","1");
// 	}
// 	if(a >= d){
// 		$("#aboutcont > h1:nth-child(1)").css("opacity","1");
// 		$("#aboutcont > h1:nth-child(2)").css("opacity","1");
// 	}
// });
