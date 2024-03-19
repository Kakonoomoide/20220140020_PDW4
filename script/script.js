// variabel untuk menyimpan jumlah klik
var clickCount = 0;

// Array of quotes
const quotes = [
  "Dalam hening senja, aku menemukan perpisahan kita. Angin berbisik, dan hatiku menangis. Senyummu tergores dalam kenangan, menyisakan luka yang tak terhapuskan.",
  "Di antara senyap malam, aku meratapi kehilangan. Bintang-bintang menyaksikan kesedihan yang terpendam. Setiap hembusan angin mengingatkan akan rindu yang tak terobati.",
  "Hujan turun membasahi bumi, mencerminkan kesedihan hatiku yang terluka. Setiap tetes air mengingatkan akan kepergianmu, meninggalkan aku dalam kesendirian yang menyiksa.",
  "Pada setiap senja yang berlalu, aku terpaku dalam kehampaan. Langit memerah menandakan perpisahan yang tak terelakkan. Hatiku remuk, merindukanmu dalam sunyi yang menyiksa.",
  "Di balik senyum palsu, terselip luka yang tak terungkapkan. Setiap tawa menggetarkan hati yang rapuh. Aku berjalan sendiri, dalam kegelapan yang menyelimuti.",
  "Ketika malam tiba, kesepian menghampiri hatiku. Aku terjebak dalam kegelapan, meratapi kehilangan yang tak terucapkan.",
  "Hati ini seperti kapal yang terombang-ambing di lautan kesedihan. Aku berlayar sendiri, mencari tempat perlindungan dalam badai emosi.",
  "Di antara reruntuhan cinta yang hancur, aku berdiri dengan hati yang penuh luka. Mimpi-mimpi indah kini hanyalah kenangan yang terluka.",
  "Dalam keheningan malam, suara tangisanku bergema. Aku terhanyut dalam aliran kesedihan, mencari cahaya di tengah kegelapan yang tak berujung.",
  "Setiap detik berlalu seperti pisau yang menusuk jiwaku. Aku terjebak dalam labirin kesendirian, tanpa arah dan tanpa harapan.",
];

// Function to generate a random quote
function generateRandomQuote() {
  clickCount++;
  // Get a random index
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // Get the quote corresponding to the random index
  const randomQuote = quotes[randomIndex];
  // Display the quote on the webpage
  document.getElementById("quote").textContent = randomQuote;

  if (clickCount === 10) {
    showNotification();
    clickCount = 0;
  }
}

// Event listener for the refresh button
document
  .getElementById("refreshButton")
  .addEventListener("click", generateRandomQuote);

// Generate a random quote when the page loads
generateRandomQuote();

function showNotification() {
  // Menambahkan blur ke container
  const containerElement = document.querySelector(".container");
  containerElement.classList.add("blur");
  containerElement.style.zIndex = "1";
  // Menampilkan elemen alert
  const alertElement = document.querySelector(".allert");
  alertElement.style.display = "block";
  alertElement.style.zIndex = "2";
}

window.onload = function () {
  var audio = document.getElementById("myAudio");

  function handleVisibilityChange() {
    if (document.hidden) {
      // Jika tab web tidak terlihat, jeda pemutaran audio
      audio.pause();
    } else {
      // Jika tab web kembali terlihat, lanjutkan pemutaran audio
      audio.play();
    }
  }

  // Panggil fungsi handleVisibilityChange saat halaman dimuat
  handleVisibilityChange();

  // Tambahkan pendengar acara visibilitychange ke objek dokumen
  document.addEventListener("visibilitychange", handleVisibilityChange);

  // Code untuk memainkan audio
  audio.autoplay = true;
  audio.loop = true;
};

// Panggil fungsi handleVisibilityChange saat halaman dimuat
document.addEventListener("DOMContentLoaded", handleVisibilityChange);

// Tambahkan pendengar acara visibilitychange ke objek dokumen
document.addEventListener("visibilitychange", handleVisibilityChange);
