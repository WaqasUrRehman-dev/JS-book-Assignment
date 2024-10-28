// 1. Write a program that displays current date and time in
// your browser.

function updatedDateTime() {
  var datetimeElement = document.getElementById("datetime");
  var currentDate = new Date();

  var date = currentDate.toDateString();
  var time = currentDate.toLocaleTimeString();

  datetimeElement.innerHTML =
    "Q1: Current Date: " + date + " | Current Time: " + time;
}
window.onload = updatedDateTime;

// 2. Write a program that alerts the current month in words.
// For example December.

function getCurrentMonth() {
  let months = [
    "January",
    "Febraury",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentMonth = new Date();
  currentMonth = months[currentMonth.getMonth()];
  document.write(`Q2: Current Month: ${currentMonth} <br><br>`);
}

getCurrentMonth();

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

function getCurrentDay() {
  let date = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  date = days[date.getDay()];
  document.write(`Q3: Today is ${date} <br><br>`);
}
getCurrentDay();

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

function checkFunDay() {
  let date = new Date();
  let days = date.getDay();

  if (days === 6 || days === 0) {
    document.write(`Q4: It's Fun Day <br><br>`);
  } else {
    document.write(`Q4: It's not Fun Day <br><br>`);
  }
}

checkFunDay();

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

function getfirstFifteenDays() {
  let date = new Date();
  let days = date.getDate();
  if (days <= 15) {
    document.write(`Q5: First fifteen days of the month <br><br>`);
  } else {
    document.write(`Q5: Last fifteen days of the month <br><br>`);
  }
}
getfirstFifteenDays();

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

function minutesSinceMidnight() {
  let date = new Date();
  document.write(`Q6: Current Date: ${date} <br>`);
  let miliSeconds = date.getTime();
  document.write(
    `Elapsed Miliseconds since midnight, Jan. 1, 1970: ${miliSeconds} <br>`
  );
  let minutes = miliSeconds / (1000 * 60);
  document.write(
    `Elapsed minutes since midnight, Jan. 1, 1970: ${minutes} <br><br>`
  );
}

minutesSinceMidnight();

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

function getPMOrAM() {
  let date = new Date();
  let hours = date.getHours();
  if (hours >= 0 && hours < 12) {
    document.write(`Q7: It's ${hours} AM <br><br>`);
  } else {
    document.write(`Q7: It's ${hours} PM <br><br>`);
  }
}
getPMOrAM();

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

function getLastDayOfLastMonth2020() {
  let day = new Date("December 31, 2020");
  document.write(`Q8: Later Date: ${day} <br><br>`);
}

getLastDayOfLastMonth2020();

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

function getPastRamadan() {
  let date = new Date("March 09, 2024");
  date = Math.floor(date / (1000 * 60 * 60 * 24));

  let Ramadan = new Date("June 18, 2018");
  Ramadan = Math.floor(Ramadan / (1000 * 60 * 60 * 24));

  let findDays = date - Ramadan;
  document.write(
    `Q9: ${findDays} days have passed since 1st Ramadan 2015 <br><br>`
  );
}

getPastRamadan();

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

function getSecondsSince2015() {
  let refDate = new Date("December 05, 2015");
  let beginningDate = new Date("January 01, 2015");
  let refDateSeconds = refDate.getTime() / 1000;

  let beginningDateSeconds = beginningDate.getTime() / 1000;
  let seconds = refDateSeconds - beginningDateSeconds;

  document.write(
    `Q10: ${seconds} seconds has passed since beginning of 2015 <br><br>`
  );
}

getSecondsSince2015();

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

let currentDate = new Date();
let currentHour = currentDate.getHours();
currentDate.setHours(currentHour + 1);
document.write(`Q11: current date: ${currentDate} <br>`);
let newDate = new Date();
document.write(`1 hour ago, it was ${newDate} <br><br>`);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

let newCurrentDate = new Date();
document.write(`Q12: current date: ${newCurrentDate} <br>`);
newCurrentDate.setFullYear(newCurrentDate.getFullYear() - 100);
document.write(`100 years back, it was ${newCurrentDate} <br><br>`);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

let age = parseInt(prompt("Enter your age: "))
let currentYear = new Date();
let birthYear = currentYear.getFullYear() - age;
document.write(`Q13: Your age is: ${age} <br>`);
document.write(`Your birth year is: ${birthYear} <br><br>`);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

let customerName = prompt("Enter your Name: ")
let currentMonth = new Date().getMonth() + 1;
let months = [
  "",
  "January",
  "Febraury",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
months = months[currentMonth];
let units = 410;
let chargesPerUnit = 16;
let netAmount = units * chargesPerUnit;
let latePaymentSurCharges = 350
let grossAmount = netAmount + latePaymentSurCharges;
document.write(`Q14: Customer Name: ${customerName} <br>`);
document.write(`Month: ${months} <br>`);
document.write(`Number of units: ${units} <br>`);
document.write(`Charges per unit: ${chargesPerUnit} <br><br>`);
document.write(`Net Amount Payable (within Due Date): ${netAmount} <br>`);
document.write(`Late payment surcharges: ${latePaymentSurCharges} <br>`);
document.write(`Gross Amount Payable (after Due Date): ${grossAmount} <br>`);

