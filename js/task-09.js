function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRefs = document.querySelector("body");
const spanRefs = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", changeColor);

function changeColor() {
  const getColor = getRandomHexColor();
  bodyRefs.style.backgroundColor = getColor; 
  spanRefs.textContent = getColor;
}