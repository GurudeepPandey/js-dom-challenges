const cartDiv = document.querySelector("#cart-items")
const emptyCart = document.querySelector(".empty-cart")
const totalPrice = document.querySelector("#cart-total h3")
const cartObj = {}

function addToCart(item, itemprice) {
    if (cartObj[item]) {
        priceUpdate(item, itemprice)
        return;
    }
    cartObj[item] = { quantity: 1, price: itemprice }

    let mainDiv = `
    <div class="${item}">
        <p>${item}</p>
        <div>
          <button onclick="decreasePrice('${item}', ${itemprice})">-</button>
          <p class="${item}-quantity">1</p>
          <button onclick="increasePrice('${item}', ${itemprice})">+</button>
          <p class="${item}-price">$${itemprice}</p>
          <button onclick="removefromCart('${item}')">Remove</button>
        </div>
    </div>
    `
    cartDiv.insertAdjacentHTML("afterbegin", mainDiv)
    emptyCart.style.display = Object.keys(cartObj).length ? "none" : "block";
    updateTotalPrice()
    console.log(cartObj)
}

function removefromCart(item) {
    delete cartObj[item]
    document.querySelector(`.${item}`).remove()
    console.log(cartObj)
    emptyCart.style.display = Object.keys(cartObj).length ? "none" : "block";
    updateTotalPrice()
}

function increasePrice(item, itemprice) {
    cartObj[item]["quantity"]++
    cartObj[item]["price"] += itemprice
    updateUI(item)
    updateTotalPrice()
}

function decreasePrice(item, itemprice) {
    if(cartObj[item]["quantity"] === 0) {
        return
    }
    cartObj[item]["quantity"]--
    cartObj[item]["price"] -= itemprice
    updateUI(item)
    updateTotalPrice()
}

function updateTotalPrice() {
    let price = 0
    for (const item in cartObj) {
        price += cartObj[item]["price"]
    }
    totalPrice.innerText = `Total: $${price.toFixed(2)}`
}

function updateUI(item) {
    document.querySelector(`.${item}-quantity`).innerText = cartObj[item]["quantity"]
    document.querySelector(`.${item}-price`).innerText = `$${cartObj[item]["price"].toFixed(2)}`
}