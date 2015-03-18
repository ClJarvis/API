'use strict';


var base_url = "http://api.wunderground.com/api/adc9a3f4c89a8f45/conditions/q/";


$.get("http://ipinfo.io", function (response) {
    // currentTemp(response.postal);
    console.log(response.postal);
    var userZip=response.postal;
    console.log(userZip);
    $.ajax({
    	url: base_url + userZip + ".json",
    	dataType:"jsonp",
    	success:function(data){
    		$("#currentDate").after(data.current_observation.local_time_rfc822);
		$("#zipCode").before("For zipcode: " + data.current_observation.display_location.zip );
		$("#tempFar").append(data.current_observation.temp_f + " degrees F " );
		$("#icon").append(data.current_observation.icon);
    // var response=$('#response.postal').val();

    	}
    })
 //


 }, "jsonp");

// $( "#zipButton" ).click(function(e) {
// 	e.preventDefault();
// 	getCurrentTemp();
// 	// getCurrentLocation();
// 	// getCurrentDate();

// });
