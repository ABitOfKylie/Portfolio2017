

// Curious Agency, Freelancer and Personal Portfolio Template
// Contact Page - contact form
// contact-freelancer.html
// All codes rights reserved by Curious Agency, Freelancer and Personal Portfolio Template  

//Validating and sending Contact Form Data to PHP file using jQuery and AJAX.  

$(document).ready(function(){
	$("input.submit").prop("disabled",true);
	$(".submit").css("opacity",'0');
	$(".submit").css("cursor",'default');
	$("input,textarea").change(function(){
	var name = $("input.name").val();
	var email = $("input.email").val();
	var phone = $("input.phnum").val();
	var message = $("textarea.message").val(); 

	var emptn = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
	var eml = emptn.test(email);
	
	if(!(name == "" || email == "" || phone == "" || message == "")){
   	if(eml){
    	$("input.submit").prop("disabled",false);
    	$(".submit").css("opacity",'1'); 
		$(".submit").css("cursor",'pointer');
	}
  }
});

$("input.submit").on('click',function(){
   var name = $("input.name").val();
   var email = $("input.email").val();
   var phone = $("input.phnum").val();
   var message = $("textarea.message").val(); 

$.ajax({
		type:'POST',
		url:'php/personalform.php',
		data : {
        name : name,
        email : email,
        phone : phone,
        message : message                      
        },
		success:function(){
		console.log("success");
			}
		});
	});
});
