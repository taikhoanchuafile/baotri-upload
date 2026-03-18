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
  document.querySelectorAll(".file").forEach(file => {
    file.style.display = file.innerText.toLowerCase().includes(value)
      ? "flex"
      : "none";
  });
});

// Copy link + toast
function showToast(msg) {
  const toast = document.createElement("div");
  toast.innerText = msg;
  toast.className = "toast";
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

document.querySelectorAll(".actions button").forEach(btn => {
  btn.addEventListener("click", () => {
    const link = btn.dataset.link;
    navigator.clipboard.writeText(link);
    showToast("Đã copy link!");
  });
});

// Ripple
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
    setTimeout(() => el.classList.add("show"), i * 120);
  });
});

// 3D hover từng file
document.querySelectorAll(".file").forEach(file => {
  file.addEventListener("mousemove", (e) => {
    const rect = file.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y - rect.height / 2) / 10;
    const rotateY = (rect.width / 2 - x) / 10;

    file.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  file.addEventListener("mouseleave", () => {
    file.style.transform = "";
  });
});