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