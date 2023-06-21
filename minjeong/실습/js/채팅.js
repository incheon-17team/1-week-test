const user = document.querySelector("#user");
const text = document.querySelector("#text");
const add = document.querySelector("#add");
const box = document.querySelector("#box");
console.log(user);
console.log(text);

add.addEventListener("click", () => {
  let user2 = user.value;
  let text2 = text.value;
  addToText(user2, text2);
  clear();
});

function addToText(name, text) {
  const textItem = document.createElement("li");
  textItem.textContent = `${name}: ${text}`;
  box.appendChild(textItem);
}

function clear() {
  user.value = "";
  text.value = "";
}
