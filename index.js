const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const closeBtn = document.querySelector(".close");

console.log(close.style);

hamburger.onclick = () => {
  navbar.classList.add("open");
  hamburger.classList.add("hide");
  closeBtn.classList.add("show");
};
