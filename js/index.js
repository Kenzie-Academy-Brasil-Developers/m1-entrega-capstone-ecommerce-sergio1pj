const products = document.querySelector(".products");
const shoppingCartContent = document.querySelector(".shopping-cart-content");
const shoppingCartData = [];
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
    productButton.addEventListener("click", () => {
        shoppingCartData.push(product);
        showShoppingCart(shoppingCartData);
    });
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
    return tagLi;
}
function showProducts(database) {
    products.innerHTML = "";
    database.forEach((product) => {
        products.appendChild(createCard(product));
    }
    );
    return "Atualiza a vitrine";
}
function createCartItem(product) {
    const tagLi = document.createElement("li");
    const shoppingCartItemImg = document.createElement("img");
    const shoppingCartItemInfo = document.createElement("div");
    const shoppingCartItemTitle = document.createElement("h3");
    const shoppingCartItemPrice = document.createElement("p");
    const shoppingCartItemButton = document.createElement("button");
    tagLi.classList.add("shopping-cart-item");
    shoppingCartItemImg.src = product.img;
    shoppingCartItemImg.classList.add("shopping-cart-item-img");
    shoppingCartItemInfo.classList.add("shopping-cart-item-info");
    shoppingCartItemTitle.classList.add("shopping-cart-item-title");
    shoppingCartItemPrice.classList.add("shopping-cart-item-price");
    shoppingCartItemButton.classList.add("shopping-cart-item-button");
    shoppingCartItemButton.addEventListener("click", () => {
        shoppingCartData.splice(shoppingCartData.indexOf(product), 1);
        showShoppingCart(shoppingCartData);
    }
    );
    shoppingCartItemTitle.innerText = product.nameItem;
    shoppingCartItemPrice.innerText = `R$ ${product.value}`;
    shoppingCartItemButton.innerText = "Remover";
    shoppingCartItemInfo.appendChild(shoppingCartItemTitle);
    shoppingCartItemInfo.appendChild(shoppingCartItemPrice);
    shoppingCartItemInfo.appendChild(shoppingCartItemButton);
    tagLi.appendChild(shoppingCartItemImg);
    tagLi.appendChild(shoppingCartItemInfo);
    return tagLi;
}
function showShoppingCart(database) {
    shoppingCartContent.innerHTML = "";
    database.forEach((product) => {
        shoppingCartContent.appendChild(createCartItem(product));
    }
    );
    showShoppingCartInfo(database);
    return "Atualiza o carrinho";
}
function showShoppingCartInfo(database) {
    let quantity = 0;
    let total = 0;
    const tagsP = document.querySelectorAll(".shopping-cart-info-text p");
    database.forEach((product) => {
        quantity += 1;
        total += product.value;
    }
    );
    tagsP[0].innerText = quantity;
    tagsP[1].innerText = `R$ ${total}`;
    return "Mostra informações sobre o carrinho";
}
showProducts(data);