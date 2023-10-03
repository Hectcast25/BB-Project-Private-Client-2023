/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


  /*Script para Overlay image*/
  
//Overlay On buttons
function on() {
 document.getElementById("overlay").style.display = "block";
}
function onone() {
 document.getElementById("overlayone").style.display = "block";
}
function ontwo() {
 document.getElementById("overlaytwo").style.display = "block";
}
function onthree() {
 document.getElementById("overlaythree").style.display = "block";
}
function onfour() {
 document.getElementById("overlayfour").style.display = "block";
}

//Overlay off buttons
function off() {
 document.getElementById("overlay").style.display = "none";
}
function offone() {
 document.getElementById("overlayone").style.display = "none";
}
function offtwo() {
 document.getElementById("overlaytwo").style.display = "none";
}
function offthree() {
 document.getElementById("overlaythree").style.display = "none";
}
function offour() {
 document.getElementById("overlayfour").style.display = "none";
}

//JQuery Boton img flip
$(document).ready(function(){
	$('.flip-card').click(function(){
  	$(this).toggleClass('hover');
  });
});

//Submenu button, show submenu and hide overlays
$(document).ready(function () {
        $("#botref, #botabre").click(function () {
        $("#dropmenu").hide();
         });
    });
    
    $(document).ready(function () {
        $("#backbtn, #backbtn2, #backbtn3, #backbtn4").click(function () {
        $("#dropmenu").show();
         });
    });
    
