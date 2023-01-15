let counterValue = 0;

const incrementBtn = document.querySelector("button[data-action='increment']");
const decrementBtn = document.querySelector("button[data-action='decrement']");
const valueRefs = document.querySelector("#value");

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

function decrement() {
  return (valueRefs.textContent = Number(valueRefs.textContent) - 1);
}
function increment() {
  return (valueRefs.textContent = Number(valueRefs.textContent) + 1);
}
