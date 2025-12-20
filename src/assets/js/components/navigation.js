let button = document.querySelector('.navigation__button');
let navigation = document.querySelector('.navigation__list');

button.addEventListener('click', () => {
    navigation.classList.toggle('navigation__list--open');
})
