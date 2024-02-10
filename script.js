// Step 1: Get the current date
// Use the Date object to get the current date
const currentDate = new Date();

// Step 2: Get the current year
// Extract the year from the current date obtained in step 1
const currentYear = currentDate.getFullYear();

// Step 3: Create a new Date object for Christmas
// Use the current year obtained in step 2
// Set the month to December (represented by 11)
// Set the day to 25
const christmasDate = new Date(currentYear, 11, 25);

// Step 4: Calculate the difference between the current date and Christmas
// Subtract the current date from the Christmas date
// This will give you the difference in milliseconds
const countdownMS = christmasDate - currentDate;

// Step 5: Convert the difference to days
// Divide the difference obtained in step 4 by the number of milliseconds in a day
// (1000 * 60 * 60 * 24)
const countdownDays = countdownMS / (1000 * 60 * 60 * 24);

// Step 6: Handle negative days
// If the current date is after Christmas for the current year, you may end up with a negative number of days left
// In this case, adjust the year to the next year and recalculate the days left until Christmas

// Step 7: Display the result
// Once you have the number of days left until Christmas, display it to the user
const countdownDisplay = document.querySelector("#countdown");
countdownDisplay.innerHTML = countdownDays;
