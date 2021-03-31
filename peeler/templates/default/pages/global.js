import BarfyStars from "https://cdn.skypack.dev/wtc-barfystars";

const barfTitle = new BarfyStars(document.querySelector("h1"));

for (let i = 0; i < 3; i++) {
  setInterval(() => {
    barfTitle.barf();
  }, i * 1000);
}
