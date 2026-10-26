document.addEventListener("DOMContentLoaded", () => {
  const currentYear = String(new Date().getFullYear());

  document.querySelectorAll("[data-current-year]").forEach((yearElement) => {
    yearElement.textContent = currentYear;
  });
});
