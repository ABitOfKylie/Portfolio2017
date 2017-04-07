

// Curious Agency, Freelancer and Personal Portfolio Template
// Case Study
// casestudy-freelancer.html
// All codes rights reserved by Curious Agency, Freelancer and Personal Portfolio Template  

//After page loads h1, h2 and p tag opacity changes to 1.  

$(document).ready(function(){
	$("#casestudy > .casestudyintro > h1").css("opacity","1");
	$("#casestudy > .casestudyintro > h2").css("opacity","1");
	$("#casestudy > .casestudyintro > p").css("opacity","1");
});

//While scrolling casestudy images and content opacity changes to 1.  

$(window).on("scroll",function(){
	var a = $(window).scrollTop();
	var b = $("#casestudy > .casestudyintro").offset().top;
	var c = $("#casestudy > .challange > .detail").offset().top;
	var d = $("#casestudy > .projdt > .detail > p").offset().top-200;
	if(a >= b){
		$("#casestudy > .challange > .projimage > .img1").css("opacity","1");
		$("#casestudy > .challange > .projimage > .img2").css("opacity","1");
		$("#casestudy > .challange > .detail").css("opacity","1");
	}
	if(a >= c){
		$("#casestudy > .achieved > .projimage > .img1").css("opacity","1");
		$("#casestudy > .achieved > .projimage > .img2").css("opacity","1");
		$("#casestudy > .achieved > .result").css("opacity","1");
	}
	if(a >= d){
		$("#casestudyport > h1:nth-child(1)").css("opacity","1");
		$("#casestudyport > h1:nth-child(2)").css("opacity","1");
	}
});
