const inputRefs = document.querySelector("#validation-input");
const dataLength = inputRefs.dataset.length;

inputRefs.addEventListener("blur", checkLength)

function checkLength() {
    if (inputRefs.value.length == dataLength) {
        inputRefs.className = "valid";
        return;
    }
    inputRefs.className = "invalid";   
}