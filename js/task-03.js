const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRefs = document.querySelector(".gallery");

function crateGalleryList() {
  const galleryList = images.map((elem) => {
    const liRefs = document.createElement("li");
    const imgRefs = document.createElement("img");

    liRefs.classList.add("gallery__item");
    imgRefs.classList.add("gallery__img");
    imgRefs.setAttribute("src", elem.url);
    imgRefs.setAttribute("alt", elem.alt);

    liRefs.insertAdjacentElement("afterbegin", imgRefs);
    return liRefs;
  });
  galleryRefs.append(...galleryList);
}

crateGalleryList();
