const pituus = document.querySelector(".pituus-value");
const leveys = document.querySelector(".leveys-value");
pituus.textContent = window.innerHeight + "px";
leveys.textContent = window.innerWidth + "px";

window.addEventListener("resize", function () {
  pituus.textContent = window.innerHeight + "px";
  leveys.textContent = window.innerWidth + "px";
});
