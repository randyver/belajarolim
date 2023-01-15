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
  } else {
    container.classList.remove("hide");
  }
});

form = document.getElementById("soal")
const jawabanBenar = ["36", "2", "6", "547", "35", "1", "127", "1170", "186", "42"];
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