document.addEventListener("DOMContentLoaded", function () {
  console.log("test de connection reussi");
  //----------ÉLÉMENTS RECHERCHERS----------//
  let carrousel = document.querySelector(".carrousel");

  let carrousel__button = document.getElementById("carrousel__button");
  let carrousel__x = document.querySelector(".carrousel__x");
  let carrousel__droite = document.querySelector(".carrousel__droite");
  let carrousel__gauche = document.querySelector(".carrousel__gauche");

  let carrousel__figure = document.querySelector(".carrousel__figure");
  //   let galerie = document.querySelector(".galerie");
  let galerie__img = document.querySelectorAll(".galerie img");
  console.log(carrousel__droite, carrousel__gauche);

  //----------FONCTION----------//
  function peuplerCarrousel() {
    for (elm of galerie__img) {
      let img = document.createElement("img");
      img.src = elm.src; //donne la source de l'element à l'image
      img.classList.add("carrousel__img");
      carrousel__figure.appendChild(img);
    }
  }

  function afficheImage(index) {
    let carrousel__img = document.querySelectorAll(".carrousel__img");

    for (let i = 0; i < carrousel__img.length; i++) {
      carrousel__img[i].classList.remove("carrousel__img--visible");
    }
    carrousel__img[index].classList.add("carrousel__img--visible");
  }

  function trouvePosition() {
    const carrousel__img = Array.from(
      document.querySelectorAll(".carrousel__img")
    );
    let position = carrousel__img.findIndex((img) =>
      img.classList.contains("carrousel__img--visible")
    );

    return position;
  }

  function imageSuivante() {
    const carrousel__img = Array.from(
      document.querySelectorAll(".carrousel__img")
    );
    let position = trouvePosition();
    if (position < carrousel__img.length - 1) {
      position++;
    }

    afficheImage(position);
  }

  function imagePrecedente() {
    let position = trouvePosition();
    if (position >= 1) {
      position--;
    }
    afficheImage(position);
  }

  //----------ADDEVENTLISTENER----------//
  //addEvent listener sur le bouton pour ouvrir le carrousel
  carrousel__button.addEventListener("click", () => {
    if (carrousel__figure.innerHTML == "") {
      peuplerCarrousel();
    }
    afficheImage(0);
    carrousel.classList.add("carrousel--ouvrir");
  });
  //addEventListener sur le X du carrousel
  carrousel__x.addEventListener("click", () => {
    carrousel.classList.remove("carrousel--ouvrir");
  });

  carrousel__droite.addEventListener("click", () => {
    imageSuivante();
  });
  carrousel__gauche.addEventListener("click", () => {
    imagePrecedente();
  });
});
