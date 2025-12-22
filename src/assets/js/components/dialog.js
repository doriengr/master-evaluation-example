let dialogs = document.querySelectorAll('.dialog');

dialogs.forEach(dialog => {
    const parent = dialog.parentNode;
    const openButton = parent.querySelector('.button');
    const closeButton = dialog.querySelector('.button');
    if (!openButton) return;

    openButton.addEventListener('click', () => {
        dialog.showModal();
    });

    if (!closeButton) return;
    closeButton.addEventListener('click', () => {
        dialog.close();
    });

    dialog.addEventListener("click", (event) => {
        if (event.target !== event.currentTarget) return;
        dialog.close();
    });
})

