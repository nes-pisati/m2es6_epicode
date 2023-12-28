function createH1(){
    const shopNameDiv = document.createElement("div");
    const shopNameH1 = document.createElement("h1");
    shopNameH1.classList.add("shop-name-h1");
    shopNameH1.textContent = "Benvenuto su Amazon";
    shopNameH1.onmouseover = function(){
        shopNameH1.textContent= "Continua i tuoi acquisti!"
    };

    shopNameDiv.append(shopNameH1);
    document.body.append(shopNameDiv); 
}

createH1(); 

function renderProducts(){
    const container = document.createElement("div");
    container.classList.add("product-container");
    products.forEach((product) => {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card");
        const title = document.createElement("h2");
        title.textContent = product.title;

        const image = document.createElement("img");
        image.src = product.image;
        image.classList.add("card-image");

        const description = document.createElement("p");
        description.textContent = product.description;

        const price = document.createElement("p");
        price.classList.add("price-text");
        price.textContent = product.price;
        price.addEventListener("click", function(){
            price.style.color = "red";
        })

        const link = document.createElement("a");
        link.classList.add("product-link");
        link.href = product.link;
        link.target = "_blank";
        link.textContent = "Scopri di più";

        const input = document.createElement("input");
        input.classList.add("input-field");
        input.type = "text";

        const button = document.createElement("button");
        button.classList.add("card-button");
        button.textContent = "Aggiungi commento";

        cardContainer.append(title, image, description, price, link, input, button);
        container.append(cardContainer);
    });

    document.body.append(container);
}

renderProducts();

function renderFooter(){
    const footer = document.createElement("footer");
    footer.classList.add("footer-container");

    const containerName = document.createElement("div");
    containerName.classList.add("footer-name");
    containerName.textContent = footerData.name;

    const footerLink = document.createElement("a");
    footerLink.href = footerData.link;
    footerLink.classList.add("footer-link");
    footerLink.target = "_blank";
    footerLink.textContent = "visita il sito";

    const footerButton = document.createElement("button");
    footerButton.classList.add("footer-button");
    footerButton.textContent = "Night Mood";
    footerButton.addEventListener("click", function nightMood(){
        document.body.style.backgroundColor = "black";
        const name = document.querySelector("h1");
        name.style.color = "white";
        footerButton.textContent = "Day Mood";
    })

    footer.append(footerButton, containerName, footerLink);

    document.body.append(footer)
}

renderFooter(); 

function footerLinkReplace() {
    const footerLink = document.querySelector(".footer-link");
    footerLink.href = "https://www.ebay.it";
}

footerLinkReplace();


function addComment(){
    let comments = [];
    const inputField = document.querySelectorAll("input-field");
    const button = document.getElementsByClassName("card-button")
    console.log(button);
    /*button.addEventListener("click", ()=> {
        if (inputField.value===""){
            alert("Per favore inserisci un commento");
        } else {
                comments.push(inputField.value);
                console.log(comments);
            };
    })*/
};

addComment();