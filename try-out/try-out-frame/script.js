const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

var checkbox = document.querySelector("input[type='checkbox']");
var container = document.querySelector(".container");
var navUl = document.querySelector(".nav ul")

checkbox.addEventListener("change", function() {
  if(this.checked) {
    container.classList.add("hide");
    navUl.style.display = "grid";
  } else {
    container.classList.remove("hide");
    navUl.style.display = "none";
  }
});

function isMulai(element){
    const url = element.getAttribute("data-href");
    Swal.fire({
            title: "Mulai Try Out",
            text: "Apakah Anda ingin mulai mengerjakan Try Out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya',
            cancelButtonText: 'Tidak'
        }).then((result) => {
            if (result.value) {
                window.location.href = url;
            }else{
               Swal.close();
            }
        })
}