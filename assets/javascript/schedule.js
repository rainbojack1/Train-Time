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
    let firstTrain = moment($("#inputFirstTrain").val().trim()).format('hh:mm A');

    console.log("firstTrain: ", firstTrain);

    let newTrain = {
        name: name,
        destination: destination,
        freq: freq,
        firstTrain: firstTrain,
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
    let value = snap.val();
    console.log("value: ", value);
    console.log("name: ", value.name);
    console.log("firstTrain: ", value.firstTrain);
    console.log("freguency: ", value.freq);
    console.log("Current time: ", moment().format('hh:mm A'));

    let current = moment().format('hh:mm A');
    console.log("Current: ", current);

    /*//add logic to calculate next train based on firstTrain + frequency
    nextTrain = moment(value.firstTrain, 'hh:mm A').format('hh:mm A');
    console.log("Next train: ", nextTrain);*/

    // Difference between the times
    let diffTime = moment().diff(moment(value.firstTrain, 'hh:mm A'), 'minutes');
    console.log("Time difference: " + diffTime);

    // Time apart remainder
    let remainder = diffTime % value.freq;
    console.log("Remainder: ", remainder);

    // Minutes until train arrives
    let minAway = value.freq - remainder;
    console.log("Min Away: " + minAway);

    // Time of next train
    let arrive = moment().add(minAway, 'minutes').format('hh:mm A');
    console.log("Next train arrives: ", (arrive));






    $("tbody").append("<tr><td>" + value.name + "</td><td>" + value.destination + "</td><td>" + value.freq + "</td><td>" + arrive + "</td><td id='away'>" + minAway + "</td></tr>");



  });


