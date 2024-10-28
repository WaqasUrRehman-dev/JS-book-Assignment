// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

let input = prompt("Enter a character:");
let charCode = input.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    console.log(input + " is a number");
}else if (charCode >= 65 && charCode <= 90) {
    console.log(input + " is an uppercase letter.");
  } else if (charCode >= 97 && charCode <= 122) {
    console.log(input + " is a lowercase letter.");
  } else {
    console.log("Invalid input.");
  }

  // 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");

if (num1 > num2) {
    console.log(num1 + " is larger than " + num2);
} else if(num2 > num1){
    console.log(num2 + " is larger than " + num1);
}else {
    console.log(num1 + " and " + num2 + " are equal.");
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

let number = +prompt("Enter a number");

if(number > 0){
    console.log(number + " is positive.");
}else if(number < 0){
    console.log(number + " is negative.");
}else {
    console.log(number + " is zero.");
}

// 4. Write a program that takes a character (i.e. string of
//   length 1) and returns true if it is a vowel, false otherwise

let character = prompt("Enter the character:");
let vowel = "aeiouAeiou";

if (vowel.indexOf(character) !== -1) {
    console.log(`${character} is vowel.`)
} else {
    console.log(`${character} is not vowel.`)
}

// 5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. Check if user has entered password. If not, then give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. 
// Show “Incorrect password” otherwise.

let pass = "waqas@123";
let userPass = prompt("Enter your Password.");

if (userPass === "") {
    alert("Please enter your password");
}else if(userPass === pass){
    alert("Correct! The password you entered matches the original password.");
}
else{
    alert("Incorrect Password.");
}

// 6. This if/else statement does not work. Try to fix it: 

var greeting; 
var hour = 13; 

if (hour < 18) { 
    greeting = "Good day"; 
    console.log(greeting);
}else{ 
    greeting = "Good evening"; 
    console.log(greeting);
}

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let time = +prompt("Enter time in 24 hour clock format like: 1900 = 7pm.");

if (time >= 1000 && time < 1200){
    alert("Good Morning!");
}
else if(time >= 1200 && time < 1700){
    alert("Good Afternoon!");
}
else if(time >= 1700 && time < 2100){
    alert("Good Evening!");
}
else if(time >= 2100 && time <= 2359){
    alert("Good Night!");
}