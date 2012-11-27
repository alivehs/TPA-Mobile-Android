//meng-inisialisasikan variable
var jml_pertanyaan = 20;
var jml_pilihan = 5;
var jawaban = new Array(20);

//pemberian nilai jawaban yang benar
jawaban[0] = "a";
jawaban[1] = "c";
jawaban[2] = "b";
jawaban[3] = "d";
jawaban[4] = "b";
jawaban[5] = "d";
jawaban[6] = "a";
jawaban[7] = "d";
jawaban[8] = "b";
jawaban[9] = "c";
jawaban[10] = "a";
jawaban[11] = "b";
jawaban[12] = "e";
jawaban[13] = "a";
jawaban[14] = "d";
jawaban[15] = "b";
jawaban[16] = "a";
jawaban[17] = "e";
jawaban[18] = "d";
jawaban[19] = "b";

//fungsi mendapatkan nilai 
function getNilai() {
form = document.getElementById("quiz");
var nilai = 0;
var jwBenar = 0;
var jwSalah = 0;
var currElt;
var currSelection;
for (i=0; i<jml_pertanyaan; i++) {
	currElt = i*jml_pilihan;
		for (j=0; j<jml_pilihan; j++) {
			currSelection = form.elements[currElt + j];
			if (currSelection.checked) {
				if (currSelection.value == jawaban[i]) {
				nilai++;
				break;
				}
			}
		}
	}
	jwBenar = nilai;
	nilai = Math.round(nilai/jml_pertanyaan*100);

	if (nilai == 0){
	alert("Maaf, Anda harus belajar lebih giat lagi");
	}

form.totNilai.value = nilai + " %";
form.jwBenar.value = jwBenar + " dari "+ jml_pertanyaan + " soal";
}

var soalsekarang = 0;
var hitungmundur = 0;
var waktumengerjakan = 0;

//Fungsi timer pada masing-masing soal
function timersoal(){
	var waktusecon = hitungmundur/1000;
	var menit = Math.floor(waktusecon/60);
	var detik = waktusecon-(menit*60);
	if (detik < 10){detik = "0"+detik;}
	waktumengerjakan = "0"+menit+":"+detik;
	document.getElementById("quiz").waktu.value = waktumengerjakan;
	if (hitungmundur == 0) {
		if (soalsekarang != 0){
		document.getElementById("soal"+soalsekarang.toString()).style.display="none";
		}
		soalsekarang++;
		if (soalsekarang < 21) {
			document.getElementById("soal"+soalsekarang.toString()).style.display="block";
			hitungmundur = 30000;
			setTimeout("timersoal()",1000);
		} else {
			document.getElementById("timer").style.display="none";
			document.getElementById("divlanjut").style.display="none";
			document.getElementById("nilai").style.display="block";
			getNilai();
		}
	} else {
		hitungmundur -= 1000;
		setTimeout("timersoal()",1000);
	}
}
//
function soalLanjut(){
	hitungmundur = 0;
}
