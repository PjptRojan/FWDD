document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentItem = button.closest(".faq-item");

      // Remove active class from all faq items
      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== currentItem) {
          item.classList.remove("active");
        }
      });

      // Toggle active class on clicked item
      currentItem.classList.toggle("active");
    });
  });
});
