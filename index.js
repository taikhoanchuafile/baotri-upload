/* Search */
function searchFile() {
  const input = document.getElementById("search").value.toLowerCase();
  const files = document.querySelectorAll(".file");

  files.forEach(file => {
    const name = file.innerText.toLowerCase();
    file.style.display = name.includes(input) ? "flex" : "none";
  });
}

/* Copy */
function copyLink(link) {
  navigator.clipboard.writeText(link);
  alert("Đã copy link!");
}

/* Cursor glow */
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

/* Ripple effect */
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

/* Load animation */
window.addEventListener("load", () => {
  document.querySelectorAll(".file").forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 120);
  });
});
