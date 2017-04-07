

// Curious Agency, Freelancer and Personal Portfolio Template
// About Page
// about-agency.html - about page
// All codes rights reserved by Curious Agency, Freelancer and Personal Portfolio Template  

$(document).ready(function(){
	$(window).on("scroll",function(){
	var scrol = $(window).scrollTop();
	var hrabt = $("#heroabout").height();
	var abt = $(".whoandwhat").offset().top;
	var whoandwhat = $(".whoandwhat").offset().top;
	var team = $("#team > .member > .mem3 > .icons").offset().top;

	// Changes the background color of menu when you scroll.
	if(scrol >= hrabt/3){
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
$("#heroabout > .heroaboutimg").css({
	 'top': -scrol/2, 
});
	 
	//Who we are and what we do or quote div fade-in on about page. 
	 
	if(scrol >= abt/2){
		$("#about > .whoandwhat > .who").css("opacity","1");
   		$("#about > .whoandwhat > .what").css("opacity","1");
   		$("#about > .whoandwhat > .quote").css("opacity","1");
	}
	if(scrol >= whoandwhat){
   		$("#about > .strategie > .planning").css("opacity","1");
   		$("#about > .strategie > .designing").css("opacity","1");
   		$("#about > .strategie > .developing").css("opacity","1");
	}

	if(scrol >= team/2){
	   $("#clients > .clientslogo").css("opacity","1");   
	}
	 
	// Fixed button at bottom right corner. Fade-in when scroll position is greater then 120.
	if(scrol <= 120){  
		$("#backtotop").css({"opacity":"0","cursor":"default"});
	}
	else{
		$("#backtotop").css({"opacity":"1","cursor":"pointer"});
	}
});		
	$("#heroabout > .heroaboutimg > .abouttext > h1,p").css('opacity','1');	 	 
});		
