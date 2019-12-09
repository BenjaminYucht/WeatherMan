#!/usr/bin/env node

var weathergetter=require('./weatherapi');
var zipchecker = require('./zipcodecheckerapi');
var zip =require('./zipcode');
var readline= require('readline-sync');
var fs = require('fs');

var userzip = new zip();
var ZipChecker =new zipchecker();
var Weathergetter=new weathergetter();



while(ZipChecker.iszip===false) {
     var userinput = readline.question('Whats your Zip code? ');
     if(userinput==='q'||userinput==='Q'){
         break;
     }
    ZipChecker.checkzip(userinput);

    if (ZipChecker.iszip) {

        userzip.zipcode = userinput;


    } else {
        console.log('no this isnt a zip code, try again')

    }
}

Weathergetter.getweatherbyzip(userzip.zipcode);











