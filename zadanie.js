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
    menu.classList.add("mobileMenuContent" , "visible");
    createMenuMobile(menu)
    div.appendChild(menu);
    div.addEventListener("click", ()=> menuMobile(menu));
}

function menuMobile(menu) {
  menu.classList.toggle("visible");
}


function startApp() {
    if (window.innerWidth > 950) {
        header();
        sectionView(data);
    } else {
        headerMobile(head);
        sectionMobile(data);
       
    }
}
startApp();
