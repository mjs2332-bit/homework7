// ========================================
// HOMEWORK 7 - JAVASCRIPT
// Mark St Geme
// ========================================


// STEP 1: Verify JavaScript Integration

console.log("Hello World!");


// STEP 3: Variables for User Data

const name = "Mark St Geme";

let hasDownloadedResume = false;


// STEP 4: Personalized Greeting

function showGreeting(name) {

    return "Hello, my name is " + name + "! Welcome to my portfolio!";

}

// Find the greeting element in the HTML
const greetingElement = document.getElementById("greeting");

// Display the greeting on the webpage
greetingElement.textContent = showGreeting(name);


// STEP 2: Resume Download Alert

const resumeButton = document.getElementById("downloadResume");

resumeButton.addEventListener("click", function(event) {

    // Prevent the # link from jumping to the top
    event.preventDefault();

    // Only show the alert the first time
    if (hasDownloadedResume === false) {

        alert("Your resume is downloaded successfully!");

        hasDownloadedResume = true;

    }

});


// STEP 5: Calculate Days Until Project Deadline

function daysUntilDeadline(submissionDate) {

    // Get today's date
    const currentDate = new Date();

    // Get the project's deadline
    const deadline = new Date(submissionDate);

    // Find the difference in milliseconds
    const timeDifference = deadline - currentDate;

    // Convert milliseconds into days
    const daysRemaining = Math.ceil(
        timeDifference / (1000 * 60 * 60 * 24)
    );

    return daysRemaining;
}


// Project deadline
const projectDeadline = "2026-12-15";

// Call the function and store the result
const remainingDays = daysUntilDeadline(projectDeadline);


// Display the number of days in the console
console.log(
    "Days remaining until project deadline: " + remainingDays
);


// Display the number of days on the webpage
const deadlineDisplay = document.getElementById("deadlineDisplay");

deadlineDisplay.textContent =
    remainingDays + " days remaining until the project deadline.";