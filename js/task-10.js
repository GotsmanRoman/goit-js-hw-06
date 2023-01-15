function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRefs = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const outputRefs = document.querySelector("#boxes");


createBtn.addEventListener("click", () => {
  createBoxes(inputRefs.value);
});
destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  outputRefs.innerHTML = "";
}
function createBoxes(amount) {
  let boxCollection = [];
  const basicWidth = 30;
  const basicHeight = 30;
  for (let i = 0; i < amount; i++) {
    const newBoxRefs = document.createElement("div");

    newBoxRefs.style.width = basicWidth + i * 10 + "px";
    newBoxRefs.style.height = basicHeight + i * 10 + "px";
    newBoxRefs.style.backgroundColor = getRandomHexColor();
    
    boxCollection.push(newBoxRefs);
  }
  outputRefs.append(...boxCollection)
}