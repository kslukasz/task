function createMenuMobile(menu) {
    
    const main = document.createElement("div");
    main.textContent = 'strona główna';
    main.classList.add("mainButtonMobile");
    menu.appendChild(main);

    const service = document.createElement("div");
    service.textContent = 'usługi';
    service.classList.add("mainButtonMobile");
    menu.appendChild(service);

    const about = document.createElement("div");
    about.textContent = 'o nas';
    about.classList.add("mainButtonMobile");
    menu.appendChild(about);

    const contact = document.createElement("div");
    contact.textContent = 'kontakt';
    contact.classList.add("mainButtonMobile");
    menu.appendChild(contact);

    
}
export default createMenuMobile;