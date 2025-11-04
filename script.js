// When the page loads
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("colorBtn");
  const title = document.querySelector("h1");

  btn.addEventListener("click", function() {
    // Pick a random color each time you click
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    title.style.color = color;
  });
});

