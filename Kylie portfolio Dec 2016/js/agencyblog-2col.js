

// Curious Agency, Freelancer and Personal Portfolio Template
// 2-Column Blog Right Sidebar
// agencyblog-2col.html right sidebar
// All codes rights reserved by Curious Agency, Freelancer and Personal Portfolio Template  

$(document).ready(function(){
 	$(window).on("scroll",function(){
 		var scrol = $(window).scrollTop();
 		var blogpst = $("#blogpost").height();

// Changes the background color of menu when you scroll.
 	if(scrol >= blogpst/3){ 
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
$("#blogpost > .blogpostimg").css({
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
	$("#blogpost > .blogpostimg > .blogposttext > h1,p").css('opacity','1');	 	 
});		
