document.addEventListener("DOMContentLoaded", function() {
  const btnColor = document.getElementById("colorBtn");
  const btnFont = document.getElementById("fontBtn");
  const title = document.querySelector("h1");

  // Color change
  btnColor.addEventListener("click", function() {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    title.style.color = color;
  });

  // Font change
  const fonts = ["Arial", "Georgia", "Courier New", "Verdana", "Times New Roman"];
  let index = 0;
  btnFont.addEventListener("click", function() {
    index = (index + 1) % fonts.length;
    title.style.fontFamily = fonts[index];
  });
});
