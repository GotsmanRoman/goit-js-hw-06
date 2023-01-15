const categoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEl.length}`);
console.log(" ");

categoriesEl.forEach(elem => {
    console.log(`Category: ${elem.querySelector("h2").textContent}`);
    console.log(`Elements: ${elem.querySelector("ul").children.length}`);
    console.log(" ");
})