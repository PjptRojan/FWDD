document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-card");
  const loadMoreBtn = document.querySelector(".btn-load-more");
  const viewLessBtn = document.querySelector(".btn-view-less");

  const VISIBLE_COUNT = 6;

  // Function to show only first 6 projects
  const showInitialProjects = () => {
    projects.forEach((project, index) => {
      project.style.display = index < VISIBLE_COUNT ? "flex" : "none";
    });
  };

  // Initial state
  showInitialProjects();
  viewLessBtn.style.display = "none";

  loadMoreBtn.addEventListener("click", () => {
    projects.forEach((project) => {
      project.style.display = "flex";
    });

    loadMoreBtn.style.display = "none";
    viewLessBtn.style.display = "flex";
  });

  viewLessBtn.addEventListener("click", () => {
    showInitialProjects();

    viewLessBtn.style.display = "none";
    loadMoreBtn.style.display = "flex";
  });
});
