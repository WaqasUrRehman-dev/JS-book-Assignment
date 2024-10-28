// Q1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  

var a = 3;
var b = 5;

var sum = a + b;
alert("Sum of " + a + " and " + b + " is " + sum);

// Q2. Repeat task1 for subtraction, multiplication, division & modulus. 

var sub = a - b;
var mul = a * b;
var division = a / b;
var mod = a % b;
alert("subtraction of " + a + " and " + b + " is " + sub);
alert("multiplication of " + a + " and " + b + " is " + mul);
alert("division of " + a + " and " + b + " is " + division);
alert("modulus of " + a + " and " + b + " is " + mod);


// Q3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.  
// l. Output : “The remainder is : 0”. 

var num;

alert("Value after variable declaration is: " + num);

num = 5;
alert("Initial value: " + num);
num++;
alert("Value after increment is: " + num);

num += 7;
alert("Value after addition is: " + num);

num--;
alert("Value after decrement is: " + num);

var remainder = num % 3;
alert("The remainder is : " + remainder);

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticketprice = 600;
var buyingtickets = 5;
var totalcost = ticketprice * buyingtickets;
document.write(
    "Total cost to buy "
     + buyingtickets + 
     " tickets to a movie is " 
     +  totalcost + 
     "PKR"
    );

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

var number = parseInt(
    prompt("Enter a number to display its multiplication table:")
);

document.write("<h2>Multiplication Table of " + number + " is </h2>");

for(var i = 1; i <= 10; i++){
    document.write(number + " x " + i + " = " + number * i + "<br>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
// °C = ( °F -32) x 5/9
// °F = ( °C X 5/9 ) + 32

var ClsTemp1 = 25;
var fhtTemp1 = ClsTemp1 * (9 / 5) + 32;

document.write("<br>")
document.write(ClsTemp1 + "°C is " + fhtTemp1 + "°F");

var fhtTemp2 = 70;
var ClsTemp2 = (fhtTemp2 - 32) * (5 / 9) ;

document.write("<br>" + fhtTemp2 + "°F is " + ClsTemp2 + "°C");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// Declare variables for item prices, quantities and shipping charges

var priceOfItem1 = 650;
var priceOfItem2 = 100;
var quantityOfItem1 = 3;
var quantityOfItem2 = 7;
var shippingCharges = 100;

var totalCost = priceOfItem1 * quantityOfItem1 + priceOfItem2 * quantityOfItem2 + shippingCharges;

document.write("<h1> Shopping Cart </h1>");
document.write("<p> Price of item 1 is " + priceOfItem1 + "</p>")
document.write("<p> Quantity of item 1 is " + quantityOfItem1 + "</p>")
document.write("<p> Price of item 2 is " + priceOfItem2 + "</p>")
document.write("<p> Quantity of item 2 is " + quantityOfItem2 + "</p>")
document.write("<p> Shipping Charges " + shippingCharges + "</p>")

document.write("<br>")
document.write("<p> Total Cost of your ordered is " + totalCost + "</p>")

// 8. Store total marks & marks obtained by a student in 2 variables.
//  Compute the percentage & show the result in your browser

var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1> Mark Sheet </h1>");

document.writeln("Total Marks: " + totalMarks + "<br>");
document.writeln("Marks Obtained: " + obtainedMarks + "<br>");
document.writeln("Percentage: " + percentage + "% <br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. 
// Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 

var usDollar = 10;
var SaudiRiyal = 25;
var PakistaniRupees = (104.80 * 10) + (25 * 28);

document.write("<h1> Currency in PKR </h1>");
document.write("Total Currency in PKR: " + PakistaniRupees + "<br>");

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression

var num1 = 20;
var calculations = ((num1 + 5) * 10) / 2;

alert("Calculate all in one expression: " + calculations);

// 11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”.

var currentYear = new Date().getFullYear();
var birthYaer = 2002;
var currentAge = currentYear - birthYaer;

var age2 = currentAge - 1;

document.write("<h1> Age Calculator </h1>");
document.write("Current Year: " + currentYear + "<br>")
document.write("Birth Year: " + birthYaer + "<br>")
document.write("They are either: " + currentAge + " or " + age2 + " yaers old.");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 10;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius ** 2;

document.write("<h1> The Geometrizer </h1>");
document.write("radius of circle = " + radius + "<br>");
document.write("Circumference of a circle = " + circumference + "<br>");
document.write("Area of a circle = " + area);

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

var favorite_snack = "Chocolate Chips";
var myAge = 21;
var maxAge = 63;
var estAmmPerDay = 2;

var totalEat = (maxAge - currentAge) * estAmmPerDay;

document.write("<h1> The Lifetime Supply Chain </h1>");
document.write("Favorite Snack: " + favorite_snack + "<br>");
document.write("Current Age: " + myAge + "</br>");
document.write("Estimated Maximum Age: " + maxAge + "</br>");
document.write("Ammount of snack per day: " + estAmmPerDay + "</br>");
document.write("You will need " + totalEat + " to last you until the ripe old age of " + maxAge);