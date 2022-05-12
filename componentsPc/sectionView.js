const section = document.querySelector(".section");
function sectionView(data) {
    console.log(data);
    const divMain = document.createElement("div");
    divMain.classList.add("sectionView");
    section.appendChild(divMain);

    const image = document.createElement("img");
    image.src = "img/image.png";
    divMain.appendChild(image);

    const pStart = document.createElement("p");
    pStart.textContent = 'Start your journey with Ivision';
    pStart.classList.add("start");
    divMain.appendChild(pStart);

    const pContent = document.createElement("p");
    pContent.textContent = "Nice to meet you. Let's work together!";
    pContent.classList.add("content");
    divMain.appendChild(pContent);

    const button = document.createElement("button");
    button.textContent = "Find a perfect job";
    button.classList.add("buttonBox");
    divMain.appendChild(button);

    button.addEventListener("click", ()=> createLightBox(data) )


    const divAside = document.createElement("div");
    divAside.classList.add("sectionAside");
    section.appendChild(divAside);

    const imageAside = document.createElement("img");
    imageAside.src = "img/PNG_Global.png";
    divAside.appendChild(imageAside);

    const companyName = document.createElement("p");
    companyName.textContent = "IVN Sp. z o.o."
    companyName.classList.add("companyName");
    divAside.appendChild(companyName);

    const companyAdress = document.createElement("p");
    companyAdress.textContent = "Wieniawskiego 66/2 31-436 Kraków, Polska tel: +48 12 44 55 840 praca@ivision.pl"
    companyAdress.classList.add("companyAdress");
    divAside.appendChild(companyAdress);
}


function createLightBox(data) {
    const backgroundColor =  document.createElement("div");    
    backgroundColor.classList.add("backgroundBox");
    document.body.appendChild(backgroundColor);

    const lightBox = document.createElement("div");    
    lightBox.classList.add("lightBox");
    document.body.appendChild(lightBox);

    const title = document.createElement("div");
    title.textContent = "We're looking for"
    title.classList.add("title");
    lightBox.appendChild(title);
    
    const deleteButton = document.createElement("div");
    deleteButton.textContent = "X"
    deleteButton.classList.add("delete");
    lightBox.appendChild(deleteButton);

    data.forEach((element , i) => {
        const task = document.createElement("div");
        task.classList.add("task");
        lightBox.appendChild(task);

        const spanName = document.createElement("span");
        spanName.textContent = element.name;
        spanName.classList.add("spanName");
        lightBox.appendChild(spanName);

        const spanCity = document.createElement("span");
        spanCity.textContent = element.city;
        spanCity.classList.add("spanCity");
        lightBox.appendChild(spanCity);
    })

    deleteButton.addEventListener("click", ()=> {
        backgroundColor.remove();
        lightBox.remove();
    })
}


export default sectionView;