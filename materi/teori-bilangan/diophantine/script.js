const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

var checkbox = document.querySelector("input[type='checkbox']");
var materiOlim = document.querySelector(".materi-olim");
var container = document.querySelector(".container");
var navUl = document.querySelector(".nav ul");

checkbox.addEventListener("change", function() {
  if(this.checked) {
    container.classList.add("hide");
    navUl.style.display = "grid";
  } else {
    container.classList.remove("hide");
    navUl.style.display = "none";
  }
});

form = document.getElementById("practice-form")
const jawabanBenar = ["0", "2", "49", "3", "10", "12", "0"];

function cekJawaban(){
    let score = 0;
    for(let i = 0; i < jawabanBenar.length; i++){
        if(form[i].value === jawabanBenar[i]){
            document.getElementById(`tanda${i}`).innerHTML = "&#10004;";
            score++;
        }
        else{
            document.getElementById(`tanda${i}`).innerHTML = "&#10006;";
        }
    }
    document.getElementById("submit").style.display = "none";
    document.getElementById("nilai").innerHTML = `Nilai kamu adalah ${((score/jawabanBenar.length)*100).toFixed(2)}/100`;
    document.getElementById("nilai").style.backgroundColor = "rgb(235, 62, 62)"
    document.getElementById("reset-kj").style.display = "flex";
}

function lihatKj(){
    for(let i = 0; i < jawabanBenar.length; i++){
        document.getElementById(`kj${i}`).innerHTML = `Jawaban benar : ${jawabanBenar[i]}`;
    }
}