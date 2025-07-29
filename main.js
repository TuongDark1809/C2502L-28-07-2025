document.addEventListener("DOMContentLoaded", () => {
    const headerGuest = document.getElementById("headerGuest");
    const productContainerGuest = document.getElementById("productContainerGuest");
    const login = document.getElementById("login");
    const loginFormEmail = document.getElementById("loginFormEmail");
    const loginFormPassword = document.getElementById("loginFormPassword");
    const headerAdmin = document.getElementById("headerAdmin");
    const headerButtonLogout = document.getElementById("headerButtonLogout");
    const headerButtonLogin = document.getElementById("headerButtonLogin");
    let products = [
        { id: 1, name: "ABC", price: 0.00, info: "abc"},
        { id: 2, name: "ABC", price: 0.00, info: "abc"},
        { id: 3, name: "ABC", price: 0.00, info: "abc"},
        { id: 4, name: "ABC", price: 0.00, info: "abc"},
    ];

    if (!localStorage.getItem("products")) {
        localStorage.setItem("products", JSON.stringify(products));
    }

    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
        try {
            products = JSON.parse(storedProducts);
        } catch (error) {
            console.error(error);
        }
    }

//GUEST RENDER

if (headerGuest && productContainerGuest) {
    renderGuestProducts(products);
}

function renderGuestProducts(data) {
    document.getElementById("productGridGuest").innerHTML = "";
    
    data.forEach((product) => {
        const item = document.createElement("div");
        item.innerHTML = `
            <img src="images/productDefaultImg.png" class="productImg">
                <div class="flexRow">
                    <p class="productName">${product.name}</p>
                    <p class="productPrice"$${product.price}</p>
                </div>
                <p class="productInfo">${product.info}</p>
                <button class="buttonBlack productDetailsButton">See details</button>
                <button class="buttonWhite productBuyButton">Buy</button>
        `;
        item.classList.add("product");

        document.getElementById("productGridGuest").appendChild(item)
    });
}

//LOGIN FORM

if (headerGuest && productContainerGuest) {
    headerButtonLogin.addEventListener("click", () => {
        window.location.href = "login.html";
    });
};

if (login && loginFormEmail && loginFormPassword) {
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        if ((loginFormEmail.value === "admin@gmail.com") && (loginFormPassword.value === "admin123")) {
            window.location.href = "admin.html"
        } else {
            alert("Wrong password!");
        }
    });
}

//ADMIN PAGE

if (headerAdmin) {
    headerButtonLogout.addEventListener("click", () => {
        window.location.href = "index.html";
    })
}






})