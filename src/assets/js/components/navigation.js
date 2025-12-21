let button = document.querySelector('.navigation__button');
let subNavButtons = document.querySelectorAll('.navigation__sublist-button');
let navigation = document.querySelector('.navigation__wrapper');

if (button) {
    button.addEventListener('click', () => {
        navigation.classList.toggle('navigation__wrapper--open');
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
