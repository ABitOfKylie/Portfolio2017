

// Curious Agency, Freelancer and Personal Portfolio Template
// agencyfolio - casestudy
// agencyfolio-casestudy.html
// All codes rights reserved by Curious Agency, Freelancer and Personal Portfolio Template  


$(document).ready(function(){
	$(window).on("scroll",function(){
		var scrol = $(window).scrollTop();
		var casesty = $("#casestudy").height();
		var ourchallng = $("#aboutproject > .visitproj > h2").offset().top;
		var prjimg = $("#aboutproject > .challange > .projimg").offset().top;
		var whatnd = $("#aboutproject > .challange > .whatneed").offset().top;

// Changes the background color of menu when you scroll.
	if(scrol >= casesty/3){
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

// Our Challange div fade-in  
	if(scrol >= ourchallng/2){
		$("#aboutproject > .challange > .ourchallange,.whatneed").css("opacity","1");		
	}

// What we achieved div fade-in 
	if(scrol >= prjimg){
		$("#aboutproject > .challange > .whatachieved > .achieve,.visitors").css("opacity","1");		
	}	

// Project images fade-in  
	if(scrol >= whatnd/2){
		$("#aboutproject > .challange > .projimg > .pr1,.pr2,.pr3,.pr4").css({"transform":"scale(1)"});		
	}
$("#casestudy > .casecontainer").css({
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
	$("#casestudy > .casecontainer > .casestudytext > h1,p").css('opacity','1');	 	 
});		
