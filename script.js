/* MUSIC PLAY ON FIRST CLICK */
const music = document.getElementById("bgMusic");

document.addEventListener("click", () => {
  if (music.paused) {
    music.play().catch(() => {});
  }
}, { once: true });

/* SECTION SWITCH */
function nextSection() {
  document.getElementById("section1").classList.remove("active");
  document.getElementById("section2").classList.add("active");
}

/* SHOW MODAL */
function showModal() {
  document.getElementById("proposalModal").style.display = "flex";
}

/* RUNAWAY NO BUTTON */
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "%";
  noBtn.style.left = Math.random() * 80 + "%";
});

/* ACCEPTED MESSAGE */
function accepted() {
  document.getElementById("finalMessage").innerHTML =
    "YAAAYYY 🥹💖<br><br>" +
    "Ammu, congratulations 🎉<br>" +
    "You have officially signed up for unlimited care, random jokes, stolen food, and a lifetime supply of love 😌💕<br><br>" +
    "Happy Valentine’s Day ❤️";
}

/* PHOTO SLIDESHOW */
const photos = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg"
];

let currentPhoto = 0;
const slideImg = document.getElementById("slideshow");

setInterval(() => {
  currentPhoto = (currentPhoto + 1) % photos.length;
  slideImg.style.opacity = 0;
  setTimeout(() => {
    slideImg.src = photos[currentPhoto];
    slideImg.style.opacity = 1;
  }, 400);
}, 2500);
