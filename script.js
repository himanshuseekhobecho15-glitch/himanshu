// script.js

// Interactive functionality for the cricket club website

// Example function to display current date and time
function displayCurrentDateTime() {
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');
    console.log('Current Date and Time (UTC):', formattedDate);
}

displayCurrentDateTime();