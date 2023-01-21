const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

var checkbox = document.querySelector("input[type='checkbox']");
var navUl = document.querySelector(".nav ul");
var container = document.querySelector(".container");

checkbox.addEventListener("change", function() {
  if(this.checked) {
    navUl.style.display = "grid";
    container.classList.add("hide");
  } else {
    navUl.style.display = "none";
    container.classList.remove("hide");
  }
});