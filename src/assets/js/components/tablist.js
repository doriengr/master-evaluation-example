let tablistButtons = document.querySelectorAll('.tablist__nagivation .button');
let tablistPanels = document.querySelectorAll('.tablist__list-item');

tablistButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    tablistButtons.forEach(btn => {
      if (button === btn) {
        btn.classList.add('button--primary');
        btn.classList.remove('button--secondary');
      } else {
        btn.classList.remove('button--primary');
        btn.classList.add('button--secondary')
      };
    });

    tablistPanels.forEach(panel => panel.classList.remove('tablist__list-item--active'));
    tablistPanels[index].classList.add('tablist__list-item--active');
  });
});
