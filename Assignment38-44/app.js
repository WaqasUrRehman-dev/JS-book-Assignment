// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a, b) {
  let powervalue = b ** a;
  document.write("<h2>Calculate the value of a raised to b</h2>");
  document.write(`<p>The a raised to b value is ${powervalue}</p>`);
}
power(6, 4);

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

function leapYear(year) {
  document.write("<h2>Calculate the leap year</h2>");
  if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
    document.write(`<p>${year} is leap year</p>`);
  } else {
    document.write(`<p>${year} is not a leap year</p>`);
  }
}
leapYear(2011);

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function calcSide(a, b, c) {
  let s = (a + b + c) / 2;
  return s;
}

function calcAreaa(a, b, c) {
  const s = calcSide(a, b, c);
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed();
  document.write("<h2>Calculate the area of triangle</h2>");
  document.write(`<p>The area of triangle is ${area}</p>`);
  return area;
}

calcAreaa(3, 4, 5);

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

function result(marks1, marks2, marks3) {
  let avg = average(marks1, marks2, marks3);
  let perctg = percentage(marks1, marks2, marks3);
  document.write("<h2>Calculate the result of student</h2>");
  document.write(`<p>The average of received marks is ${avg}</p>`);
  document.write(`<p>The percentage of received marks is ${perctg}</p>`);
}

function average(marks1, marks2, marks3) {
  let sum = marks1 + marks2 + marks3;
  let avg = (sum / 3).toFixed();
  return avg;
}

function percentage(marks1, marks2, marks3) {
  let sum = marks1 + marks2 + marks3;
  let perctg = ((sum / 300) * 100).toFixed();
  return perctg;
}

result(68, 75, 84);

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now

function findIndex(name, subName) {
  for (let i = 0; i < name.length; i++) {
    if (name[i] === subName[0]) {
      let match = true;
      for (let j = 1; j < subName.length; j++) {
        if (name[i + j] !== subName[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        return i;
      }
    }
  }
  return -1;
}

console.log(findIndex("waqas ur rehman", "a"));

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function deleteVowels() {
  let sentence = "Lorem ipsum dolor sit amet cons";
  let vowels = "aeiouAEIOU"; // Define vowels (both lowercase and uppercase)
  let result = "";
  for (let i = 0; i < sentence.length; i++) {
    if (!vowels.includes(sentence[i])) {
      result += sentence[i];
    }
  }
  document.write(`<h2>Delete vowels from:  ${sentence}</h2>`);
  document.write(`<p>After deletion of vowels: ${result}</p>`);
  return result;
}
deleteVowels();

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

function countVowels(sentence) {
  sentence = sentence.toLowerCase();
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < sentence.length - 1; i++) {
    let firstChar = sentence[i];
    let secondChar = sentence[i + 1];

    switch (firstChar) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        switch (secondChar) {
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
            count++;
            break;
        }
        break;
    }
  }
  return count;
}
let sentence = "Pleases read this application and give me gratuity";
console.log(countVowels(sentence));

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// distance in km
const distance = 30;
// 1 km => 1000m
const meter = 1000;
// 1 km => 100000cm
const cm = 100000;
// 1 km => 3280.84 feet
const feet = 3280.84;
// 1 km => 39370.1 inches
const inches = 39370.1;

document.write(
  `<h2>Convert the distance ${distance} km into meter, centimeter, feet, and inches</h2>`
);

// function to convert distance in meters
function convertToMeters(distance) {
  const kmInMeter = distance * meter;
  document.write(
    `<p>The distance ${distance} km in meter is ${kmInMeter} </p>`
  );
}

function convertToCentimeter(distance) {
  let kmInCentimeter = distance * cm;
  document.write(
    `<p>The distance ${distance} km in meter is ${kmInCentimeter} </p>`
  );
}

function convertToFeet(distance) {
  let kmInFeet = (distance * feet).toFixed(2);
  document.write(`<p>The distance ${distance} km in meter is ${kmInFeet} </p>`);
}

function convertToInches(distance) {
  let kmInInches = (distance * inches).toFixed(2);
  document.write(
    `<p>The distance ${distance} km in meter is ${kmInInches} </p>`
  );
}

convertToMeters(distance);
convertToCentimeter(distance);
convertToFeet(distance);
convertToInches(distance);

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

function payOverTime(overtime) {
  let hours = 40;
  let rate = 12;
  let pay = overtime - hours;
  let totalPay = pay * rate;
  document.write(
    `<h2>Pay overtime money to employee which is ${rate} R.s. per hour</h2>`
  );
  document.write(`<p>The overtime is ${pay} hours</p>`);
  document.write(`<p>The total amount of overtime is ${totalPay} R.s</p>`);
}

payOverTime(50);

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

function currencyNotes(amount) {
  let currency = [100, 50, 10];
  let notes = [];
  for (let i = 0; i < currency.length; i++) {
    notes[i] = Math.floor(amount / currency[i]);
    amount = amount % currency[i];
  }
  return notes;
}

let amount = 470;
let notes = currencyNotes(parseInt(amount));

const hundredNotes = notes[0];
const fiftyNotes = notes[1];
const tenNotes = notes[2];

document.write(
  `<h2>Calculate the total number of currncy when user withdrawn your amount</h2>`
);
document.write(
  `<p>You will have ${hundredNotes} hundred notes, ${fiftyNotes} fifty notes, and ${tenNotes} ten notes</p>`
);