//DARK MODE
const changeMode = document.getElementById('light-mode-button');
changeMode.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('dark-mode');
})




//HAMBURGER MENU
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


// NEVEIKIA.uzdarymas paspaudziant ant ekrano
//window.addEventListener("click", (event) => {
//     if (event.target == navigationMenu) {
//         navigationMenu.style.display = "none";
//     }
// });



//MODAL
document.querySelector('.button').addEventListener('click', () => {
    document.querySelector('#modal').classList.add('active');
});
    
    
document.querySelector('.modal-content .close').addEventListener('click', () => {
    document.querySelector('#modal').classList.remove('active');
});


  // const openModalButton = document.getElementById("show-modal");
  // const modal = document.getElementByClassName("subscribe-modal");
  // const close = document.getElementsByClassName("close-btn")[0];
  
  // openModalButton.addEventListener("click", () => {
  //   modal.style.display = "block";
  // });
  
  // close.addEventListener("click", () => {
  //   modal.style.display = "none";
  // });
  
  // window.addEventListener("click", (event) => {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // });



//SLIDE DOWN
const heroBoxLink = document.querySelector('.hero-box-link');
const launchingSection = document.getElementById('launching');

heroBoxLink.addEventListener('click', () => {
    launchingSection.scrollIntoView({ 
        block: 'start',
        behavior: 'smooth',
    });
})