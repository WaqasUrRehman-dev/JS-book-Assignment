// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. Number
// b. round off value of the Number
// c. floor value of the Number
// d. ceil value of the Number

// let positiveNumber = parseFloat(prompt("Enter a positive Number: "));
let positiveNumber = 3.4125;
document.write("<h1>Operation on Positive Numbers</h1>");
document.write("positiveNumber: " + positiveNumber + "<br>");
document.write(
  "positiveNumber in round value: " + Math.round(positiveNumber) + "<br>"
);
document.write(
  "positiveNumber in floor value: " + Math.floor(positiveNumber) + "<br>"
);
document.write(
  "positiveNumber in ceil value: " + Math.ceil(positiveNumber) + "<br>"
);

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// let negativeNumber = parseFloat(prompt("Enter a Negative Number: "));
let negativeNumber = -2.67;
document.write("<h1>Operation on Negative Numbers</h1>");
document.write("Number: " + negativeNumber + "<br>");
document.write("Number in round value: " + Math.round(negativeNumber) + "<br>");
document.write("Number in floor value: " + Math.floor(negativeNumber) + "<br>");
document.write("Number in ceil value: " + Math.ceil(negativeNumber) + "<br>");

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

let number = -4;
let absoluteValue = Math.abs(number);

document.write("<h1>Absolute Value</h1>");
document.write(
  "The absolute value of " + number + " is " + absoluteValue + "<br>"
);

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

let dice = Math.floor(Math.random() * 6) + 1;
document.write("<h1>Random Dice Value</h1>");
document.write("random dice value: " + dice + "<br>");

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

let coin = Math.floor(Math.random() * 2) + 1;

if (coin === 2) {
  document.write("<h1>Random Coin Value</h1>");
  document.write("Value ", coin + "<br>");
  document.write("random coin value: Heads" + "<br>");
} else {
  document.write("<h1>Random Coin Value</h1>");
  document.write("Value ", coin + "<br>");
  document.write("random coin value: Tails" + "<br>");
}

// 6. Write a program that shows a random number between 1
// and 100 in your browser

let randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("<h1>Random Number between 1 and 100</h1>");
document.write("random number between 1 and 100: " + randomNumber + "<br>");

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// let weight = parseFloat(prompt("Enter your weight in kilograms: "));
let weight = 58.3;
document.write("<h1>User Weight</h1>");
document.write("The weight of user is " + weight + " kilograms" + "<br>");

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

let secretNumber = Math.floor(Math.random() * 10) + 1;
let userNumber = parseInt(prompt("Enter a number between 1 and 10: "));
if (userNumber === secretNumber) {
  alert("Congratulations! You have guessed the secret number.");
} else {
  alert("Try Again!");
}
