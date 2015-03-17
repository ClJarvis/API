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
var base_url = "http://api.wunderground.com/api/adc9a3f4c89a8f45/conditions/q/";





// var zip_url = "http://api.wunderground.com/api/adc9a3f4c89a8f45/conditions/q/" +  userzip + ".json";


function getCurrentTemp() {
	var userzip=$('#userzip').val();
	console.log(userzip);
	$.ajax({
		url: base_url +  userzip + ".json",
		dataType:"jsonp",
		success:function(data){
				// .log(data);
			$("#currentDate").after(data.current_observation.local_time_rfc822);
			$("#zipCode").before("For zipcode: " + data.current_observation.display_location.zip );
			$("#tempFar").append(data.current_observation.temp_f + " degrees F " );
			$("#icon").append(data.current_observation.icon);
			// console.log(userzip, data.current_observation.temp_f); //data.current_observation.temp_f *//
		}
	})

}

// function getCurrentDate() {
// 	$.ajax({
// 		url: base_url +  userzip + ".json",
// 		dataType:"jsonp",
// 		success:function(data){
// 			console.log(data);
// 			// console.log(userzip, data.current_observation.local_time_rfc822);
// 			// console.log(data.current_observation.local_time_rfc822);
// 		}
// 	})

// }



// function getCurrentLocation() {
// 	$.ajax({
// 		url: base_url +  userzip + ".json",
// 		dataType:"jsonp",
// 		success:function(data){
// 			console.log(data);
// 			// console.log(userzip, data.current_observation.location.zip);
// 			// console.log("For Zip code: ", data.current_observation.display_location.zip);
// 		}
// 	})

// }





// var $zipButton = $ ( this ),
// 	term = $zipButton.find("input[currentTemp]").val(),
// 	url = $zipButton.attr("action");

//  var posting = $.post( (currentTemp ));

// posting.done(function (data) {
// 	var content = $ ( data ).find ("#content");
// 	$("#results").empty().append(content);
// });

// var zipButton = $("#zipbuttton");

//  zipButton.click(function( ){
//  js_button.css("background-color", "blue");


//  js_button.append("#currentTemp");
// });

$( "#zipButton" ).click(function(e) {
	e.preventDefault();
	getCurrentTemp();
	// getCurrentLocation();
	// getCurrentDate();

});


 // $("#content").append("Current Temperature in " + location + " is" + " " + temp_f + "<BR/>");
 //  $("#content").append(" where is my zip" + zipcode + "<BR>")


// console.log("testbutton");

// $(document).ready(function() {
//      $('div.poem-stanza').addClass('highlight');
// });

//  zipButton.click = function () {
// 	currentTemp.classList.toggle('hide');
// currentTemp.innerHTML = tempToDisplay.join("<br/>");
// }

