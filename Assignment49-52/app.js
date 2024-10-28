// 1. Create a signup form and display form data in your web page on submission.

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = `Name: ${name} \n Email: ${email} \n Password: ${password}`;
  alert(data);
});

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

const text = document.getElementById("details");
const showText = document.getElementById("showText");

showText.addEventListener("click", () => {
  if (text.style.display == "block") {
    showText.innerHTML = "Read More";
    text.style.display = "none";
  } else {
    showText.innerHTML = "Read Less";
    text.style.display = "block";
  }
});

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

const studentForm = document.getElementById("studentForm");
const table = document.getElementById("studentTable");
const editForm = document.getElementById("editForm");
const cancelEdit = document.getElementById("cancelEdit");

let currentlyEditingRow = null

studentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("studentName").value;
  const age = document.getElementById("age").value;
  const grade = document.getElementById("grade").value;
  console.log(name, age, grade);
  addStdToTable(name, age, grade);
  studentForm.reset();
});

// add student in table one by one
function addStdToTable(name, age, grade) {
  const row = table.insertRow(-1);
  const nameCell = row.insertCell(0);
  const ageCell = row.insertCell(1);
  const gradeCell = row.insertCell(2);
  const editCell = row.insertCell(3);
  const deleteCell = row.insertCell(4);
  nameCell.innerHTML = name;
  ageCell.innerHTML = age;
  gradeCell.innerHTML = grade;
  deleteCell.innerHTML = `<button class="delete-btn">Delete</button>`;
  editCell.innerHTML = `<button class="edit-btn">Edit</button>`;

  // delete row from table
  deleteCell.addEventListener("click", function () {
    row.remove();
  });

  const editName = document.getElementById("editName");
  const editAge = document.getElementById("editAge");
  const editGrade = document.getElementById("editGrade");

  // Edit row from table
  editCell.addEventListener("click", function () {
    // set the current editing row
    currentlyEditingRow = row;

    // Pre-filled the edit form with current values
    editName.value = name;
    editAge.value = age;
    editGrade.value = grade;
    editForm.style.display = "block";
  });

  // Edit student details and again set on his position in table
  editForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (currentlyEditingRow) {
      const newName = editName.value;
      const newAge = editAge.value;
      const newGrade = editGrade.value;

      // update the selected row with the new values
      currentlyEditingRow.cells[0].innerHTML = newName;
      currentlyEditingRow.cells[1].innerHTML = newAge;
      currentlyEditingRow.cells[2].innerHTML = newGrade;

      // hide the edit form after updating
      editForm.style.display = "none";

      currentlyEditingRow = null
    }
  });
}

cancelEdit.addEventListener("click", function(){
  editForm.style.display = "none";
  currentlyEditingRow = null
})