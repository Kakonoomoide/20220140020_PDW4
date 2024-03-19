// Temukan tombol "okey"
const okeyButton = document.querySelector(".allertbtn");

// Temukan pop-up alert
const alertBox = document.querySelector(".allert");

// Tambahkan event listener untuk tombol "okey"
okeyButton.addEventListener("click", function () {
  const containerElement = document.querySelector(".container");
  containerElement.classList.remove("blur");
  const allertElement = document.querySelector(".allert");
  allertElement.style.display = "none";
});

const motivation = [
  "Masalah itu kayak lagu, pasti ada reffnya di akhir.",
  "Hidup ini kayak jalan raya, ada belokan tajam tapi pasti ada lurusnya.",
  "Gagal itu biasa, yang penting bangkit lagi.",
  "Biar airmata jatuh, yang penting semangat tetap naik motor.",
  "Kehilangan itu kayak kena tilang, awalnya emosi tapi lama-lama terbiasa.",
  "Kegagalan itu kayak GPS, kadang ngajak muter-muter dulu sebelum sampe.",
  "Kalau hati lagi down, ingat aja, langit aja bisa cerah lagi.",
  "Jangan nyerah sebelum kita berhasil, hidup ini kan bukan balapan.",
  "Saat susah itu tantangan, bukan jalan buntu.",
  "Tetap semangat, hidup ini bukan adegan terakhir kita.",
];

// Function to generate a random motivational quote
function generateRandomMotivation() {
  const randomIndex = Math.floor(Math.random() * motivation.length);
  return motivation[randomIndex];
}

// Update the Motivation element with a random quote periodically
document.addEventListener("DOMContentLoaded", function () {
  const motivationElement = document.getElementById("Motivation");

  // Set an initial quote when the page loads
  motivationElement.textContent = generateRandomMotivation();

  // Update the quote every 5 seconds (5000 milliseconds)
  setInterval(function () {
    motivationElement.textContent = generateRandomMotivation();
  }, 10000); // Change 5000 to the desired interval in milliseconds
});
