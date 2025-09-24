 const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Live Clock (Nairobi Time)
function updateClock() {
  const clock = document.getElementById("footer-clock");
  const now = new Date();
  const options = {
    timeZone: "Africa/Nairobi",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  clock.textContent = `⏰ ${now.toLocaleTimeString("en-GB", options)} (Nairobi)`;
}

setInterval(updateClock, 1000);
updateClock();
