//This is a built-in js error checking: @ts-check
 
let firebaseConfig = {
    apiKey: "AIzaSyA0RJNrxmb1DBvfxCtw2q7o2X4Lbr5KCwY",
    authDomain: "rainbojack1.firebaseapp.com",
    databaseURL: "https://rainbojack1.firebaseio.com",
    projectId: "rainbojack1",
    storageBucket: "rainbojack1.appspot.com",
    messagingSenderId: "915332602938",
    appId: "1:915332602938:web:04688c17fcfb0d31"
};
 
firebase.initializeApp(firebaseConfig);
let database = firebase.database();
 
//Submit button functionality
$("#submit").click(function(event){
    event.preventDefault();
    let name = $("#inputName").val().trim();
    let destination = $('#inputDestination').val().trim();
    let freq = parseInt($('#inputFrequency').val().trim());
    let firstTrain = $("#inputFirstTrain").val().trim();
    let arrive;
    let minAway;
    

    let newTrain = {
        name: name,
        destination: destination,
        freq: freq,
        //pulls the current time stamp in UTC
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    }

    // db push
    database.ref().push(newTrain);

    //clear the form
    $("#inputName").val("");
    $('#inputDestination').val("");
    $("#inputFirstTrain").val("");
    $('#inputFrequency').val("");
});

// Firebase watcher .on("child_added"...
database.ref().on("child_added", function(snap){
    var value = snap.val();
    console.log("value: ", value);
    console.log("name: ", value.name);
  
    $("tbody").append("<tr><td>" + value.name + "</td><td>" + value.destination + "</td><td>" + value.freq + "</td><td>" + "1" + "</td><td>" + "2" + "</td></tr>");
  });