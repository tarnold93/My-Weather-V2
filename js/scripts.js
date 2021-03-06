// First, load jQuery (required)
// jQuery 2.2.2 loaded via `index.html`

// Second, load Semantic UI JS (required)
// @codekit-prepend "semantic.js";

// Third, Add to Homescreen (optional)
// @codekit-prepend "add-to-homescreen.js";

// Third, load any plugins (optional)
// @codekit-prepend "plugins.js";

// My Scripts

// Activate Tabs 
$('.menu .item').tab();

// Get Cheney Weather
$.simpleWeather({
    location: '99004',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#cheney .temp').text(weather.temp);
      $('#cheny .city').text(weather.city);
      $('#cheney i').addClass( 'icon-' + weather.code );
        
      // Get Forecast
      $('#c1 .day').text(weather.forecast[1].date);
      $('#c1 .temp').text(weather.forecast[1].high);
      $('#c1 i').addClass( 'icon-' + weather.forecast[1].code );    
        // Day Two
      $('#c2 .day').text(weather.forecast[2].date);
      $('#c2 .temp').text(weather.forecast[2].high);
      $('#c2 i').addClass( 'icon-' + weather.forecast[2].code );
        
        // Day Three
      $('#c3 .day').text(weather.forecast[3].date);
      $('#c3 .temp').text(weather.forecast[3].high);
      $('#c3 i').addClass( 'icon-' + weather.forecast[3].code );
    
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });

// Get Spokane Weather
$.simpleWeather({
    location: '99208',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#spokane .temp').text(weather.temp);
      $('#spokane .city').text(weather.city);
      $('#spokane i').addClass( 'icon-' + weather.code );
        
      // Get Forecast
        // Day One
      $('#s1 .day').text(weather.forecast[1].date);
      $('#s1 .temp').text(weather.forecast[1].high);
      $('#s1 i').addClass( 'icon-' + weather.forecast[1].code );
    
        // Day Two
      $('#s2 .day').text(weather.forecast[2].date);
      $('#s2 .temp').text(weather.forecast[2].high);
      $('#s2 i').addClass( 'icon-' + weather.forecast[2].code );
        
        // Day Three
      $('#s3 .day').text(weather.forecast[3].date);
      $('#s3 .temp').text(weather.forecast[3].high);
      $('#s3 i').addClass( 'icon-' + weather.forecast[3].code );
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });

// Geolocation Weather
if ('geolocation' in navigator) {
  $('.geo button').show(); 
} 
else {
  $('.geo button').hide();
  $('.geo').prepend('<p>Geolocation not supported</p>');
}

$('.geo button').click( function() {
  $('button').text("Redo Locate");
  //load weather using your lat/lng coordinates
  navigator.geolocation.getCurrentPosition(function(position) {
    getWeather(position.coords.latitude+','+position.coords.longitude); 
  }); 
});
                                    
var getWeather = function(location) {
  $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#geo .temp').text(weather.temp);
      $('#geo .city').text(weather.city);
      $('#geo i').addClass( 'icon-' + weather.code );
        
      // Get Forecast
        // Day One
      $('#g1 .day').text(weather.forecast[1].date);
      $('#g1 .temp').text(weather.forecast[1].high);
      $('#g1 i').addClass( 'icon-' + weather.forecast[1].code );
    
        // Day Two
      $('#g2 .day').text(weather.forecast[2].date);
      $('#g2 .temp').text(weather.forecast[2].high);
      $('#g2 i').addClass( 'icon-' + weather.forecast[2].code );
        
        // Day Three
      $('#g3 .day').text(weather.forecast[3].date);
      $('#g3 .temp').text(weather.forecast[3].high);
      $('#g3 i').addClass( 'icon-' + weather.forecast[3].code );
    
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
};