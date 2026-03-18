// Cursor glow
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// Search
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const files = document.querySelectorAll(".file");

  files.forEach(file => {
    const text = file.innerText.toLowerCase();
    file.style.display = text.includes(value) ? "flex" : "none";
  });
});

// Copy link
document.querySelectorAll(".actions button").forEach(btn => {
  btn.addEventListener("click", () => {
    const link = btn.getAttribute("data-link");
    navigator.clipboard.writeText(link);
    alert("Đã copy link!");
  });
});

// Ripple effect
document.querySelectorAll(".ripple").forEach(btn => {
  btn.addEventListener("click", function(e) {
    const circle = document.createElement("span");
    circle.classList.add("circle");
    this.appendChild(circle);

    const d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + "px";
    circle.style.left = e.offsetX - d/2 + "px";
    circle.style.top = e.offsetY - d/2 + "px";

    setTimeout(() => circle.remove(), 500);
  });
});

// Load animation
window.addEventListener("load", () => {
  document.querySelectorAll(".file").forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 120);
  });
});