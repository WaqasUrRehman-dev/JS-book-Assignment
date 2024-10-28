// 1. Write a function that displays current date & time in your
// browser.

function currentDate() {
  let date = new Date();
  document.write("<h1>Current Date and Time</h1>");
  document.write(`<p> Current Date and Time ${date} </p>`);
}

currentDate();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function greeting(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  document.write("<h1>Greeting to the user</h1>");
  document.write(`<p>Hello ${fullName} </p>`);
}

greeting("Waqas Ur", "Rehman");

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function addNumbers(num1, num2) {
  //   let num1 = Number(prompt("Enter first number: "));
  //   let num2 = Number(prompt("Enter second number: "));
  let sum = num1 + num2;
  document.write("<h1>Add Two Numbers</h1>");
  document.write(`<p>Sum of two numbers is ${sum}</p>`);
  return sum;
}
addNumbers(15, 25);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    default:
      result = "Invalid operator";
  }
  document.write(
    `<p> The Result of ${num1} ${operator} ${num2} is ${result} </p>`
  );
  return result;
}
document.write("<h1>Calculator</h1>");

calculator(15, 6, "+"); // Output: The result of 15 + 6 = 21
calculator(15, 6, "-"); // Output: The result of 15 - 6 = 9
calculator(15, 6, "*"); // Output: The result of 15 * 6 = 90
calculator(15, 6, "/"); // Output: The result of 15 / 6 = 2.5

// 5. Write a function that squares its argument.

function square(num) {
  let result = num ** 2;
  document.write("<h1>Square of the Number</h1>");
  document.write(`<p> The Square of ${num} is ${result} </p>`);
}

square(9);

// 6. Write a function that computes factorial of a number.

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  document.write("<h1>Factorial of the Number</h1>");
  document.write(`<p> The factorial of ${num} is ${result} </p>`);
}

factorial(6);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function counting(startNumber, endNumber) {
  //   let startNumber = +prompt("Enter start number: ");
  //   let endNumber = +prompt("Enter end number: ");
  let message = "";
  for (let i = startNumber; i <= endNumber; i++) {
    message += i + "\n";
  }
  document.write("<h1>Counting of the Number</h1>");
  document.write(
    `<p> The counting of ${startNumber} to ${endNumber} is ${message} </p>`
  );
}

counting(1, 10);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

document.write("<h1>Hypotenuse of the Triangle</h1>");
function calculateTriangle(base, perpendicular) {
  function calculateSquare(num) {
    return num * num;
  }
  const baseSquare = calculateSquare(base);
  const perpendicularSquare = calculateSquare(perpendicular);
  const hypothenuse = Math.sqrt(baseSquare + perpendicularSquare);

  document.write(
    `<p> The hypothenuse of right angle triangle is ${hypothenuse} </p>`
  );
  return hypothenuse;
}

calculateTriangle(3, 4);
calculateTriangle(6, 8);

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
document.write("<h1>Area of Rectengle</h1>");

function areaOfRectengle(width, height) {
  let area = width * height;
  document.write(`<p> The area of rectengle is ${area} </p>`);
  return area;
}
let val1 = 50;
let val2 = 50;
areaOfRectengle(val1, val2);
areaOfRectengle(10, 10);

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function checkPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  document.write("<h1>Check String is palindrome or not</h1>");
  if (reversed === str) {
    document.write(`<p> The current string is palindrome </p>`);
  } else {
    document.write(`<p> The current string is not palindrome </p>`);
  }
  return reversed;
}
checkPalindrome("madam");

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function firstLetterUppercase(sentence) {
  let words = sentence.split(" ");
  let upperCaseWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const capitalizedStr = upperCaseWords.join(" ");
  document.write("<h1>Change the first letter to capital of each word</h1>");
  document.write(`<p> The capitalized string is "${capitalizedStr}".</p>`);
  return capitalizedStr;
}
firstLetterUppercase("the quick brown fox");

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function longestWord(sentence) {
  let words = sentence.split(" ");
  let maxValue = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxValue.length) {
      maxValue = words[i];
    }
  }
  document.write("<h1>Find the Largest word</h1>");
  document.write(`<p> The sentence is "${sentence}".</p>`);
  document.write(`<p> The Largest word is "${maxValue}".</p>`);
}

longestWord("Web Development Tutorial");

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function countLetter(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  document.write(`<h1>Count the number of occurances in word: ${str}</h1>`);
  document.write(
    `<p> The letter ${letter} occurs ${count} time in the string ${str}.</p>`
  );
  return count;
}

countLetter("JSResourceS.com", "o");

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(radius) {
  let circumference = (2 * Math.PI * radius).toFixed(2);
  document.write(`<p>The circumference is: ${circumference}.</p>`);
}
document.write("<h1>The Geometerizer</h1>");

function calcArea(radius) {
  let area = (Math.PI * radius * radius).toFixed(2);
  document.write(`<p>The Area is: ${area}.</p>`);
}
calcCircumference(10);
calcArea(50);
