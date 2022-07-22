const links = document.querySelectorAll(".menu-nav ul li a");
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        let newData = link.textContent !== "Todos" ? data.filter(product => product.tag[0].includes(link.textContent)) : data;
       showProducts(newData);
    });
});
function createCard(product) {
    const tagLi = document.createElement("li");
    const productImg = document.createElement("img");
    const productInfo = document.createElement("div");
    const productCategory = document.createElement("div");
    const productTitle = document.createElement("h2");
    const productDescription = document.createElement("p")
    const productPrice = document.createElement("p");
    const productButton = document.createElement("button");
    tagLi.classList.add("product");
    productImg.src = product.img;
    productImg.classList.add("product-img");
    productInfo.classList.add("product-info");
    productCategory.classList.add("product-category");
    productTitle.classList.add("product-title");
    productDescription.classList.add("product-description");
    productPrice.classList.add("product-price");
    productButton.classList.add("product-button");
    productTitle.innerText = product.nameItem;
    productDescription.innerText = product.description;
    productPrice.innerText = `R$ ${product.value}`;
    productButton.innerText = product.addCart;
    productCategory.innerHTML = `<h5>${product.tag[0]}</h5>`;
    productInfo.appendChild(productCategory);
    productInfo.appendChild(productTitle);
    productInfo.appendChild(productDescription);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productButton);
    tagLi.appendChild(productImg);
    tagLi.appendChild(productInfo);
    tagLi.addEventListener("click", (e) => {
        if(e.target.classList.contains("product-button")) {
            const shoppingCartContent = document.querySelector(".shopping-cart-content");
            shoppingCartContent.appendChild(createCartItem(e.currentTarget));
            showShoppingCartInfo();
        }
    })
    return tagLi;
}
function showProducts(database) {
    const products = document.querySelector(".products");
    products.innerHTML = "";
    database.forEach((product) => {
        products.appendChild(createCard(product));
    }
    );
    return "Atualiza a vitrine";
}
function createCartItem(card) {
    const tagLi = document.createElement("li");
    const shoppingCartItemImg = document.createElement("img");
    const shoppingCartItemInfo = document.createElement("div");
    const shoppingCartItemTitle = document.createElement("h3");
    const shoppingCartItemPrice = document.createElement("p");
    const shoppingCartItemButton = document.createElement("button");
    tagLi.classList.add("shopping-cart-item");
    shoppingCartItemImg.src = card.querySelector(".product-img").src;
    shoppingCartItemImg.classList.add("shopping-cart-item-img");
    shoppingCartItemInfo.classList.add("shopping-cart-item-info");
    shoppingCartItemTitle.classList.add("shopping-cart-item-title");
    shoppingCartItemPrice.classList.add("shopping-cart-item-price");
    shoppingCartItemButton.classList.add("shopping-cart-item-button");
    shoppingCartItemTitle.innerText = card.querySelector(".product-title").innerText;
    shoppingCartItemPrice.innerText = `${card.querySelector(".product-price").innerText}`;
    shoppingCartItemButton.innerText = "Remover produto";
    shoppingCartItemInfo.appendChild(shoppingCartItemTitle);
    shoppingCartItemInfo.appendChild(shoppingCartItemPrice);
    shoppingCartItemInfo.appendChild(shoppingCartItemButton);
    tagLi.appendChild(shoppingCartItemImg);
    tagLi.appendChild(shoppingCartItemInfo);
    tagLi.addEventListener("click", (e) => {
        if(e.target.classList.contains("shopping-cart-item-button")) {
            e.currentTarget.remove();
            showShoppingCartInfo();
        }
    });
    return tagLi;
}
function showShoppingCartInfo() {
    const shoppingCartContent = document.querySelector(".shopping-cart-content").querySelectorAll("li");
    let quantity = 0;
    let total = 0;
   
    shoppingCartContent.forEach((cartItem) => {
        quantity += 1;
        total += parseFloat(cartItem.querySelector(".shopping-cart-item-price").innerText.replace("R$ ", ""));
    }
    );
    if(quantity !== 0) {
        if(document.querySelector(".shopping-cart-info") !== null) {
            document.querySelector(".shopping-cart-info").remove();
        }
        const shoppingCart = document.querySelector(".shopping-cart");
        const shoppingCartInfo = document.createElement("div");
        shoppingCartInfo.classList.add("shopping-cart-info");
        shoppingCartInfo.innerHTML = ` <div class="shopping-cart-info-text"> <h3>Quantidade:</h3> <p>${quantity}</p> </div> <div class="shopping-cart-info-text"> <h3>Total:</h3> <p>R$ ${total}</p> </div>`;
        shoppingCart.appendChild(shoppingCartInfo);
    } else{
        document.querySelector(".shopping-cart-info").remove();
    }
    return "Mostra informações sobre o carrinho";
}
showProducts(data);
