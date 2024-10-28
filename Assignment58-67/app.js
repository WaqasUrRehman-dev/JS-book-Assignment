// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

// Get element of id “main-content” and assign them in a variable.
const mainContent = document.getElementById("main-content");

// Display all child elements of “main-content” element.
const childElement = mainContent.childNodes;
console.log(childElement);

// Get all elements of class “render” and show their innerHTML in browser.
const renderElement = document.getElementsByClassName("render");

for (let i = 0; i < renderElement.length; i++) {
  console.log(renderElement[i].innerHTML);
}

// Fill input value whose element id first-name using javascript.
const firstName = document.getElementById("first-name");
firstName.value = "Muhammad";

// Repeat part iv for id ”last-name” and “email”.
const lastname = document.getElementById("last-name");
const email = document.getElementById("email");

lastname.value = "Ali";
email.value = "ali@gmail.com";

// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”

const formContent = document.getElementById("form-content");
console.log(
  "Node type of element with id 'form-content': " + formContent.nodeType
);

// ii. Show node type of element having id “lastName” and its child node.
const lastName = document.getElementById("lastName");
console.log("Node type of element with id 'lastName': " + lastName.nodeType);
console.log(
  "Node type of child node of element with id 'lastName': " +
    lastName.childNodes[0].nodeType
);

// iii. Update child node of element having id “lastName”.
lastName.innerHTML = "Last Name: Smith";

// iv. Get First and last child of id “main-content”.
const main_Content = document.getElementById("main-content");
console.log(
  "First child of element with id 'main-content': " +
    main_Content.firstChild.innerHTML
);
console.log(
  "Last child of element with id 'main-content': " +
    main_Content.lastChild.innerHTML
);

// vi. Get parent node and node type of element having id “email”.
const email1 = document.getElementById("email");
console.log("Parent node of element with id 'email': " + email1.parentNode.id);
console.log("Node type of element with id 'email': " + email1.nodeType);