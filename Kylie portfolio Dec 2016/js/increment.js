


// Curious Agency, Freelancer and Personal Portfolio Template
// Increment Counter on index-agency.html page that increments your number of codes value, awards value and such more.
// You can update that by assigning your company data.
// index-agency.html
// All codes rights reserved by Curious Agency, Freelancer and Personal Portfolio Template  

"use strict";

function incr(){	

	var a = 0; var c = 0; var e = 0; var g = 0;

function project01(){
	var project1 = document.querySelector(".project1 > h1");
	a++;
	project1.innerHTML = a;
	if(a >= 764){
   		clearInterval(b);
    }
}
var b = setInterval(project01,16);
	  
function project02(){
	var project2 = document.querySelector(".project2 > h1");
	c++;
	project2.innerHTML = c;
	if(c >= 126){
   		clearInterval(d);
   }
}
var d = setInterval(project02,100);
	  
function project03(){
	var project3 = document.querySelector(".project3 > h1");
	e++;
	project3.innerHTML = e;
	if(e >= 18){
   		clearInterval(f);
    }
}
var f = setInterval(project03,300);
	  
function project04(){
	var project4 = document.querySelector(".project4 > h1");
	g++;
	project4.innerHTML = g;
	if(g >= 126){
    	 clearInterval(h);
   }
}
var h = setInterval(project04,100);  
}

function lod(){
	incr();
}
window.addEventListener("load",lod);

