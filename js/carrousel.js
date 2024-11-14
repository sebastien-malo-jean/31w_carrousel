document.addEventListener("DOMContentLoaded", function () {
  console.log("test de connection reussi");
  //----------ÉLÉMENTS RECHERCHERS----------//
  let carrousel = document.querySelector(".carrousel");
  let carrousel__x = document.querySelector(".carrousel__x");
  let carrousel__droite = document.querySelector(".carrousel__droite");
  let carrousel__gauche = document.querySelector(".carrousel__gauche");
  let carrousel__figure = document.querySelector(".carrousel__figure");
  let carrousel__form = document.querySelector(".carrousel__form");

  let galerie__img = document.querySelectorAll(".galerie img");

  //----------FONCTION----------//
  function peuplerCarrousel() {
    for (elm of galerie__img) {
      let img = document.createElement("img");
      img.src = elm.src; //donne la source de l'element à l'image
      img.classList.add("carrousel__img");
      carrousel__figure.appendChild(img);

      let radioButton = document.createElement("input");
      radioButton.type = "radio";
      radioButton.classList.add("carrousel__form_radioButton");
      carrousel__form.appendChild(radioButton);

      radioButton.addEventListener("click", () => {
        let index = Array.from(carrousel__form.children).indexOf(radioButton);
        carrousel__afficheImage(index);
      });
    }
  }

  function carrousel__trouvePosition() {
    const carrousel__img = Array.from(
      document.querySelectorAll(".carrousel__img")
    );

    let position = carrousel__img.findIndex((img) =>
      img.classList.contains("carrousel__img--visible")
    );

    return position;
  }

  function carrousel__afficheImage(index) {
    let carrousel__img = document.querySelectorAll(".carrousel__img");

    for (let i = 0; i < carrousel__img.length; i++) {
      carrousel__img[i].classList.remove("carrousel__img--visible");
    }
    carrousel__img[index].classList.add("carrousel__img--visible");
  }

  function carrousel__imageSuivante() {
    const carrousel__img = Array.from(
      document.querySelectorAll(".carrousel__img")
    );
    let position = carrousel__trouvePosition();
    if (position < carrousel__img.length - 1) {
      position++;
    }

    carrousel__afficheImage(position);
  }

  function carrousel__imagePrecedente() {
    let position = carrousel__trouvePosition();
    if (position >= 1) {
      position--;
    }
    carrousel__afficheImage(position);
  }

  //----------ADDEVENTLISTENER----------//
  //addEvent listener sur le bouton pour ouvrir le carrousel
  galerie__img.forEach((img, n) => {
    img.addEventListener("click", () => {
      if (carrousel__figure.innerHTML == "") {
        peuplerCarrousel();
      }
      carrousel__afficheImage(n);
      carrousel.classList.add("carrousel--ouvrir");
    });
  });

  //addEventListener sur les boutons du carrousel
  carrousel__x.addEventListener("click", () => {
    carrousel.classList.remove("carrousel--ouvrir");
  });
  carrousel__droite.addEventListener("click", () => {
    carrousel__imageSuivante();
  });
  carrousel__gauche.addEventListener("click", () => {
    carrousel__imagePrecedente();
  });
});
