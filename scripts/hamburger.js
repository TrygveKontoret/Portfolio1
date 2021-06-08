const hamburger = document.querySelector(".hamburger");
const hamburgerActive = document.querySelector(".hamburger-inactive");

hamburger.addEventListener("click", function() {
    hamburgerActive.classList.toggle("hamburger-active");
});