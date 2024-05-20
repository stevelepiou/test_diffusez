/* je récupère les éléments */

const menuMobile = document.getElementById("menuMobile");
const closeMenu = document.getElementById("btnFerme");
const openMenu = document.getElementById("BtnOuvre");
const blocBtnOuvre = document.getElementById("blocBtnOuvre");

/* je défini l'action de l'animation */

openMenu.onclick = menuActif;
closeMenu.onclick = menuFerme;

/* je défini la fonction pour faire apparaître le menu */

function menuActif() {
    menuMobile.classList.add("active");
    blocBtnOuvre.style.display = "none";
}

/* et je fini par faire une fonction pour retirer le menu une fois cliqué sur la croix */

function menuFerme() {
    menuMobile.classList.remove("active");
    blocBtnOuvre.style.display = "flex";
}