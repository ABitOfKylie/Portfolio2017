// Curious Agency, Freelancer and Personal Portfolio Template
// Contact Page
// contact-freelancer.html
// All codes rights reserved by Curious Agency, Freelancer and Personal Portfolio Template  


//After page loads h1, h2 and p tag opacity changes to 1.  

$(document).ready(function() {
    $("#contact > .contactintro > h1").css("opacity", "1");
    $("#contact > .contactintro > h2").css("opacity", "1");
    $("#contact > .contactintro > p").css("opacity", "1");
});

//While scrolling contact page contact address and contact form opacity changes to 1 and transforms a element to 1.  

$(window).on("scroll", function() {
    var a = $(window).scrollTop();
    var b = $("#contact > .contactintro > p").offset().top;
    // var c = $("#map").offset().top;
    var c = $("#contact > .contactform > .form").offset().top; // And add this.

    if (a >= b) {
        $("#contact > .contactform > .location > .address").css("transform", "scale(1)");
        $("#contact > .contactform > .location > .address > h1").css("opacity", "1");
        $("#contact > .contactform > .location > .address > h2").css("opacity", "1");
        $("#contact > .contactform > .location > .address > p").css("opacity", "1");
        $("#contact > .contactform > .location > .email").css("transform", "scale(1)");
        $("#contact > .contactform > .location > .email > h1").css("opacity", "1");
        $("#contact > .contactform > .location > .email > h2").css("opacity", "1");
        $("#contact > .contactform > .location > .email > p").css("opacity", "1");
        $("#contact > .contactform > .location > .ph").css("transform", "scale(1)");
        $("#contact > .contactform > .location > .ph > h1").css("opacity", "1");
        $("#contact > .contactform > .location > .ph > h2").css("opacity", "1");
        $("#contact > .contactform > .location > .ph > p").css("opacity", "1");
    }
    if (a >= c) {
        $("#contactport > h1:nth-child(1)").css("opacity", "1");
        $("#contactport > h1:nth-child(2)").css("opacity", "1");
    }
});
