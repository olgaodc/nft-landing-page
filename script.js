const changeMode = document.getElementById('light-mode-button');
changeMode.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('dark-mode');
})



const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationMenu = document.querySelector('.navigation-list');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navigationMenu.classList.toggle('active');

})

document.querySelectorAll('.navigation-item').forEach(n => n.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navigationMenu.classList.remove('active');
}))



const heroBoxLink = document.querySelector('.hero-box-link');
const launchingSection = document.getElementById('launching');

heroBoxLink.addEventListener('click', () => {
    launchingSection.scrollIntoView({ 
        block: 'start',
        behavior: 'smooth',
    });
})