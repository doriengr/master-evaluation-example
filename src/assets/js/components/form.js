let form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const message = form.querySelector('#message');
        const reasonChecked = form.querySelector('input[name="reason"]:checked');
        const notice = form.querySelector('.form__notice');

        form.querySelectorAll('.form__input').forEach(input => {
            input.classList.remove('form__input--error');
            notice.innerHTML = "";
        });

        if (!name.value.trim()) {
            name.classList.add('form__input--error');
            isValid = false;
        }

        if (!email.value.trim() || !isValidEmail(email.value)) {
            email.classList.add('form__input--error');
            isValid = false;
        }

        if (!message.value.trim()) {
            message.classList.add('form__input--error');
            isValid = false;
        }

        if (!reasonChecked) {
            isValid = false;
            console.warn('Bitte ein Anliegen auswählen');
        }

        if (!isValid) {
            console.log('Formular ungültig');
            return;
        } else {
            notice.innerHTML = "Formular erfolgreich abgeschickt!"
            notice.classList.add('form__notice--show');
            form.reset();
        }
    });
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}