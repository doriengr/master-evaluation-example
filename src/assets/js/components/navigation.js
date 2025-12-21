let button = document.querySelector('.navigation__button');
let subNavButtons = document.querySelectorAll('.navigation__sublist-button');
let navigation = document.querySelector('.navigation__wrapper');
let navIsOpen = false;

if (button) {
    button.addEventListener('click', () => {
        navIsOpen = !navIsOpen;
        navigation.classList.toggle('navigation__wrapper--open');
        button.innerHTML = navIsOpen ? "Schließen" : "Menü"; 
    })
}

subNavButtons.forEach(subNavButton => {
    const parent = subNavButton.parentElement;
    const subNavigation = parent.querySelector('.navigation__sublist');
    if (!subNavigation) return;
    
    subNavButton.addEventListener('click', () => {
        subNavigation.classList.toggle('navigation__sublist--open');
        subNavButton.classList.toggle('navigation__sublist-button--open');
    });
})
