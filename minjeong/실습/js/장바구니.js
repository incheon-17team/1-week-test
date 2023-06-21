const addToCartBtn = document.querySelectorAll(".add-to-cart");
const cartItemsList = document.querySelector(".cart-items");
console.log(addToCartBtn);
console.log(cartItemsList);

addToCartBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productName =
      btn.previousElementSibling.previousElementSibling.textContent;
    const productPrice = btn.previousElementSibling.textContent;
    addToCart(productName, productPrice);
  });
});

function addToCart(name, price) {
  const cartItem = document.createElement("li");
  cartItem.textContent = `${name}-${price}`;
  cartItemsList.appendChild(cartItem);
}
