const head = document.querySelector(".head");

function header() {
    const divLogo = document.createElement("div");
    divLogo.textContent = 'www.invision.pl';
    divLogo.classList.add("linkIvision");
    head.appendChild(divLogo);

    const divButtons = document.createElement("div");
    divButtons.classList.add("buttons");
    head.appendChild(divButtons);
    menuButtons(divButtons);
}

function menuButtons(divButtons) {
    const main = document.createElement("div");
    main.textContent = 'strona główna';
    main.classList.add("mainButton");
    divButtons.appendChild(main);

    const service = document.createElement("div");
    service.textContent = 'usługi';
    service.classList.add("mainButton");
    divButtons.appendChild(service);

    const about = document.createElement("div");
    about.textContent = 'o nas';
    about.classList.add("mainButton");
    divButtons.appendChild(about);

    const contact = document.createElement("div");
    contact.textContent = 'kontakt';
    contact.classList.add("mainButton");
    divButtons.appendChild(contact);

    const facebook = document.createElement("img");
    facebook.src = "img/facebook.png";
    facebook.classList.add("mainButton");
    divButtons.appendChild(facebook);

    const instagram = document.createElement("img");
    instagram.src = "img/instagram.png";
    instagram.classList.add("mainButton");
    divButtons.appendChild(instagram);
}
export default header;