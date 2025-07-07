function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show-nav");
}

// Close menu on clicking any link (optional)
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("nav-links").classList.remove("show-nav");
    });
  });
});
