    /*
    Overview

In this assignment, you'll create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.
Setup

We'll leave that up to you -- however you like. Just make sure you're using Firebase to store data, GitHub to backup your project, and Heroku to host your finished site.
Instructions

Make sure that your app suits this basic spec:
When adding trains, administrators should be able to submit the following:
Train Name
Destination
First Train Time -- in military time
Frequency -- in minutes
Code this app to calculate when the next train will arrive; this should be relative to the current time.
Users from many different machines must be able to view same train times.
Styling and theme are completely up to you. Get Creative!


Objective:This is an app that you basically have inputs about trains (objects), and then you simply pool them back.... 
Audience:Zach 

State 1

You will be able to enter an object with 4 elements to the database. 

State 2

The elements that are in the data base will be presented. 



*/
// get the document ready for action. This is going to cover the entire "logic"


    $( document ).ready(function() {

//Create a variable to reference the database

    	var database = firebase.database();

    	 console.log(database);



    console.log( "ready!" );

// ----------------------------------------------------------------------------

// State 1: Here I want to capture the user in put, I can start with humble beginings

//---------------------------------------------------------------------------------


//Listen to the submit button click
//capture the user train name input




//Once the button is clicked, you need to push that input to the database.   
$("#submit-train").on("click", function() {

    event.preventDefault();

var trainName = $("#train-name").val().trim();
var destination = $("#destination").val().trim();
var frequency = $("#frequency").val().trim();
var firstTrainTime = $("#first-train-time").val().trim();

console.log(trainName);
console.log(destination);
console.log(frequency);
console.log(firstTrainTime);



    database.ref("/trains").push({
      
      trainName: trainName,
      destination: destination,
      frequency: frequency,
      firstTrainTime: firstTrainTime,
      
      dateAdded: firebase.database.ServerValue.TIMESTAMP

      
    });




});

//Firabase watcher + initial loader
database.ref("/trains").on("child_added", function(snapshot) {

$("#full_train_list").append("<p>"+snapshot.val().trainName+"</p>");


});




});