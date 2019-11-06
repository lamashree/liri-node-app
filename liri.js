//this is referencing the .env file //
require("dotenv").config();
//this i referencing keys.js//
var keys = require("./keys.js");
//this is required to read or write file//
var fs = require("fs");
// this is requiring axios and gobally defining axios//
var axios = require("axios");
var Spotify = require('node-spotify-api');
var moment = require('moment');

var input = process.argv[2];
var input1 = process.argv.slice(3).join(" ");

function spotify() {
    var input = process.argv[2];
    var songs = process.argv.slice(3).join(" ");

    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: songs }, function (err, data) {

        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var dataResult = [
            "Name:  " + data.tracks.items[0].album.artists[0].name,
            "URL for song:  " + data.tracks.items[0].album.artists[0].uri,
            "type:  " + data.tracks.items[0].album.artists[0].type,
            "album:  " + data.tracks.items[0].album.name,
            "Total tracks:  " + data.tracks.items[0].album.total_tracks
        ]
        console.log(dataResult);

        fs.appendFile("log.txt", dataResult, function (err) {
            if (err) throw err;
            console.log(dataResult);
        });

    });

}

function movieInfo() {
    var input = process.argv[2];
    var movieName = process.argv.slice(3).join(" ");

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(function (movieResponse) {
        // console.log(movieResponse.data);
        var resData = [
            "Movie Title:  " + movieResponse.data.Title,
            "Released Year:  " + movieResponse.data.Released,
            "Rating:  " + movieResponse.data.imdbRating,
            "Rotten Tomatoes Rating:  " + movieResponse.data.Ratings[1].Value,
            "Produced country:  " + movieResponse.data.Country,
            "Language:  " + movieResponse.data.Language,
            "Plot:  " + movieResponse.data.Plot,
            "Actors:  " + movieResponse.data.Actors,
        ]
        console.log(resData);

        fs.appendFile("log.txt", resData, function (err) {
            if (err) throw err;
            console.log(resData);
        });

    })

}

function bandInTown() {
    var input = process.argv[2];
    var artist = process.argv.slice(3).join(" ");
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    console.log(queryURL);
    axios.get(queryURL).then(function (response) {
        // console.log(response.data[0]);
        // var date= response.data[0].datetime
        // console.log(date.format("MM/DD/YYYY"))
        var date = response.data[0].datetime;
        date = moment(date).format("MM/DD/YYYY");
        showData = [
            "Venue Name:  " + response.data[0].venue.name,
            "Venue location:  " + response.data[0].venue.city,
            "Event data: " + response.data[0].datetime,
            "Date of Event: " + date
            
        ]
        console.log(showData);
        fs.appendFile("log.txt", showData, function(err) {
            if (err) throw err;
            console.log(showData );
          });

    })
}
function doWhatInfo() {
    var input = process.argv[2];
console.log("this is working");-it
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var output = data.split(",");
        for (var i = 0; i < output.length; i++) {
            console.log(output[i]);
        }
    });
};

switch (input) {
    case "concert-this":
        bandInTown();
        break;
    case "spotify-this-song":
        spotify();
        break;
    case "movie-this":
        movieInfo();
        break;
    case "do-what-it-says":
        doWhatInfo();
        break;

}

fs.writeFile("log.txt", "this is funtion",function(err){
    if (err){
        return console.log(err)
    }
    console.log("log.txt is updated");
})

