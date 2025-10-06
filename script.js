const search = document.querySelector("#search");
const themeToggle = document.querySelector("#theme-toggle");

// Search filter
search.addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll(".texture-card").forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(term) ? "" : "none";
  });
});

// Dark mode toggle
const setTheme = (dark) => {
  document.body.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
  themeToggle.textContent = dark ? "☀️" : "🌙";
};

// Initialize theme from saved preference
setTheme(localStorage.getItem("theme") === "dark");

// Toggle on click
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  setTheme(!isDark);
});
