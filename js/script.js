let profileNameBox = document.getElementById("profileNameBox")
let profileName = document.getElementById("profileName")
let registrationBox = document.getElementById("registration")
let userName = localStorage.getItem("FirstName")

if (localStorage.getItem("UserName")) {
    registrationBox.remove()
    profileNameBox.style.display = "block"
    profileName.innerHTML ="Hi , " + userName
    profileName.style.textTransform = "capitalize"
}
////////////////////////////////////////////////////////////////
let allProducts = document.querySelector(".products")
let products = [
    {   id : 1 ,
        title : "item 1" ,
        color : "black" ,
        imgUrl : "images/Iphone1.jpeg"
    } ,
    {   id : 2 ,
        title : "item 2" ,
        color : "black" ,
        imgUrl : "images/Iphone2.jpeg"
    } ,
    {   id : 3 ,
        title : "item 3" ,
        color : "black" ,
        imgUrl : "images/Samsung.jpg"
    },
    {   id : 4 ,
        title : "item 4" ,
        color : "black" ,
        imgUrl : "images/redmi.jpg"
    }
]
function drawProducts () {
    let y = products.map( (item) => {
        return `
            <div class="product_item">
                <img class="product_image" src="${item.imgUrl}" alt="">
                <div class="product_content">
                <div class="product_description">
                    <h2>${item.title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio nulla vel facere assumenda eos.</p>
                    <p>color : ${item.color} </p>
                </div>  <!-- product_description -->
                <div class="product_item_btns">
                    <button class="add_product_btn" onclick="addItemToCart(${item.id})">Add to Cart</button>
                    <i class="fa-regular fa-heart" id="heartIcon"></i>
                </div> <!-- product_item_btns -->
                </div> <!-- product content -->
            </div>  <!-- product Item -->
        `
    })
    allProducts.innerHTML = y
}
drawProducts()
/////////////////////////////////////////////////////////////////

// let cartItem = document.querySelector(".cart_items")
// let cartBadge = document.querySelector(".cart_badge")
// let cartAddedItems = [];
// function addItemToCart(id) {
//     let choosenProduct =products.find((item) => item.id === id)
//     // localStorage.setItem("choosenProduct", JSON.stringify(choosenProduct))
//     cartAddedItems.push(choosenProduct)
//     cartItem.innerHTML += `            
//     <div class="cart_product_item">
//         <img class="cart_product_image" src="${choosenProduct.imgUrl}" alt="">
//         <div class="cart_product_content">
//         <div class="cart_product_description">
//             <h2>${choosenProduct.title}</h2>
//             <p>color : ${choosenProduct.color} </p>
//         </div>  <!-- product_description -->
//         <div class="cart_product_item_btns">
//             <button class="cart_add_product_btn" onclick="">Delete</button>
//         </div> <!-- product_item_btns -->
//         </div> <!-- product content -->
//     </div>  <!-- product Item -->
// `
// cartBadge.innerHTML = cartAddedItems.length
// // console.log(cartAddedItems)
// }
////////////////////////////////
let cartIcon = document.querySelector(".nav_cart_box")
let cartContent = document.querySelector (".cart_content")
cartIcon.addEventListener("click", () => {
    if(cartItem.innerHTML !== "") {
        if(cartContent.style.display === "block") {
            cartContent.style.display = "none"
        }
        else {
            cartContent.style.display = "block"
        }
    }
})


// -------------------------------

let cartItem = document.querySelector(".cart_items");
let cartBadge = document.querySelector(".cart_badge");
let cartAddedItems = [];

function addItemToCart(id) {
    let choosenProduct = products.find((item) => item.id === id);

    if (choosenProduct) {
        cartAddedItems.push(choosenProduct);

        updateCartDisplay();
        cartBadge.innerHTML = cartAddedItems.length;

        localStorage.setItem("cart", JSON.stringify(cartAddedItems));
    } else {
        console.error("Product not found with ID: " + id);
    }
}

function updateCartDisplay() {
    cartItem.innerHTML = "";

    cartAddedItems.forEach((choosenProduct) => {
        cartItem.innerHTML += `
            <div class="cart_product_item">
                <img class="cart_product_image" src="${choosenProduct.imgUrl}" alt="">
                <div class="cart_product_content">
                    <div class="cart_product_description">
                        <h2>${choosenProduct.title}</h2>
                        <p>color : ${choosenProduct.color} </p>
                    </div>
                    <div class="cart_product_item_btns">
                        <button href="" class="cart_add_product_btn" onclick="removeItemFromCart(${choosenProduct.id})">Delete</button>
                    </div>
                </div>
            </div>`;
    });
}

function removeItemFromCart(id) {
    // Find the index of the product with the specified ID in the cart
    const index = cartAddedItems.map((item) => {
        return item.id
     }).indexOf(id);

    if (index !== -1) {

        cartAddedItems.splice(index, 1);

        updateCartDisplay();
        cartBadge.innerHTML = cartAddedItems.length;

        // localStorage.setItem("cart", JSON.stringify(cartAddedItems));
    }
}

const storedCart = localStorage.getItem("cart");
if (storedCart) {
    cartAddedItems = JSON.parse(storedCart);
    updateCartDisplay();
    cartBadge.innerHTML = cartAddedItems.length;
}

let logoutBtn = document.querySelector(".logout_btn");

logoutBtn.addEventListener("click", () => {
    localStorage.clear();

    location.reload();
    // location.href = "index.html";
})