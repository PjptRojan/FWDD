document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobileNav");
  const overlay = document.getElementById("navOverlay");

  if (!menuToggle || !mobileNav || !overlay) return;

  // Open / Close sidebar
  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
    overlay.classList.toggle("show");
  });

  // Close when clicking overlay
  overlay.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    overlay.classList.remove("show");
  });

  // Close sidebar when a link is clicked (better UX)
  mobileNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      overlay.classList.remove("show");
    });
  });
});
