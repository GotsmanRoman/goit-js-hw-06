const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

const ingredientsList = ingredients.map(elem => {
  const liEl = document.createElement("li");
  liEl.textContent = elem;
  liEl.classList.add("item");
  return liEl;
})

ingredientsEl.append(...ingredientsList)

// function getIngredientsList(array) {
//   return array.map(elem => {
//     const liEl = document.createElement("li");
//     liEl.textContent = elem;
//     liEl.classList.add("item");
//     return liEl;
//   })
// }

// ingredientsEl.append(...getIngredientsList(ingredients))