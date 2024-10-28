// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

let cityName = prompt("Enter a city name");

if (cityName.toLowerCase() == "karachi") {
    console.log("Welcome to city of lights");
} else {
    console.log("Invalid Input");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

let gender = prompt("Enter your gender");

if (gender.toLowerCase() == "male") {
    console.log("Good Morning Sir");
} else if(gender.toLowerCase() == "female"){
    console.log("Good Morning Ma'am");
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

let color = prompt("Enter a color");

if(color.toLowerCase() == "red"){
    console.log("Must Stop");
}
else if(color.toLowerCase() == "yellow"){
    console.log("Ready to Move");
}
else if(color.toLowerCase() == "green"){
    console.log("Move now");
}
else{
    console.log("Invalid Input. Please enter yellow, red or green color.");
}

// 4. Write a program to take input remaining fuel in car (in
//   litres) from user. If the current fuel is less than 0.25litres,
//   show the message “Please refill the fuel in your car”

let fuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));
  
  if (fuel <= 0.25) {
    console.log("Please refill the fuel in your car.");
  }
  else{
    console.log("Fuel is availible");
  }

  // 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// User Input & Conditional Statement | JAVASCRIPT
// Page 2 of 4
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// User Input & Conditional Statement | JAVASCRIPT
// Page 3 of 4
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

let sub1 = +prompt("Enter marks of 1st subject:");
let sub2 = +prompt("Enter marks of 2nd subject:");
let sub3 = +prompt("Enter marks of 3rd subject:");

let totalMarks = +prompt("Enter Total Marks:");
let obtainedMarks = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3);

let percentage = parseFloat((obtainedMarks / totalMarks) * 100);

document.write("<h1> Mark Sheet </h1>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Obtained Marks: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%" + "<br>");

if(percentage >= 80){
    document.write("Grade: A-one <br>");
    document.write("Remarks: Excellent");
}
else if(percentage >= 70){
    document.write("Grade: A <br>");
    document.write("Remarks: Good");
}
else if(percentage >= 60){
    document.write("Grade: B <br>");
    document.write("Remarks: You need to improve");
}
else if(percentage <= 60){
    document.write("Grade: Fail <br>");
    document.write("Remarks: You need to improve");
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

let secretNumber = Math.floor(Math.random() * 10) + 1;
let guessedNumber = +prompt("Guess the Secret Number:");

if(guessedNumber == secretNumber){
    console.log("“Bingo! Correct answer”.");
}
else if(guessedNumber == secretNumber + 1 || guessedNumber == secretNumber - 1){
    console.log("“Close enough to the correct answer”.")
}
else{
    console.log("Sorry! try again");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

let number = +prompt("Enter the number: ");

if (number % 3 == 0) {
    console.log("The Given number is divisible by 3.");
} else {
    console.log("The Given number is not divisible by 3.");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

let num = +prompt("Enter a number:");

if (num % 2 == 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

let temperature = +prompt("Enter the degree of temperature");

if(temperature > 40){
    console.log("It is too hot outside.");
}
else if(temperature > 30){
    console.log("The Weather today is Normal.");
}
else if(temperature > 20){
    console.log("Today’s Weather is cool.");
}
else if(temperature > 10){
    console.log("OMG! Today’s weather is so Cool.");
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let firstNumber = +prompt("Enter first number:");
let secondNumber = +prompt("Enter second number:");
let operator = prompt("Enter Operator (+, -, *, /, %) ");
let result;

if(operator == "+"){
    result = firstNumber + secondNumber;
}
else if(operator == "-"){
    result = firstNumber - secondNumber;
}
else if(operator == "*"){
    result = firstNumber * secondNumber;
}
else if(operator == "/"){
    result = firstNumber / secondNumber;
}
else if(operator == "%"){
    result = firstNumber % secondNumber;
}

console.log("Result: " + result);