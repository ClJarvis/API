'use strict';

//What is the phase of the moon tonight?

// function moonPhase() {
// 	$.ajax({
// 		url:"http://api.wunderground.com/api/adc9a3f4c89a8f45/astronomy/q/37211.json",
// 		dataType:"jsonp",
// 		success: function(data){
// 		console.log(data);
// 		console.log("the moon phase is ", data.moon_phase.phaseofMoon);
// 	      }
// 	})
// }
// moonPhase();


// //In what year was the record low temperature for today's date?  use almanac
// function recordLow() {
// 	$.ajax({
// 		url:"http://api.wunderground.com/api/adc9a3f4c89a8f45/almanac/q/37211.json",
// 		dataType:"jsonp",
// 		success: function(data){
// 		console.log(data);
// 		console.log(data.almanac.temp_low.record.F);
// 	}

// 	})
// }
// recordLow();


//ASSIGNMENT:  write a function that pulls out the current temp after you add a zipcode to a form and hit submit.
// It should then display the results in the html body. Apply some nice CSS.
//make form see screenshot! get api working 1st then figure how to input to form.

// function currentDate() {
// 	$.ajax({
// 		url:"http://api.wunderground.com/api/adc9a3f4c89a8f45/conditions/q/37211.json",
// 		dataType:"jsonp",
// 		success:function(data){
// 			console.log(data);
// 			console.log(data.current_observation.local_time_rfc822);
// 		}
// 	})

// }

// currentDate();

// function currentLocation() {
// 	$.ajax({
// 		url:"http://api.wunderground.com/api/adc9a3f4c89a8f45/conditions/q/37211.json",
// 		dataType:"jsonp",
// 		success:function(data){
// 			console.log(data);
// 			console.log("For Zip code: ", data.current_observation.display_location.zip);
// 		}
// 	})

// }

// currentLocation();




function currentTemp() {
	$.ajax({
		url:"http://api.wunderground.com/api/adc9a3f4c89a8f45/conditions/q/37211.json",
		dataType:"jsonp",
		success:function(data){
			console.log(data);
			console.log(data.current_observation.temp_f, "degrees F"); //data.current_observation.temp_f *//
		}
	})

}

currentTemp();


// var $zipButton = $ ( this ),
// 	term = $zipButton.find("input[currentTemp]").val(),
// 	url = $zipButton.attr("action");

// var posting = $.post( (currentTemp ));

// posting.done(function (data) {
// 	var content = $ ( data ).find ("#content");
// 	$("#results").empty().append(content);
// });

// var zipButton = $("#zipbuttton");

//  zipButton.click(function( ){
//  js_button.css("background-color", "blue");


//  js_button.append("#currentTemp");
// });

$( "#zipButton" ).mouseleave(function(data) {
$( "#currentTemp" ).mouseleave();
$("#currentDate").after("date<p>");
$("#zipCode").before("For zipcode:");
$("#tempFar").after("data.current_observation.temp_f,");

});
console.log("testbutton");



//  zipButton.click = function () {
// 	currentTemp.classList.toggle('hide');
// currentTemp.innerHTML = tempToDisplay.join("<br/>");
// }

