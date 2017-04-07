

// Curious Agency, Freelancer and Personal Portfolio Template
// 4 column portfolio
// index-freelancer4col.html
// All codes rights reserved by Curious Agency, Freelancer and Personal Portfolio Template  

$(document).ready(function(){

	$("#indexabout > .aboutintro > h1").css("opacity","1");
	$("#indexabout > .aboutintro > h2").css("opacity","1");
	$("#indexabout > .aboutintro > p").css("opacity","1");

// Portfolio filter menu, that filters and arrange according to menu category. 

	$("#portfolio > .portmenu > ul > li").on('click',function(){
		$("#portfolio > .portmenu > ul").find("li.act").removeClass("act");
		$(this).addClass("act");
	});
	$("#portfolio > .portmenu > ul > li").filter("li.all").on('click',function(){
		$("#portfolio > .foliobox4col > .folio1,.folio2,.folio3,.folio4,.folio5,.folio6,.folio7,.folio8,.folio9,.folio10,.folio11,.folio12").show(500);
	});	
	$("#portfolio > .portmenu > ul > li").filter("li.designing").on('click',function(){
		$("#portfolio > .foliobox4col > .folio3,.folio4,.folio6,.folio7,.folio10").hide(500);
		$("#portfolio > .foliobox4col > .folio1,.folio2,.folio5,.folio8,.folio9,.folio11,.folio12").show(500);
	});
	$("#portfolio > .portmenu > ul > li").filter("li.develop").on('click',function(){
		$("#portfolio > .foliobox4col > .folio1,.folio2,.folio5,.folio8,.folio9,.folio11,.folio12").hide(500);
		$("#portfolio > .foliobox4col > .folio3,.folio4,.folio6,.folio7,.folio10").show(500);
	});
	$("#portfolio > .portmenu > ul > li").filter("li.brand").on('click',function(){
		$("#portfolio > .foliobox4col > .folio3,.folio6,.folio7,.folio10").hide(500);
		$("#portfolio > .foliobox4col > .folio1,.folio2,.folio4,.folio5,.folio8,.folio9,.folio11,.folio12").show(500);
	});
	$("#portfolio > .portmenu > ul > li").filter("li.photo").on('click',function(){
		$("#portfolio > .foliobox4col > .folio2,.folio5,.folio6,.folio9,.folio11,.folio12").hide(500);
		$("#portfolio > .foliobox4col > .folio1,.folio3,.folio4,.folio7,.folio8,.folio10").show(500);
	});
});

// Portfolio Image Pop-up. 

$(window).on("scroll",function(){
	var a = $(window).scrollTop();
	var b = $("#portfolio > .portcontent").offset().top;
	var c = $("#indexabout > .aboutintro > p").offset().top;
	
	if(a >= b){
		$("#portfolio > .foliobox4col > .folio1").css("transform","scale(1)");
		$("#portfolio > .foliobox4col > .folio2").css("transform","scale(1)");
   		$("#portfolio > .foliobox4col > .folio3").css("transform","scale(1)");
		$("#portfolio > .foliobox4col > .folio4").css("transform","scale(1)");
		$("#portfolio > .foliobox4col > .folio5").css("transform","scale(1)");
		$("#portfolio > .foliobox4col > .folio6").css("transform","scale(1)");
   		$("#portfolio > .foliobox4col > .folio7").css("transform","scale(1)");
		$("#portfolio > .foliobox4col > .folio8").css("transform","scale(1)");
		$("#portfolio > .foliobox4col > .folio9").css("transform","scale(1)");
		$("#portfolio > .foliobox4col > .folio10").css("transform","scale(1)");
   		$("#portfolio > .foliobox4col > .folio11").css("transform","scale(1)");
		$("#portfolio > .foliobox4col > .folio12").css("transform","scale(1)");
	}
	if(a >= c){
		$("#portfolio > .portcontent > h1").css("opacity","1");
		$("#portfolio > .portcontent > p").css("opacity","1");
	}		
});
