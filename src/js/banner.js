const bannerText = document.getElementById("banner-text");
const messages = [
  "Verified & Tested",
  "No Blocks",
  "Limited Stock Available"
];

let index = 0;

function rotateBanner() {
  bannerText.textContent = messages[index];
  index = (index + 1) % messages.length;
}

// Cambia cada 2 segundos (2000ms)
setInterval(rotateBanner, 2000);
