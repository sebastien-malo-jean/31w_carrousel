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

/**
 * Ajoute des fichiers CSS et JavaScript au plugin, avec une gestion de version automatique
 * basée sur la date de modification de chaque fichier
 */
function enfile_css_script(){
    $version_css = filemtime(plugin_dir_path(__FILE__). "/style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__). "/js/carrousel.js");
    wp_enqueue_style("carrousel", plugin_dir_url(__FILE__). "/style.css",  array(), $version_css);
    wp_enqueue_script("carrousel", plugin_dir_url(__FILE__). "/js/carrousel.js", array(), $version_js);
}
add_action("wp_enqueue_scripts", "enfile_css_script");

function genere_carrousel() {

    $chaine = '
<button id="carrousel__button" class="carrousel__button">Ouvrir</button>
<div class="carrousel">
    <button class="carrousel__x"><img src="https://s2.svgbox.net/materialui.svg?ic=close&color=fff" width="32" height="32"></button>
    <button class="carrousel__gauche"><img src="https://s2.svgbox.net/materialui.svg?ic=skip_previous&color=fff" width="32" height="32"></button>
    <button class="carrousel__droite"><img src="https://s2.svgbox.net/materialui.svg?ic=skip_next&color=fff" width="32" height="32"></button>
    <figure class="carrousel__figure"></figure>
    <form class="carrousel__form"></form>
</div>
    ';

    return $chaine;
}

add_shortcode("carrousel", "genere_carrousel");