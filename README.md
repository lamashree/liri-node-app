# liri-node-app
## Overview
In this assignment. we are making LIRI like iphone's SIRI. liri is a language interpretation and Recognation interface. liri is command line node app that takes in parameters and gives you back data. This **liri** node app will take different command line to generate result. user has to pass the following command line app to work. user can use **node liri.js** concert-this "artists name", node liri.js spotify-this-song "song name", node liri.js movie-this "movie name" and do-what=it-says to get information for search.


## App Command Lines
**Liri** take following different commands to get expected Result.
* node liri.js concert-this
* node liri.js spotify-this-song
* node liri.js movie-this
* node liri.js do-what-it-says

## spotify-this song 
* node liri.js "Name of the song" search will produced given output.
1. Artist(s)
2. Name of the song
3. Album
4.  Song preview spotify URL
 ## API-request
 This command line using the API request to spotify.
<img src="images/Image 11-2-19 at 10.43 PM.jpg" 
alt="spotify API request and response"/>

## Movie-this
Expected output:
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.<br/>
In thie "Movie-this", Axios is using to retrive the movie data using OMDB API. Here is images of API request and their result.

<img src="images/Image 11-2-19 at 10.47 PM.jpg" 
alt="Movie Response data"/>

## concert-this
Expected output:
* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")<br>
This is searching for band in Town API by artist name. The image i attached with this showed how i sent API request to the Band in town and their results is store in array.

<img src="images/Image 11-2-19 at 10.53 PM.jpg" 
alt="concert API call and Response data"/>


## do-what-it-says
If user didn't provide correct input for specific search the liri will read the log.txt file and will give you some short of result. The function is following.
<img src="images/Image 11-4-19 at 3.52 PM.jpg" 
alt="function for do what it says"/>

## function for log.txt 
In this function whatever user search for it will take the information and it will append those to log.txt.
<img src="images/Image 11-14-19 at 6.05 PM.jpg" 
alt="function for that will write in log.txt"/>
