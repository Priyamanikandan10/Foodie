let cart = [];
function searchFood() {

    let searchText = document.getElementById("searchBox").value.toLowerCase();

    let restaurants = document.querySelectorAll(".restaurant-card");

    restaurants.forEach(function(card) {

        let restaurantName = card.querySelector("h3").textContent.toLowerCase();

        let foodType = card.querySelectorAll("p")[0].textContent.toLowerCase();

        if (
            restaurantName.includes(searchText) ||
            foodType.includes(searchText)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}


function clearSearch() {

    document.getElementById("searchBox").value = "";

    let restaurants = document.querySelectorAll(".restaurant-card");

    restaurants.forEach(function(card) {
        card.style.display = "block";
    });

}


function searchCategory(category) {

    document.getElementById("searchBox").value = category;

    searchFood();

}
function orderFood(restaurantName) {

    alert("Thank you! Your order from " + restaurantName + " has been started.");

}function addToCart(itemName, price) {

    cart.push({
        name: itemName,
        price: price
    });

    alert(itemName + " added to cart!");

    displayCart();

}function displayCart() {

    let cartDiv = document.getElementById("cart");

    cartDiv.innerHTML = "";

    let total = 0;

    cart.forEach(function(item, index) {

        let itemElement = document.createElement("p");

        itemElement.textContent =
            item.name + " - ₹" + item.price + " ";

        let removeButton = document.createElement("button");

        removeButton.textContent = "Remove";

        removeButton.onclick = function() {
            removeFromCart(index);
        };

        itemElement.appendChild(removeButton);

        cartDiv.appendChild(itemElement);

        total = total + item.price;

    });

    document.getElementById("cartTotal").textContent = "Total: ₹" + total;

}function removeFromCart(index) {

    cart.splice(index, 1);

    displayCart();

}function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

    } else {

        alert("Thank you for your order! Your order has been placed.");

        cart = [];

        displayCart();

    }

}