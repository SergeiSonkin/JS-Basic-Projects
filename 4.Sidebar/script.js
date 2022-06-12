const sidebar = document.querySelector(".sidebar")
const btn = document.getElementById("btn");

let count = 0;

btn.addEventListener("click", () => {
    if(count === 0) {
        sidebar.style.transform = ("translate(0)");
        count++;
    } else if(count > 0) {
        sidebar.style.transform = ("translate(-100%)");
        count = 0;
    }
})

