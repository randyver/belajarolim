form = document.getElementById("practice-form")
const jawabanBenar = ["21", "10", "50", "9"];

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
    document.getElementById("nilai").innerHTML = `Nilai kamu adalah ${((score/jawabanBenar.length)*100)}/100`;
    document.getElementById("nilai").style.backgroundColor = "rgb(235, 62, 62)"
    document.getElementById("reset-kj").style.display = "flex";
}

function lihatKj(){
    for(let i = 0; i < jawabanBenar.length; i++){
        document.getElementById(`kj${i}`).innerHTML = `Jawaban benar : ${jawabanBenar[i]}`;
    }
}