const products = document.querySelector(".products");
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
    productCategory.innerText = product.tag[0];
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
    database.forEach((product) => {
        products.appendChild(createCard(product));
    }
    );
}
showProducts(data);