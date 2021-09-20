let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector("#navbar");
let sumbit = document.querySelector("#sub");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var confirmations;

sumbit.onclick = () => {
  if (confirm("Do you want to sumbit comment/opinion? ") == true) {
    alert("Comment send successfully!");
  } else {
    alert("Comment submission cancelled!");
  }
};
