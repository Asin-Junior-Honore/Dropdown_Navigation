let togglebutton = document.querySelector(".buger");
let links = document.querySelector(".navbars");
let closebtn = document.getElementById("closebtn");
console.log(togglebutton, links);
togglebutton.addEventListener("click", () => {
  links.classList.toggle("active");
});

closebtn.addEventListener("click", () => {
  links.classList.remove("active");
});

let MAINmenu3 = document.getElementById("order-t");
let MAINmenu4 = document.getElementById("order-t1");
let MAINmenu = document.getElementById("main-menu");
let MAINmenutwo = document.getElementById("main-menu2");
console.log(MAINmenu);
function showmenu() {
  MAINmenu.classList.toggle("open-menu");
  MAINmenu3.classList.toggle("open-menu");
}
function showmenutwo() {
  MAINmenutwo.classList.toggle("open-menu");
  MAINmenu4.classList.toggle("open-menu");
}
