const slide = document.getElementById("slide");
conts mainContent = document.getElementById("main-content");
const toggleBtn = document.getElementById("toggle");

toggleBtn.onclick = function() {
    slide.classList.toggle("open");
    mainContent.classList.toggle("open");
}