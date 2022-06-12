const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    const btn = question.querySelector(".btn");
    const questionText = question.querySelector(".question__text");

    btn.addEventListener("click", () => {
        questions.forEach(item => {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})

