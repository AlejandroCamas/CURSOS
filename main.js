const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktoopMenu);


/**en esta funcion mandamos a llamar lo que nosotros colocamos en css lo cual es que uestre o no muestre el panenl */
function toggleDesktoopMenu() {
    desktopMenu.classList.toggle('inactive');
}

/**la palabra  o comando "toggle"  sirve para que cada que nosotros querramos que haya como un cambio de que aparezca o no aparezca*/