document.addEventListener("DOMContentLoaded", function () {
  console.log("test de connection reussi");

  let carrousel = document.querySelector(".carrousel");
  let carrousel__button = document.getElementById("carrousel__button");
  let carrousel__x = document.querySelector(".carrousel__x");

  //addEvent listener sur le bouton pour ouvrir le carrousel
  carrousel__button.addEventListener("click", () => {
    carrousel.classList.add("carrousel--ouvrir");
  });
  //addEventListener sur le X du carrousel
  carrousel__x.addEventListener("click", () => {
    carrousel.classList.remove("carrousel--ouvrir");
  });
});
