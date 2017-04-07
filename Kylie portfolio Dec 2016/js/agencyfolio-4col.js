

// Curious Agency, Freelancer and Personal Portfolio Template
// agency portfolio 4 column
// agencyfolio-4col.html
// All codes rights reserved by Curious Agency, Freelancer and Personal Portfolio Template  


$(document).ready(function(){
	$(window).on("scroll",function(){
		var scrol = $(window).scrollTop();
		var hrport = $("#heroportfolio").height();
		var protmenu = $("#portfolio > h1").offset().top;

	// Changes the background color of menu when you scroll.	

	if(scrol >= hrport/3){
		$("#header").css({  
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

// Portfolio pop-up.
	if(scrol>= protmenu){
	
		$("#portfolio > .foliobox4col > .folio1,.folio2,.folio3,.folio4,.folio5,.folio6,.folio7,.folio8,.folio9,.folio10,.folio11,.folio12").css("transform","scale(1)");
	}
	
$("#heroportfolio > .heroportfolioimg").css({
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
	$("#heroportfolio > .heroportfolioimg > .portfoliotext > h1,p").css('opacity','1');	 	 
});		

// Portfolio filter menu, that filters and arrange according to menu category. 

$(document).ready(function(){
	$("#portfolio > .portmenu > ul > li").on("click",function(){
		$("#portfolio > .portmenu > ul").find("li.act").removeClass("act");
		$(this).addClass("act");
	});
	$("#portfolio > .portmenu > ul > li").filter("li.all").on("click",function(){
		$("#portfolio > .foliobox4col > .folio1,.folio2,.folio3,.folio4,.folio5,.folio6,.folio7,.folio8,.folio9,.folio10,.folio11,.folio12").show(500);
	});
	$("#portfolio > .portmenu > ul > li").filter("li.design").on("click",function(){
		$("#portfolio > .foliobox4col > .folio2,.folio6,.folio7,.folio9,.folio10").hide(500);
		$("#portfolio > .foliobox4col > .folio1,.folio3,.folio4,.folio5,.folio8,.folio11,.folio12").show(500);
	});
	$("#portfolio > .portmenu > ul > li").filter("li.develop").on("click",function(){
		$("#portfolio > .foliobox4col > .folio1,.folio3,.folio4,.folio5,.folio8,.folio12").hide(500);
		$("#portfolio > .foliobox4col > .folio2,.folio6,.folio7,.folio9,.folio10,.folio11").show(500);
	});
	$("#portfolio > .portmenu > ul > li").filter("li.brand").on("click",function(){
		$("#portfolio > .foliobox4col > .folio1,.folio2,.folio3,.folio6,.folio7,.folio10,.folio11.folio12").hide(500);
		$("#portfolio > .foliobox4col > .folio4,.folio5,.folio8,.folio9").show(500);
	});	
	$("#portfolio > .portmenu > ul > li").filter("li.photo").on("click",function(){
		$("#portfolio > .foliobox4col > .folio2,.folio4,.folio6,.folio8,.folio9,.folio10,.folio11,.folio12").hide(500);
		$("#portfolio > .foliobox4col > .folio1,.folio3,.folio5,.folio7").show(500);
	});		
});
