const title = document.getElementById("title");

const colors = ["#ff4655", "#ff8a65", "#ffc107", "#4fc3f7", "#ab47bc"];
let index = 0;

setInterval(() => {
  title.style.color = colors[index];
  title.style.textShadow = `0 0 10px ${colors[index]}, 0 0 20px ${colors[index]}`;
  index = (index + 1) % colors.length;
}, 1500);

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
});

