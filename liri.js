require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require('node-spotify-api');
fs.readFile("random.txt", "utf8", function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
        return console.log(error);
    }

    // We will then print the contents of data
    console.log(data);

    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");

    // We will then re-display the content as an array for later use.
    console.log(dataArr);

});
// spotify-this-song// 
var artist=" "
var songName = " "
var axios = require("axios");

var spotify = new Spotify(keys.spotify);

var queryURL = "https://api.spotify.com/v1/search?q=track:" + songName + "%20artist:" + artist + "&type=track&limit=10";
spotify.request(queryURL).then(function (data) {
    console.log(data);
})


//
