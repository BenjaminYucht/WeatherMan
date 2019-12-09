var request =require('request');
var fs = require('fs');
var tempConversion = require('./tempconversion');
var tempOps = new tempConversion();



function weathergetter() {
this.getweatherbyzip= function (zipcode) {
    request(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&APPID=91f3a4b4a9143c1abbb5945b5e1a46a8`, function (error, response, body) {

       var weatherobj =JSON.parse(body);
       var tempInKelv =weatherobj['main']['temp'];
       var weatherdescription= weatherobj['weather'][0]['description'];
       var location = weatherobj['name'];

       var tempInFahr = tempOps.convertKelvinToFahr(tempInKelv);
        console.log("The current weather is", weatherdescription+". The current temperature is",tempInFahr,`Fahrenheit. And the location you specified is ${location}`);



    })
}
}

module.exports= weathergetter;