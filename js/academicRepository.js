const buttons = document.querySelectorAll(".filter-btn");
const panels = document.querySelectorAll(".resource-card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));

    panels.forEach((panel) => panel.classList.remove("active"));

    button.classList.add("active");

    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});
