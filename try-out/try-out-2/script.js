form = document.getElementById("soal")
const jawabanBenar = ["36", "2", "6", "547", "35", "1", "127", "1170", "186", "42"];
let score = 0;

function cekJawaban(){
    for(let i = 0; i < jawabanBenar.length; i++){
        if(form[i].value === jawabanBenar[i]){
            score++;
        }
    }
    document.getElementById("submit").style.display = "none";
    document.getElementById("answer-submit").innerHTML = "Jawaban Anda telah dikirim.";
    document.getElementById("reset-nilai").style.display = "flex";
}

function lihatNilai(){
    alert(`Nilai kamu adalah ${((score/jawabanBenar.length)*100)}/100`);
}

function confirmSubmit(){
  if (confirm("Apakah Anda yakin ingin mengumpulkan jawaban Anda?")) {
    cekJawaban();
    clearInterval(interval);
  }
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
      alert("Waktu habis! Jawaban Anda akan dikirimkan");
      cekJawaban();
    }
    timer.innerHTML = `Timer : ${hours}:${minutes}:${seconds}`;
  }, 1000);
