require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require('node-spotify-api');
// });
// spotify-this-song// 
// var artist=" "
// var songName = " "
// var axios = require("axios");

var spotify = new Spotify(keys.spotify);
// console.log(keys.spotify)

spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {

    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log("Name: " + data.tracks.items[0].album.artists[0].name);
    console.log("URL for song: " + data.tracks.items[0].album.artists[0].uri);
    console.log("type: " + data.tracks.items[0].album.artists[0].type);

    console.log("album: " + data.tracks.items[0].album.name);
    console.log("Total tracks: " + data.tracks.items[0].album.total_tracks);


});



//movie-this//

// var movieName=""
// axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//   function(response) {

//   });