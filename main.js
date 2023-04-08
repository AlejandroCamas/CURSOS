const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
/*esta parte es para la vercion de movil */
const menoHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktoopMenu);
/*aqui es para la vercion de movil */
menoHamIcon.addEventListener('click', toggleMobilMenu);


/**en esta funcion mandamos a llamar lo que nosotros colocamos en css lo cual es que uestre o no muestre el panenl */
function toggleDesktoopMenu() {
    desktopMenu.classList.toggle('inactive');
}

/**la palabra  o comando "toggle"  sirve para que cada que nosotros querramos que haya como un cambio de que aparezca o no aparezca*/

/*aqui la vercion movil */
function toggleMobilMenu () {
    mobileMenu.classList.toggle('inactive');
}


/*const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}
 por alguna razon esta igual per no funciona asi que tomare este*/

 /*actualizacion, vi mi error era tenia una v en lugar de una b */