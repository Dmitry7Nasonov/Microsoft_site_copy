let btn = document.querySelector('.menu-btn');
let mainMenu = document.querySelector('.main-menu');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    mainMenu.classList.toggle('show');
}



