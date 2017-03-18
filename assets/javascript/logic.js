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


     console.log( "ready!" );

// ----------------------------------------------------------------------------

// State 1: Here I want to capture the user in put, I can start with humble beginings

//---------------------------------------------------------------------------------


//Listen to the submit button click
//capture the user train name input




//Once the button is clicked, you need to push that input to the database.   
$("#submit-train").on("click", function() {


// Don't refresh the damn page!!!!
    event.preventDefault();

  // This is where you capture the inputs  

var trainName = $("#train-name").val().trim();
var destination = $("#destination").val().trim();
var frequency = $("#frequency").val().trim();
var firstTrainTime = $("#first-train-time").val().trim();

// Log the 

//console.log(trainName);
//console.log(destination);
//console.log(frequency);
//console.log(firstTrainTime);



    database.ref("/trains").push({
      
      trainName: trainName,
      destination: destination,
      frequency: frequency,
      firstTrainTime: firstTrainTime,
      
      dateAdded: firebase.database.ServerValue.TIMESTAMP

      
    });



});




//Firabase watcher + initial loader
database.ref("/trains").on("value", function(snapshot) {


	// var test1 = snapshot.child("trainName").val();

	// console.log(test1);

	/*

var myTrainName = database.ref("/trains").child("trainName");

console.log(myTrainName);

var myDestination = snaphot.child("destination").val();

console.log(myDestination); */



//$("#full_train_list").append("<p>"+snapshot.val().trainName+"</p>");

//create a new line at the table
var nextArrival = 0;
var minutesAway = 0;
var myTrainName = snapshot.val();
var myDestination = snapshot.child("destination").val();
var myFrequency = snapshot.child("frequency").val();

console.log("here is myTrainName", myTrainName);


var trains = snapshot.val();

var test2 = Object.keys(trains);

console.log ("keys of the obejct",  test2);




console.log("here is trains>>>", trains);
for (var key in trains){

$("#full-list").append(+"<tr>"+"<td>"+myTrainName+"</td>"+"<td>"+myDestination+"</td>"+"<td>"+myFrequency+"</td>"+"<td>"+nextArrival+"</td>"+"<td>"+minutesAway+"</td>"+"</tr>");

  console.log("key is>>>", key, " and value is>>>>", trains[key])
}

 [].forEach(function(train) {

   // console.log(trains);




// });



// $("#full-list").append(+"<tr>"+"<td>"+test1+"</td>"+"<td>"+snapshot.val().destination+"</td>"+"<td>"+snapshot.val().frequency+"</td>"+"<td>"+nextArrival+"</td>"+"<td>"+minutesAway+"</td>"+"</tr>");
//$("#full-list").append(+"<tr>"+"<td>"+snapshot.val().destination+"</td>"+"</tr>");
//$("#full-list").append(+"<tr>"+"<td>"+snapshot.val().frequency+"</td>"+"</tr>");
//$("#full-list").append(+"<tr>"+"<td>"+snapshot.val().firstTrainTime+"</td>"+"</tr>");

});



// push name etc there


});

});

/*
db = fb.db();

db.ref().on("value", function(snap)) {
  
  var trains  = snap.val();

  trains.forEach(function(train) 

  record.starTime; 


})
*/





    // **** paste the firebase example here 



    // ***** Paste the other example here
/*

    // for each user that is online, output to the console
	   gameRef.on('value', function(function(gamesSnapshot) {
	       gamesSnapshot.forEach(function (snapshot) {
	           var obj = snapshot.val();
	           if(obj.isOnline == true) {
	               console.log(obj.name + " is online.");
	           }
	       }
	   }); 
*/

/*



    // Assume we have the following data in the Database:
{
  "users": {
    "ada": {
      "first": "Ada",
      "last": "Lovelace"
    },
    "alan": {
      "first": "Alan",
      "last": "Turing"
    }
  }
}

// Loop through users in order with the forEach() method. The callback
// provided to forEach() will be called synchronously with a DataSnapshot
// for each child:
var query = firebase.database().ref("users").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
  });
});

*/