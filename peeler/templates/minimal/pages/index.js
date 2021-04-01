import BarfyStars from "https://cdn.skypack.dev/wtc-barfystars";

const barfTitle = new BarfyStars(document.querySelector("h1"));

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    barfTitle.barf();
  }, i * 800);
}
