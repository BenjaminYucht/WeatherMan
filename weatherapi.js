var request =require('request');
var fs = require('fs');



function weathergetter() {
this.getweatherbyzip= function (zipcode) {
    request(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&APPID=91f3a4b4a9143c1abbb5945b5e1a46a8`, function (error, response, body) {

       var weatherobj =JSON.parse(body);
       var temp =weatherobj['main']['temp']
       var weatherdescription= weatherobj['weather'][0]['description']
       console.log('The current weather is: '+weatherdescription+'. The current temperature is: '+temp);



    })
}
}

module.exports= weathergetter;