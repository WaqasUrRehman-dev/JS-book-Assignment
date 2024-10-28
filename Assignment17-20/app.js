// 1. Declare and initialize an empty multidimensional array.(Array of arrays)

const multidimensional = [[]];
const multidimensionalsArray = [[], [], []];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

const matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

document.write(
  "Matrix Array: <br>" +
    matrix[0] +
    "<br>" +
    matrix[1] +
    "<br>" +
    matrix[2] +
    "<br><br>"
);

// 3. Write a program to print numeric counting from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// const number = +prompt("Enter a number to show its multiplication table:");
// const length = +prompt("Enter length of multiplication table");

// console.log(`Multiplication table of ${number} with length ${length}:`)

// for(let i = 1; i <= length; i++){
//     console.log(number + " x " + i + " = " + (number * i));
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log("Items of the fruits array: ");

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("\n");

for (let j = 0; j < fruits.length; j++) {
  console.log(`Element at index ${j} is ${fruits[j]}`);
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<h2> Counting: </h2>");
for (let i = 1; i <= 15; i++) {
  document.write(i, ", ");
}

document.write("<h2> Reverse Counting: </h2>");
for (let i = 10; i >= 1; i--) {
  document.write(i, ", ");
}

document.write("<h2> Even: </h2>");
for (let i = 0; i <= 20; i += 2) {
  document.write(i, ", ");
}

document.write("<h2> Odd: </h2>");
for (let i = 1; i <= 20; i += 2) {
  document.write(i, ", ");
}

document.write("<h2> Series: </h2>");
for (let i = 1; i <= 10; i++) {
  document.write(2 * i, "k, ");
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.

const A = ["cake", "apple pie", "cookie", "chips", "patties"];
const userInput = prompt(
  "Welcome to ABC bakery. What do you want to order sir/ma'am:"
);

let found = false;
for (let i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    found = true;
    break;
  }
}
if (found) {
  alert(`${userInput} is availible in this ABC bakery`);
} else {
  alert(`${userInput} is not availible in this ABC bakery`);
}

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

const string = "The quick brown fox jumps over the lazy dog";
const word = "the";

const words = string.split(" ");
let count = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() === word) {
    count++;
  }
}
console.log(`Text: ${string}`);
