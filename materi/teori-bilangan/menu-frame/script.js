const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

var checkbox = document.querySelector("input[type='checkbox']");
var container = document.querySelector(".container");

checkbox.addEventListener("change", function() {
  if(this.checked) {
    container.classList.add("hide");
    navUl.style.display = "grid";
  } else {
    container.classList.remove("hide");
    navUl.style.display = "none";
  }
});