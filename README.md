# Train-Time

# Unit 7: Firebase

## Overview

In this unit you will be introduced to the concept of saving, or persisting, user data.

There are two main types of storage we will use to save data:

Client Side Storage: uses cookies, sessionStorage, and localStorage to save and reuse user data across a user’s session.
Server Side Storage: saves user info to a database that can be reused across multiple devices and sessions. We'll use Firebase to accomplish this.
You'll also cover working with Date objects in JavaScript using the Moment.js library. Dates come up often in programming, whether you're building a scheduling application, todo-list, e-commerce app, etc. You'll also use the Moment.js library to do things such as converting between various date formats and finding the difference between two dates.

## Key Topics
* Cookies
* Sessions
* sessionStorage
* localStorage
* Server side storage
* Firebase
* event.preventDefault();
* momentJS
* Handling errors

## Comprehension Check
You will be employer-ready if you can answer the following questions: 
1. What role does a cookie play when saving user data?
2. What is the difference between local and server side storage?
3. What does event.preventDefault() do when executed?

## Learning Objectives
You will be employer-competitive if you are able to:
* Incorporate cookies and sessions into web apps for persistent user experiences.
* Set up Firebase systems to store remote data.
* Build apps that collect user input and save them to the cloud using AJAX in tandem with Firebase’s API.

## Homework

* **Train Time** (Recommended)
In this assignment, you'll create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

## Helpful Links
* [Firebase Documentation](https://firebase.google.com/docs/)
* [MomentJS Documentation](https://momentjs.com/docs/)
* [HTML5 localStorage W3Schools](https://www.w3schools.com/html/html5_webstorage.asp)

### Overview

In this assignment, you'll create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

- - -

### Setup

* We'll leave that up to you -- however you like. Just make sure you're using Firebase to store data, GitHub to backup your project, and GitHub Pages to host your finished site.

### Commits

Having an active and healthy commit history on GitHub is important for your future job search. It is also extremely important for making sure your work is saved in your repository. If something breaks, committing often ensures you are able to go back to a working version of your code.

* Committing often is a signal to employers that you are actively working on your code and learning.

  * We use the mantra “commit early and often.”  This means that when you write code that works, add it and commit it!

  * Numerous commits allow you to see how your app is progressing and give you a point to revert to if anything goes wrong.

* Be clear and descriptive in your commit messaging.

  * When writing a commit message, avoid vague messages like "fixed." Be descriptive so that you and anyone else looking at your repository knows what happened with each commit.

* We would like you to have well over 200 commits by graduation, so commit early and often!

### Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

### Instructions

* Make sure that your app suits this basic spec:
  
  * When adding trains, administrators should be able to submit the following:
    
    * Train Name
    
    * Destination 
    
    * First Train Time -- in military time
    
    * Frequency -- in minutes
  
  * Code this app to calculate when the next train will arrive; this should be relative to the current time.
  
  * Users from many different machines must be able to view same train times.
  
  * Styling and theme are completely up to you. Get Creative!

### Example Site

![train homework](Train_Time_Image.png)

### Bonus (Extra Challenges)

* Consider updating your "minutes to arrival" and "next train time" text once every minute. This is significantly more challenging; only attempt this if you've completed the actual activity and committed it somewhere on GitHub for safekeeping (and maybe create a second GitHub repo).

* Try adding `update` and `remove` buttons for each train. Let the user edit the row's elements-- allow them to change a train's Name, Destination and Arrival Time (and then, by relation, minutes to arrival).

* As a final challenge, make it so that only users who log into the site with their Google or GitHub accounts can use your site. You'll need to read up on Firebase authentication for this bonus exercise.

### Reminder: Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.
