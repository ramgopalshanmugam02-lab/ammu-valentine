const sections = document.querySelectorAll(".section");
let current = 0;

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");

const reactions = [
  {
    right: "Okay wow 😳 how are you always this perfect, Ammu 💖",
    wrong: "EXCUSE ME 😤 That answer hurt me emotionally… but okay I forgive you 🙄❤️"
  },
  {
    right: "YESSS 💕 You know me too well and it’s kinda scary 😳",
    wrong: "Wrong 😤 I see… so you think I’m mysterious huh? Noted 🙄😂"
  },
  {
    right: "Correct 🥹 This answer was mandatory anyway 😌💘",
    wrong: "HOW DARE YOU 😤 Wrong answer detected. Retrying life… just kidding 😂❤️"
  }
];

function nextSection() {
  sections[current].classList.remove("active");
  current++;
  sections[current].classList.add("active");
}

function answer(isRight, index) {
  popupText.innerText = isRight ? reactions[index].right : reactions[index].wrong;
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
  nextSection();
}

/* NO BUTTON */
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "%";
  noBtn.style.left = Math.random() * 80 + "%";
});

/* SLIDESHOW */
const photos = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg"
];
let p = 0;
const slideImg = document.getElementById("slideshow");

setInterval(() => {
  if (!slideImg) return;
  p = (p + 1) % photos.length;
  slideImg.src = photos[p];
}, 2500);

/* MUSIC */
const music = document.getElementById("bgMusic");
document.addEventListener("click", () => {
  if (music.paused) music.play().catch(()=>{});
}, { once: true });

/* ACCEPT */
function accepted() {
  document.getElementById("finalMessage").innerHTML =
    "YAAAYYY 🥹💖<br><br>Ammu, you just made my heart the happiest ever 💕";
}
