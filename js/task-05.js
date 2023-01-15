const inputRefs = document.querySelector("#name-input");
const spanRefs = document.querySelector("#name-output");
const defaultText = "Anonymous";

function clearData(elem) {
  elem.value = "";
}

clearData(inputRefs);

inputRefs.addEventListener("input", getInputData);

function getInputData() {
  inputRefs.value.length == 0
    ? (spanRefs.textContent = defaultText)
    : (spanRefs.textContent = inputRefs.value);
}
