const hamburgerEl = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const closeEl = document.querySelector(".close");

hamburgerEl.addEventListener("click", function () {
  navLinks.classList.add("show");
  hamburgerEl.style.display = "none";
  closeEl.style.display = "block";
});
closeEl.addEventListener("click", function () {
  navLinks.classList.remove("show");

  closeEl.style.display = "none";
});
