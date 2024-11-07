<?php
    /*
    plugin name: 31w Carrousel
    description: exercice permettant d'afficher le contenue d'une galerie dans un carrousel.
    author: Sébastien Malo Jean
    author uri: https://github.com/sebastien-malo-jean
    */

    /*
    Instruction :
    - généré le code HTML d'une partie de la boite modale 
    - créé un bourton qui permettra d'ouvrir la boite modale
    - créer une feuille de style pour la boite modale
    - Script permettant d'ouvrir et fermer la boite modale.
    */

function genere_carrousel() {

    $chaine = '
<button id="carrousel__button" class="carrousel__button">Ouvrir</button>
<div class="carrousel">
    <button class="carrousel__x">X</button>
    <figure class="carrousel__figure"></figure>
    <form class="carrousel__form"></form>
</div>
    ';

    return $chaine;
}

add_shortcode("carrousel", "genere_carrousel");