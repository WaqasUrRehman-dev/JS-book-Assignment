// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// const firstName = prompt("Enter your first name:");
// const lastName = prompt("Enter your last name:");
// const fullName = firstName + " " + lastName;

// console.log("Hello " + fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// const favPhone = prompt("Enter your favorite Phone Name:");

// console.log("My favorite Phone is: " + favPhone);
// console.log("Length of String is: " + favPhone.length);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

const indexWord = "Pakistani";
const index = indexWord.indexOf("n");

document.write(
  "the index of letter “n” in the word Pakistani is: " + index + "<br>"
);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

let word = "Hello World";
let lastWord = -1;

for (let i = 0; i < word.length; i++) {
  if (word[i] === "l") {
    lastWord = i;
  }
}

document.write(
  "The last index of 'l' in the word 'Hello World' is: " + lastWord + "<br>"
);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

let country = "Pakistani";
let character = country.charAt(3);

document.write(
  "The character at 3rd index in the word Pakistani is: " + character + "<br>"
);

// 6. Repeat Q1 using string concat() method.

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName.concat(" ", lastName);

// document.write("Hello " + fullName + "! Welcome <br>");

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

let text = "Hyderabad";
let txt = text.replace("Hyder", "Islam");

document.write("City: " + text + "<br>");
document.write("After Replacement: " + txt + "<br>");

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

let sentence =
  "Ali and Sami are best friends. They play cricket and football together.";
let char = sentence.replace(/and/g, "&");

document.write("Sentence: " + sentence + "<br>");
document.write("After Replacement: " + char + "<br>");

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

let numberAsString = "472";
let number = Number(numberAsString);

document.write("Value: " + numberAsString + "<br>");
document.write("Type: " + typeof numberAsString + "<br>");

let numberAsNumber = 472;
let string = numberAsNumber.toString();

document.write("Value: " + numberAsNumber + "<br>");
document.write("Value: " + typeof numberAsNumber + "<br>");

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// let user = prompt("Enter a text:");
// let convert = user.toUpperCase();

// document.write("User Input: " + user + "<br>");
// document.write("Upper Case: " + convert + "<br>");

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

let num = 35.36;
let str = num.toString().replace(".", "");

document.write("Number: " + num + "<br>");
document.write("Result: " + str + "<br>");

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// let username = prompt("Enter your username:");
// let isValid = true;

// for (let i = 0; i < username.length; i++) {
//   var charCode = username.charCodeAt(i);
//   if (
//     charCode === 64 ||
//     charCode === 46 ||
//     charCode === 44 ||
//     charCode === 33
//   ) {
//     isValid = false;
//     break;
//   }
// }

// if (!isValid) {
//   alert("Please enter a valid username without special character[@ . , !]");
// } else {
//   alert("Username is valid");
// }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

// let A = ["cake", "apple pie", "cookie", "chips", "petties"];

// let takeInput = prompt("Welcome to ABC Bakery. What do you want sir/ma'am?");
// let found = false;

// for (let i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === takeInput.toLowerCase()) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   let findindex = takeInput.indexOf(A);
//   alert(takeInput + " is availible in our bakery");
// } else {
//   alert("We are Sorry. " + takeInput + " is not availible in our bakery");
// }

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// let password = prompt("Enter your Password: ");
// let firstCharacter = password.charAt[0];
// let passwordIsValid = false;

// for (let i = 0; i <= password.length; i++) {
//   var charCode = password.charCodeAt[i];
//   if (charCode === 0 - 9 || charCode === a - z || charCode === A - Z) {
//     passwordIsValid = true
//   }
// }

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University of Karachi";
var array = university.split("");
let result = array.join("\n");
document.write("Array Elements: " + result);

// 17. Write a program to display the last character of a user
// input.

// const user = prompt("User Input: ");

// let lastCharacter = user.charAt(user.length - 1);
// console.log("Last character: " + lastCharacter);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

let words = "The quik brown fox jump over the lazy dog";
let wordToCount = "the";
let count = 0;

let wordsToLowerCase = words.toLowerCase();

let wordsArray = wordsToLowerCase.split(" ");

for (let i = 0; i < wordsArray.length; i++) {
  if(wordsArray[i] === wordToCount.toLowerCase()){
    count++
  }
}

console.log(`There are ${count} occurrence(s) of word ${wordToCount}`)