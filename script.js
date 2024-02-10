// Step 1: Get the current date
// Use the Date object to get the current date
const today = new Date();

// Step 2: Get the current year
// Extract the year from the current date obtained in step 1
const thisYear = today.getFullYear();

// Step 3: Create a new Date object for Christmas
// Use the current year obtained in step 2
// Set the month to December (represented by 11)
// Set the day to 25
const xmas = new Date(thisYear, 11, 25);

// Step 4: Check if Christmas already passed this year
if (today.getMonth === 11 && today.getDate() > 25) {
  xmas.setFullYear(xmas.getFullYear() + 1);
}

// Step 5: Calculate the difference between the current date and Christmas
// Subtract the current date from the Christmas date
// This will give you the difference in milliseconds
const msToXmas = xmas - today;

// Step 6: Convert the difference to days
// Divide the difference obtained in step 4 by the number of milliseconds in a day
// (1000 * 60 * 60 * 24)
const daysToXmas = Math.ceil(msToXmas / (1000 * 60 * 60 * 24));

// Step 7: Display the result
// Once you have the number of days left until Christmas, display it to the user
const countdown = document.querySelector("#countdown");
countdown.innerHTML = daysToXmas;
