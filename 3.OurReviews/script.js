const leftButton = document.querySelector(".reviews__leftButton");
const rightButton = document.querySelector(".reviews__rightButton");

let image = document.querySelector(".image");
let fullName = document.querySelector(".fullName");
let description = document.querySelector(".description");
let currentItem = 0;

const profiles = [
    {
        id: 0,
        image: "https://res.cloudinary.com/dojufipq9/image/upload/v1655023741/JS-Basic-Projects/3.OurReviews/Akasuki_kqe9lb.jpg",
        fullName: "Akane Chan",
        description: "Eum at soluta facilis recteque. Semper prodesset intellegebat cu pri. Ius augue invidunt ad, eu agam rebum electram pro. Ei sed prompta debitis."
    },
    {
        id: 1,
        image: "https://res.cloudinary.com/dojufipq9/image/upload/v1655023745/JS-Basic-Projects/3.OurReviews/John_pmuwj5.jpg",
        fullName: "John Marshall",
        description: "Et dolorem convenire nec, ad mel meliore laboramus conclusionemque."
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dojufipq9/image/upload/v1655023741/JS-Basic-Projects/3.OurReviews/Martha_me2rmc.jpg",
        fullName: "Martha Clam",
        description: "Eum at soluta facilis recteque. Semper prodesset intellegebat cu pri. Ius augue invidunt ad."
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dojufipq9/image/upload/v1655023744/JS-Basic-Projects/3.OurReviews/Victor_nnqswa.jpg",
        fullName: "Vicor Berezov",
        description: "Eum at soluta facilis recteque. Semper prodesset intellegebat cu pri. Ius augue invidunt ad."
    },
]

window.addEventListener("DOMContentLoaded", () => {
    const item = profiles[currentItem];
    image.src = item.image;
    fullName.textContent = item.fullName;
    description.textContent = item.description;
    switcher();
})

const switcher = () => {
    rightButton.addEventListener("click", () => {
        if (currentItem == 3) {
            currentItem = -1;
        }
        currentItem++;
        image.src = profiles[currentItem].image
        fullName.textContent = profiles[currentItem].fullName;
        description.textContent = profiles[currentItem].description;
    });
    leftButton.addEventListener("click", () => {
        if (currentItem < 1) {
            currentItem = 4;
        }
        currentItem--;
        image.src = profiles[currentItem].image;
        fullName.textContent = profiles[currentItem].fullName;
        description.textContent = profiles[currentItem].description;
    })
}