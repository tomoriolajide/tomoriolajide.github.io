const hamburgerEl = document.getElementById("hamburger");
const workEl = document.getElementById("work");
const closeBtn = workEl.querySelector(".higher");
const bluwey = document.querySelectorAll(".slap");

hamburgerEl.addEventListener("click", function () {
  hamburgerEl.style.display = "none";
  workEl.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  hamburgerEl.style.display = "block";
  workEl.style.display = "none";
});

bluwey.forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.toggle("bordered");
  });
});
