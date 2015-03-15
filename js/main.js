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


//ASSIGNMENT:  write a function that pulls out the current temp after you add a zipcode to a form and hit submit.  It should then display the results in the html body. Apply some nice CSS.
//make form see screenshot! get api working 1st then figure how to input to form.


// function currentTemp() {
// 	$.ajax({
// 		url:"http://api.wunderground.com/api/adc9a3f4c89a8f45/conditions/q/37211.json",
// 		dataType:"jsonp",
// 		success:function(data){
// 			console.log(data);
// 			console.log("The current Temp is ", data.current_observation.temp_f);
// 		}
// 	})

// }
// currentTemp();
// var myButton = $("#mybuttton");

// myButton.click(function( ){
//   js_button.css("background-color", "lightblue");

//   js_button.append("something");
// });
