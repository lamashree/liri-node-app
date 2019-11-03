require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var Spotify = require('node-spotify-api');
// });
// spotify-this-song// 
// var artist=" "
// var songName = " "
// var axios = require("axios");
var input = process.argv[2];
var input1 = process.argv.slice(3).join(" ");

//concert-this//

function spotify() {
    var spotify = new Spotify(keys.spotify);

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

}

function movieInfo() {
    var movieName = " ";
    var queryUrl = "http://www.omdbapi.com/?t=" + "the godfather" + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(function (movieResponse) {
        // console.log(movieResponse.data);
        var resData = [
            "Movie Title: " + movieResponse.data.Title,
            "Released Year: " + movieResponse.data.Released,
            "Rating: " + movieResponse.data.imdbRating,
            "Rotten Tomatoes Rating: " + movieResponse.data.Ratings[1].Value,
            "Produced country: " + movieResponse.data.Country,
            "Language: " + movieResponse.data.Language,
            "Plot: " + movieResponse.data.Plot,
            "Actors: " + movieResponse.data.Actors,
        ]
        console.log(resData);

    })

}

function bandInTown(){
   var bandName = " "
// queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
var queryURL = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";

console.log(queryURL);
axios.get(queryURL).then(function (response) {
    console.log(response);
});
 
}




switch (input) {
    case "concert-this":
        bandInTown();
        break;
    case "spotify-this-song": -
        spotify();
        break;
    case "movie-this":
        movieInfo();
        break;
    case "do-what-it-says":
        doWhatInfo();
        break;

}