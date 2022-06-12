const btn = document.getElementById("btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.getElementById("close-btn");

btn.addEventListener("click", () => {
    modalOverlay.style.visibility = "visible";
})
closeBtn.addEventListener("click", () => {
    modalOverlay.style.visibility = "hidden";
})