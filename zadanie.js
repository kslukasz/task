import sectionView from "./componentsPc/sectionView.js";
import header from "./componentsPc/header.js"
import sectionMobile from "./componentsMobile/sectionMobile.js"
import createMenuMobile from "./componentsMobile/createMobileMenu.js"

const head = document.querySelector(".head");


const data = [{
        name: "Product Designer",
        city: "Cracow",
    },
    {
        name: "Front-End Developer",
        city: "San Francisco",
    },
    {
        name: "Senior Back-End Developer",
        city: "San Francisco",
    },
    {
        name: "UX Senior Designer",
        city: "Cracow",
    }
];

// 

function headerMobile(head) {
    head.style.borderBottom = "none";
    const div = document.createElement("div");
    // div.textContent = 'menu';
    div.classList.add("mobileMenu");
    head.appendChild(div);
    const menu = document.createElement("div");
    menu.classList.add("mobileMenuContent", "visible");
    createMenuMobile(menu)
    div.appendChild(menu);
    div.addEventListener("click", () => menuMobile(menu));
}

function menuMobile(menu) {
    menu.classList.toggle("visible");
}


function startApp() {
    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    // console.log(isMobile.any());


    if (isMobile.any()) {
        headerMobile(head);
        sectionMobile(data);
    } else {
        header();
        sectionView(data);

    }
}
startApp();