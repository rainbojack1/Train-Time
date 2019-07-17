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
    let nextTrain;
    let arrive;
    let minAway;
    
    console.log("firstTrain: ", firstTrain);
    //console.log("Plus 30 min: ", moment(firstTrain, 'hh:mm A').add(30, "minutes").format('hh:mm A'));

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

    //add logic to calculate next train based on firstTrain + frequency
    nextTrain = value.firstTrain;
    console.log("Next train: ", nextTrain);
    console.log("freguency: ", value.freq);
    let current = moment().format('hh:mm A');
    console.log("Current: ", current);

    do {
        //must let moment know what format the incoming data is in to prevent invalid date error, e.g. moment(nextTrain, 'hh:mm A') says I'm using the value of nextTrain and it is in the format of hh:mm A
        nextTrain = moment(nextTrain, 'hh:mm A').add(value.freq, 'minutes').format('hh:mm A');
        // console.log("Next train arrives: ", nextTrain);

    }
    while(current > nextTrain);
    console.log("Next train arrives (after while loop): ", nextTrain);
    //maybe this needs to be compared to the current time instead of dateAdded - moment(value.dateAdded).format('hh:mm A')

    //add logic to calculate how long before the train arrives based on next train - current time, maybe use setInterval
    /*setInterval(function(){
        console.log("Min Away: ", moment(nextTrain, 'hh:mm A').fromNow(true));
        }, 1000 * 30);*/
    console.log("Min Away: ", moment(nextTrain, 'hh:mm A').fromNow(true));
    minAway = moment(nextTrain, 'hh:mm A').fromNow(true);

    $("tbody").append("<tr><td>" + value.name + "</td><td>" + value.destination + "</td><td>" + value.freq + "</td><td>" + nextTrain + "</td><td>" + minAway + "</td></tr>");
  });
