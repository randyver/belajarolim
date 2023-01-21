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

form = document.getElementById("soal")
const jawabanBenar = ["4044", "7", "735", "4", "194", "7", "6", "16", "109", "622"];
let score = 0;

function isSubmit(){
  Swal.fire({
          title: "Submit",
          text: "Apakah Anda yakin ingin mengumpulkan jawaban Anda?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Iya',
          cancelButtonText: 'Tidak'
      }).then((result) => {
          if (result.value) {
              isTerkirim();
              clearInterval(interval);
          }else{
             Swal.close();
          }
      })
}

function isTerkirim() {
  Swal.fire(
    'Success!',
    'Jawaban Anda telah terkirim!',
    'success'
  )
  cekJawaban();
}

function cekJawaban(){
    for(let i = 0; i < jawabanBenar.length; i++){
        if(form[i].value === jawabanBenar[i]){
            score++;
        }
    }
    document.getElementById("submit").style.display = "none";
    document.getElementById("reset-nilai").style.display = "flex";
}

function lihatNilai(){
    Swal.fire({
      title: `Nilai kamu adalah ${((score/jawabanBenar.length)*100)}/100`
    })
}

const timer = document.getElementById("timer");
let hours = 01;
let minutes = 00;
let seconds = 00;
let interval = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      minutes--;
      seconds = 59;
    }
    if (minutes < 0) {
      hours--;
      minutes = 59;
    }
    if (hours === 0 && minutes === 0 && seconds ===0){
      clearInterval(interval);
      Swal.fire(
        "Waktu habis! Jawaban Anda akan dikirimkan"
      )
      cekJawaban();
    }
    timer.innerHTML = `Timer : ${hours}:${minutes}:${seconds}`;
  }, 1000);