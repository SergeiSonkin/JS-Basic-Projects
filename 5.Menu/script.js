const menuItems = [
    {
        id: 1,
        title: "french toast",
        category: "breakfast",
        price: "$13.55",
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1653934916/Menu/Breakfast/FrenchToast_skbzmr.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quam laboriosam officia ipsam et animi ab asperiores magni aliquam nam"
    },
    {
        id: 2,
        title: "panckakes",
        category: "breakfast",
        price: "$10.50",
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1653934915/Menu/Breakfast/Pancakes_rlyflk.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quam laboriosam officia ipsam et animi ab asperiores magni aliquam nam"
    },
    {
        id: 3,
        title: "porridge with strawberries",
        category: "breakfast",
        price: "$5.99",
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1653934915/Menu/Breakfast/PorridgeWithStrawberries_uxzwvi.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quam laboriosam officia ipsam et animi ab asperiores magni aliquam nam"
    },
    {
        id: 4,
        title: "american pizza",
        category: "lunch",
        price: "$9.99",
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1654128947/Menu/Lunch/Pizza_zy0mm2.webp",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quam laboriosam officia ipsam et animi ab asperiores magni aliquam nam"
    },
    {
        id: 5,
        title: "hamburger americano",
        category: "lunch",
        price: "$7.99",
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1654129042/Menu/Lunch/Hamburger_uzedzh.webp",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quam laboriosam officia ipsam et animi ab asperiores magni aliquam nam"
    },
    {
        id: 6,
        title: "salmon",
        category: "lunch",
        price: "$16.99",
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1654129179/Menu/Lunch/Salmon_bfnppt.webp",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quam laboriosam officia ipsam et animi ab asperiores magni aliquam nam"
    },
    {
        id: 7,
        title: "steak dinner",
        category: "dinner",
        price: "$38.99",
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1654184442/Menu/Dinner/Steak_Dinner_lbuzwz.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quam laboriosam officia ipsam et animi ab asperiores magni aliquam nam"
    },
    {
        id: 8,
        title: "chocolate smoothie",
        category: "drinks",
        price: "$5.99",
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1654185016/Menu/Drinks/ChocolateSmoothie_lidlae.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quam laboriosam officia ipsam et animi ab asperiores magni aliquam nam"
    },
    {
        id: 9,
        title: "fruit smoothie",
        category: "drinks",
        price: "$7.99",
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1654185010/Menu/Drinks/FruitSmoothie_ow1dzv.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quam laboriosam officia ipsam et animi ab asperiores magni aliquam nam"
    },
    {
        id: 10,
        title: "american heritage chocolate",
        category: "drinks",
        price: "$10.55",
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1654184913/Menu/Drinks/AmericanHeritageChocolate_guqeoq.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quam laboriosam officia ipsam et animi ab asperiores magni aliquam nam"
    },
    {
        id: 11,
        title: "mango shake",
        category: "drinks",
        price: "$9.99",
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1654184912/Menu/Drinks/MangoShake_sjzzoe.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quam laboriosam officia ipsam et animi ab asperiores magni aliquam nam"
    },
    {
        id: 12,
        title: "chocolate shake",
        category: "drinks",
        price: "$5.99",
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1654184912/Menu/Drinks/ChocolateShake_d4liyl.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quam laboriosam officia ipsam et animi ab asperiores magni aliquam nam"
    },
];

const menuFood = document.querySelector(".menu__food")
const container = document.querySelector(".menu__btn_container")

window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menuItems);
    displayMenuButtons();
});

const displayMenuItems = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
        return `
        <article class="food__item">
            <img src=${item.img} class="item__image" alt=${item.title} />
            <div class="item">
                <header class="item__header">
                    <h4>${item.title}</h4>
                    <span id="price">${item.price}</span>
                </header>
                <p class="item__desc">
                    ${item.desc}
                </p>
            </div>
        </article> `;
    });

    displayMenu = displayMenu.join("");

    menuFood.innerHTML = displayMenu;
}

const displayMenuButtons = () => {
    const categories = menuItems.reduce(
        (values, item) => {
            if (!values.includes(item.category)) {
                values.push(item.category)
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories.map( category => {
        return `<button class="btn" type="button" data-id=${category}>
        ${category}</button>`;
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".btn");

    filterBtns.forEach( btn => {
        btn.addEventListener("click", e => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menuItems.filter( (menuItem) => {
                if(menuItem.category === category) {
                    return menuItem;
                }
            });

            if(category === "all") {
                displayMenuItems(menuItems);
            } else {
                displayMenuItems(menuCategory);
            }
        })
    })
}
