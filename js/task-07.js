const inputRefs = document.querySelector("#font-size-control");
const spanRefs = document.querySelector("#text");

inputRefs.addEventListener("input", changeFontSize);

function clearData(elem) {
    elem.value = "";
}

clearData(inputRefs);

function changeFontSize() {
    spanRefs.style.fontSize = inputRefs.value + "px"
}