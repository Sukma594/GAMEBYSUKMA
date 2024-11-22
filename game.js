const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const gameOverElement = document.getElementById("gameOver");

let skor = 0;
let waktu = 60;
let pertanyaanIndex = 0;

// Daftar soal baru
const soal = [
    // Matematika (Kabata Kur)
    { 
        question: "Berapa hasil dari 25 + 36 × 2 - 18 ÷ 2?", 
        options: ["80", "85", "92", "100"], 
        answer: "92" 
    },
    { 
        question: "Jika (45 ÷ 5) × 3 - 12 = ?", 
        options: ["18", "21", "24", "27"], 
        answer: "21" 
    },

    // Kimia
    { 
        question: "Berapa jumlah proton dalam atom karbon?", 
        options: ["6", "8", "10", "12"], 
        answer: "6" 
    },
    { 
        question: "Apa nama senyawa dengan rumus H₂SO₄?", 
        options: ["Asam klorida", "Asam sulfat", "Asam nitrat", "Asam fosfat"], 
        answer: "Asam sulfat" 
    },

    // Fisika
    { 
        question: "Jika gaya 50 N bekerja pada massa 10 kg, percepatannya adalah?", 
        options: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"], 
        answer: "5 m/s²" 
    },
    { 
        question: "Bunyi merambat lebih cepat melalui?", 
        options: ["Udara", "Air", "Logam", "Hampa udara"], 
        answer: "Logam" 
    },

    // Biologi
    { 
        question: "Organ tubuh manusia yang berfungsi menyaring darah adalah?", 
        options: ["Jantung", "Ginjal", "Paru-paru", "Hati"], 
        answer: "Ginjal" 
    },
    { 
        question: "Dimanakah fotosintesis terjadi dalam sel tumbuhan?", 
        options: ["Vakuola", "Kloroplas", "Dinding sel", "Sitoplasma"], 
        answer: "Kloroplas" 
    },

    // Sejarah
    { 
        question: "Kerajaan Islam pertama di Indonesia adalah?", 
        options: ["Sriwijaya", "Majapahit", "Samudera Pasai", "Demak"], 
        answer: "Samudera Pasai" 
    },
    { 
        question: "Perang Diponegoro terjadi pada tahun?", 
        options: ["1825-1830", "1908-1912", "1945-1949", "1675-1680"], 
        answer: "1825-1830" 
    },

    // Bahasa Inggris
    { 
        question: "Apa antonim dari 'fast'?", 
        options: ["Quick", "Speedy", "Slow", "Swift"], 
        answer: "Slow" 
    },
    { 
        question: "Apa arti dari 'beautiful'?", 
        options: ["Cantik", "Buruk", "Cerdas", "Ramah"], 
        answer: "Cantik" 
    },

    // Bahasa Indonesia
    { 
        question: "Antonim dari 'keras' adalah?", 
        options: ["Lembut", "Cepat", "Bagus", "Buruk"], 
        answer: "Lembut" 
    },
    { 
        question: "Sinonim dari 'bijaksana' adalah?", 
        options: ["Cerdas", "Arogan", "Adil", "Cermat"], 
        answer: "Adil" 
    },

    // Akuntansi
    { 
        question: "Apa itu aset tetap?", 
        options: ["Harta tidak bergerak", "Hutang", "Modal", "Pendapatan"], 
        answer: "Harta tidak bergerak" 
    },
    { 
        question: "Laporan keuangan disusun pada akhir?", 
        options: ["Bulan", "Hari", "Periode", "Tahun"], 
        answer: "Periode" 
    },

    // Statistik
    { 
        question: "Rumus menghitung rata-rata adalah?", 
        options: ["Σxi / n", "Σx / y", "Σn / x", "Σx² / y²"], 
        answer: "Σxi / n" 
    },
    { 
        question: "Jika data muncul paling sering disebut?", 
        options: ["Mean", "Median", "Modus", "Rata-rata"], 
        answer: "Modus" 
    },

    // Manajemen
    { 
        question: "Fungsi manajemen yang pertama adalah?", 
        options: ["Pengorganisasian", "Pengawasan", "Perencanaan", "Pengendalian"], 
        answer: "Perencanaan" 
    },
    { 
        question: "Proses menentukan tujuan perusahaan disebut?", 
        options: ["Organizing", "Controlling", "Directing", "Planning"], 
        answer: "Planning" 
    }
];

// Fungsi lainnya tetap sama seperti sebelumnya
function tampilkanSoal() {
    if (pertanyaanIndex < soal.length) {
        const pertanyaan = soal[pertanyaanIndex];
        questionElement.textContent = pertanyaan.question;

        optionsElement.innerHTML = "";
        pertanyaan.options.forEach((option, index) => {
            const tombol = document.createElement("button");
            tombol.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
            tombol.classList.add("option");
            tombol.onclick = () => periksaJawaban(option);
            optionsElement.appendChild(tombol);
        });
    } else {
        akhiriPermainan();
    }
}

function periksaJawaban(jawaban) {
    if (jawaban === soal[pertanyaanIndex].answer) {
        skor++;
        scoreElement.textContent = skor;
    }
    pertanyaanIndex++;
    tampilkanSoal();
}

function mulaiTimer() {
    const interval = setInterval(() => {
        if (waktu > 0) {
            waktu--;
            timeElement.textContent = waktu;
        } else {
            clearInterval(interval);
            akhiriPermainan();
        }
    }, 1000);
}

function akhiriPermainan() {
    gameOverElement.style.display = "block";
    questionElement.textContent = "Kuis selesai!";
    optionsElement.innerHTML = "";
}

tampilkanSoal();
mulaiTimer();
