// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// Result :The value of a is :10
//  ------------------------
// the value of ++a is :11
//  Now the value of a is :11
// The value of a++ is :11
// Now the value of  a is :12
// The value of --a is :11
// Now the value of a is :11
// The value of a-- is :11
// Now the value of a is :10

let a = 10;

document.write("Result: <br> The value of a is: " + a + "<br><br>");

++a;
document.write("The value of ++a is : " + a + "<br>");
document.write("Now the value of a is : " + a + "<br><br>");

a++;
document.write("The value of a++ is : " + a + "<br>");
document.write("Now the value of a is : " + a + "<br><br>");

--a;
document.write("The value of --a is : " + a + "<br>");
document.write("Now the value of a is : " + a + "<br><br>");

a--;
document.write("The value of a-- is : " + a + "<br>");
document.write("Now the value of a is : " + a + "<br><br>");

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

let a1 = 2;
let b = 1;
let result = --a1 - --b + ++b + b--;

let c = --a1;
document.write("a1 is: " + c + "<br>");

let d = --a1 - --b;
document.write(d + "<br>");

let e = --a1 - --b + ++b;
document.write("b is: " + e + "<br>");
 
let f = --a1 - --b + ++b + b--;
document.write(f + "<br>"); 

document.write("result : " + result);

// 3. Write a program that takes input a name from user &
// greet the user.

let username = prompt("Enter usename");
alert("Hello " + username + "\n");

// 5. Write a program to take input a number from user &
// display it’s multiplication newnewTable on your browser. If user
// does not enter a new number, multiplication newTable of 5
// should be displayed by default.

let number = +prompt("Enter number") || 5;

document.write("<h1> Multiplication of newTable " + number + "<br></h1>");
for(let i = 1; i <= 10; i++){
    document.write(number + " x " + i + " = " + number * i + "<br>");
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user newTable)

let subject1 = prompt("Enter Subject 1");
let subject2 = prompt("Enter Subject 2");
let subject3 = prompt("Enter Subject 3");

let totalMarks = 100;

let obtMarksOfSub1 = +prompt("Enter Obtained Marks of Subject 1"); 
let obtMarksOfSub2 = +prompt("Enter Obtained Marks of Subject 2"); 
let obtMarksOfSub3 = +prompt("Enter Obtained Marks of Subject 3"); 


let totalObtMarks = parseFloat(obtMarksOfSub1) + parseFloat(obtMarksOfSub2) + parseFloat(obtMarksOfSub3);
let percentage1 = (parseFloat(obtMarksOfSub1) / totalMarks) * 100;
let percentage2 = (parseFloat(obtMarksOfSub2) / totalMarks) * 100;
let percentage3 = (parseFloat(obtMarksOfSub3) / totalMarks) * 100;
let totalPercentage = (parseFloat(percentage1) + parseFloat(percentage1) + parseFloat(percentage3)) / 3;

document.write(

    "<table>",
    "<tr>", 
    "<th> Subject  </th>", 
    "<th> Total Marks  </th>", 
    "<th> Obtained Marks  </th>", 
    "<th> Percentage </th>",
    "</tr>", 

    "<tr>", 
    "<td>"  + subject1 + "</td>", 
    "<td>" + totalMarks + "</td>", 
    "<td>" + obtMarksOfSub1 + "</td>", 
    "<td>" + percentage1 + "%</td>",
    "</tr>",

    "<tr>", 
    "<td>"  + subject2 + "</td>", 
    "<td>" + totalMarks + "</td>", 
    "<td>" + obtMarksOfSub2 + "</td>", 
    "<td>" + percentage2 + "%</td>",
    "</tr>",

    "<tr>", 
    "<td>"  + subject3 + "</td>", 
    "<td>" + totalMarks + "</td>", 
    "<td>" + obtMarksOfSub3 + "</td>", 
    "<td>" + percentage3 + "%</td>",
    "</tr>",

    "<tr>",
    "<td>   </td>",
    "<td>" + totalMarks * 3 + "</td>",
    "<td>" + totalObtMarks + "</td>",
    "<td>" + totalPercentage + "%</td>"
)

