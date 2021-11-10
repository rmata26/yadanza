/*!
* Start Bootstrap - Landing Page v6.0.3 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var cont = document.getElementById("container");
  
function changeSizeByBtn(size) {

    // Set value of the parameter as fontSize
    cont.style.fontSize = size;
    $(".fontplus").css("fontSize", size);
     
}

function changeSizeBySlider(size) {
    size = document.getElementById("slider").value;
    config= document.getElementsByClassName("configuration");
    // Set slider value as fontSize
    cont.style.fontSize = size;
    $("body").css("fontSize", parseInt(config));
    config.css("fontSize", parseInt(config));
}
 
function playAudio(){
    var audioElement=$("#audio_player");
    audioElement[0].play();

}

$(function() {
	$("#feedback-tab").click(function() {
		$("#feedback-form").toggle("slide");
	});

	$("#feedback-form form").on('submit', function(event) {
		var $form = $(this);
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function() {
				$("#feedback-form").toggle("slide").find("textarea").val('');
			}
		});
		event.preventDefault();
	});
});


$(".float-contraste").click(function() {
	$("body").css("background-color","black");
	$("body").css("color","yellow");
	$("section").removeClass("bg-light");
	$("nav").css("background-color","black");
	$("a").css("color","yellow");
	$("div").css("color","yellow");
	$("p").css("color","yellow");
	$("footer").removeClass("bg-light");
	$("button").css("background-color","black");
	$("button").css("color","yellow");
});


var grayscale = 0;
var invert = 0;
var img = document.getElementsByName("_imagePage");
var labels = document.getElementsByTagName("LABEL");
var grayP = labels[0].nextElementSibling;
var invertP = labels[1].nextElementSibling;

const onInvert = (e) => {
  invert = e.target.value * 0.1;
  adjustFilter();
};

const onGrayscale = (e) => {
  alert("asd");
  
};

const adjustFilter = () => {
	 
  for(var x=0; x < img.length; x++)   // comparison should be "<" not "<="
  {
 
	var filter = `grayscale(${grayscale}) invert(${invert})`;
	img[x].style.filter = filter;
	//grayP.innerText = Math.round(10 * grayscale) / 10;
	//invertP.innerText = Math.round(10 * invert) / 10;

 }
  
};

var ins = document.getElementsByTagName("input");
function grayscalepage() {   
	grayscale = 10 * 0.1;
  adjustFilter(); 

};
function contrastscalepage() {   
	invert = 10 * 0.1;
	adjustFilter(); 
  
  };

ins[1].addEventListener("change", onInvert);

