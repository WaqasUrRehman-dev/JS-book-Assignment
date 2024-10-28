//1. Show an alert box on click on a link
function showAlert() {
  alert("You clicked the link!");
}

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

function showMessage(message, img) {
  alert(message);
}

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

function remove(button) {
  let row = button.parentNode.parentNode;
  row.remove();
}

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

const img = document.querySelector("#image");

img.addEventListener("mouseover", () => {
  img.src =
    "https://dinapalagroup.lk/wp-content/uploads/2024/02/VIVO-Y16-4-64-B-01.jpg";
});

img.addEventListener("mouseout", () => {
  img.src =
    "https://5.imimg.com/data5/SELLER/Default/2023/3/296178265/EX/FQ/OZ/186724856/vivo-mobile-phone.jpg";
});

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

const inc = document.querySelector(".increase");
const dec = document.querySelector(".decrease");
const count = document.querySelector(".counter");

let counter = 0;

inc.addEventListener("click", () => {
  counter++;
  count.innerHTML = counter;
});

dec.addEventListener("click", () => {
  if (count.innerHTML > 0) {
    counter--;
    count.innerHTML = counter;
  }
});
