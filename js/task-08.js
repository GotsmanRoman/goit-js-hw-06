const form = document.querySelector(".login-form");
const submitBtn = form.querySelector("button[type='submit']");

form.addEventListener("submit", formValidation);

function formValidation(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  getData(formData, isFormDataValid(formData));
  form.reset();
}

function isFormDataValid(data) {
  let isFieldsFilled = true;
  data.forEach((elem) => {
    if (elem.length == 0) {
      alert("Всі поля повинні бути заповнені");
      isFieldsFilled = false;
    }
  });
  return isFieldsFilled;
}
function getData(data, callback) {
  if (!callback) {
    return;
  }
  const newObj = {};
  data.forEach((value, name) => {
    return (newObj[name] = value);
  });
  return console.log(newObj);
}
