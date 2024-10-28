// 1. Declare an empty array using JS literal notation to store
// student names in future.

let studentNames = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

let newStudent = new Array();

// 3. Declare and initialize a strings array.

let fruit = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruit);

// 4. Declare and initialize a numbers array.

const number = [1, 2, 3, 4, 5];
console.log(number[3]);
console.log(number[1]);

number[2] = 20;

console.log(number)

// 5. Declare and initialize a boolean array.

const boolean = [true, false, true, false];
console.log(boolean);

// 6. Declare and initialize a mixed array.

const mixedArray = ["Waqas", 21, true, "HEC", 2.45, false];
console.log(mixedArray);

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var qualifications = [
    "SSC",
    "HSC",
    "BCS",
    "BS",
    "BCOM",
    "MS",
    "M. Phil.",
    "PhD",
  ];
  
  document.write("<h3>Educational Qualifications:</h3>");
  
  for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
  }
  document.write("<br>");

  // 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// declare and initialize arrays

var student_Names = ["Micheal", "John", "Tony"];
var student_Scores = [320, 230, 480];

for(var i = 0; i < student_Names.length; i++){
    var percentages = (student_Scores[i] / 500) * 100;

    document.write(
        "Score of " 
        + student_Names[i] + 
        " is " 
        + student_Scores[i] + 
        "." + 
        " Percentage: " 
        + percentages +
        "% <br>"
        );
}
document.write("<br>");


// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// let colorNames = ["Blue", "Green", "Red"];

// document.write("<b> Initial Array: </b> <br>" + colorNames + "<br><br>");

// let user1 = prompt("Add your color at the begining:");
// colorNames.unshift(user1);
// document.write("<b>Array after adding a color at the beginning: </b><br>" + colorNames + "<br><br>");

// let user2 = prompt("Add your color at the End:");
// colorNames.push(user2);
// document.write("<b>Array after adding a color at the End: </b><br>" + colorNames + "<br><br>");

// colorNames.unshift("White", "Pink");
// document.write("<b>Array after adding two more colors at the begining: </b><br>" + colorNames + "<br><br>");

// colorNames.shift();
// document.write("<b> Array after deleting color at the begining: </b><br>" + colorNames + "<br><br>");

// colorNames.pop();
// document.write("<b> Array after deleting color at the End: </b><br>" + colorNames + "<br><br>");

// let colorPosition = prompt("Add your color & color name where you want to add (starting from 1):");
// let colorToAddAtPosition = prompt("Enter to color add at " + colorPosition + ":");

// colorNames.splice(colorPosition, 0, colorToAddAtPosition);

// document.write("<b> Array after adding color at: " + colorPosition + "</b><br>" + colorNames + "<br><br>");

// let deletdColors = prompt("Delete yor colors from array anywhere you want (starting from 1):");
// let numbersOfDeletedColors = prompt("Enter how many colors you want to delete");

// colorNames.splice(deletdColors, numbersOfDeletedColors);
// document.write("<b> Array after deleting " + numbersOfDeletedColors + " color at desired position: " + deletdColors +  "</b><br>" + colorNames + "<br><br>");


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

let stdScores = [320, 230, 480, 120];

stdScores.sort( function(a, b){
  return a - b;
});

console.log(stdScores);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
document.write("<h2> Cities List: </h2>" + cities);

let selectedCities = cities.slice(1, 3);
document.write("<h2> Selected Cities: </h2>" + selectedCities + "<br><br>");

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

let arr = ["This", "is", "my", "cat"];
document.write("<b> This is string Array: </b><br>" + arr + "<br><br>");
let joinArray = arr.join(" ");
document.write("<b> This is join Array: </b> <br>" + joinArray + "<br><br>");

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

let queue = [];

queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");

document.write("<b> Devices: </b><br>" + queue + "<br><br>");
document.write("<b> First In First Out: </b><br><br>");

let firstOut = queue.shift();
document.write("<b> Out: </b><br>" + firstOut + "<br>");

let secondOut = queue.shift();
document.write("<b> Out: </b><br>" + secondOut + "<br>");

let thirdOut = queue.shift();
document.write("<b> Out: </b><br>" + thirdOut + "<br>");

let lastOut = queue.shift();
document.write("<b> Out: </b><br>" + lastOut + "<br><br>");

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

let queue1 = [];

queue1.push("Keyboard");
queue1.push("Mouse");
queue1.push("Printer");
queue1.push("Monitor");

document.write("<b> Devices: </b><br>" + queue1 + "<br><br>");
document.write("<b> Last In First Out: </b><br><br>");

let last = queue1.splice(3);
document.write("<b> Out: </b><br>" + last + "<br>");

let third = queue1.splice(2);
document.write("<b> Out: </b><br>" + third + "<br>");

let second = queue1.splice(1);
document.write("<b> Out: </b><br>" + second + "<br>");

let first = queue1.splice(0);
document.write("<b> Out: </b><br>" + first + "<br><br>");

// 15. Write a program to store phone manufacturers (Apple,
//   Samsung, Motorola, Nokia, Sony & Haier) in an array.
//   Display the following dropdown/select menu in your
//   browser using document.write() method

let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h2> Select the company whose product you want to by: </h2>")
document.write("<select>");

for(let i = 0; i < manufacturers.length; i++){
  document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");