const currentPage = window.location.pathname.split("/").pop() || "index.html";
console.log('currentPage', currentPage)

document.querySelectorAll(".nav-link").forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});