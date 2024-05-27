document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const telInput = document.getElementById('telephone');
    const passwordInput = document.getElementById('password');
    const password2Input = document.getElementById('password2');
    const form = document.getElementById('myForm');
    const messageParagraph = document.getElementById('message');
    const error = document.getElementById('error');
    const birthdateInput = document.getElementById("date");
    const countrySelect = document.getElementById("country");
    const provinceSelect = document.getElementById("province");
    const provinceText = document.getElementById("provinceText");
    const adres = document.getElementById("adres")
    const adresBox = document.getElementById('adresBox');
    const adres2 = document.getElementById('adres2');

    form.addEventListener('input', (event) => {
        const input = event.target;
        input.setCustomValidity('');
    });

    form.addEventListener('submit', function(event) {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameInput.setCustomValidity('Podaj imie');
            error.textContent = 'Podaj imie.';
            messageParagraph.textContent = '';
            isValid = false;
        }

        if (telInput.value.trim().length != 9) {
            telInput.setCustomValidity('Telefon musi zawierać dokładnie 9 znaków.');
            error.textContent = 'Telefon musi zawierać dokładnie 9 znaków.';
            messageParagraph.textContent = '';
            isValid = false;
        }

        if (!/\d/.test(passwordInput.value)) {
            passwordInput.setCustomValidity('Hasło musi zawierać przynajmniej jedną liczbę.');
            error.textContent = 'Hasło musi zawierać przynajmniej jedną liczbę.';
            messageParagraph.textContent = '';
            isValid = false;
        }

        if (passwordInput.value !== password2Input.value) {
            password2Input.setCustomValidity('Hasła muszą być takie same.');
            error.textContent = 'Hasła muszą być takie same.';
            messageParagraph.textContent = '';
            isValid = false;
        }

        const birthDate = new Date(birthdateInput.value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();

        if (age < 18 || (age === 18 && (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)))) {
            birthdateInput.setCustomValidity('Musisz mieć co najmniej 18 lat, aby wysłać formularz.');
            error.textContent = 'Musisz mieć co najmniej 18 lat, aby wysłać formularz.';
            messageParagraph.textContent = '';
            isValid = false;
        } else {
            birthdateInput.setCustomValidity('');
        }

        if (isValid) {
            nameInput.setCustomValidity('');
            passwordInput.setCustomValidity('');
            password2Input.setCustomValidity('');
            telInput.setCustomValidity('');
            birthdateInput.setCustomValidity('');

            messageParagraph.textContent = 'Dane wysłano prawidłowo.';
            error.textContent = '';
        } else {
            nameInput.reportValidity();
            passwordInput.reportValidity();
            password2Input.reportValidity();
            telInput.reportValidity();
            birthdateInput.reportValidity();
        }

        event.preventDefault();
    });

    countrySelect.addEventListener('change', function() {
        if (countrySelect.value === 'Polska') {
            provinceSelect.disabled = false;
            provinceSelect.style.display = 'block';
            provinceText.style.display = 'none';
        } else {
            provinceSelect.disabled = true;
            provinceSelect.style.display = 'none';
            provinceText.style.display = 'block';
        }
    });

    provinceText.addEventListener('change', function() {
        if (provinceText.value != '') {
            adres.disabled = false;
        } else {
            adres.disabled = true;
        }
    })

    provinceSelect.addEventListener('change', function() {
        if (provinceSelect.value != '') {
            adres.disabled = false;
        } else {
            adres.disabled = true;
        }
    })

    telInput.addEventListener('input', function(event) {
        const nonDigitPattern = /[^0-9]/g;
        if (nonDigitPattern.test(this.value)) {
            this.value = this.value.replace(nonDigitPattern, '');
        }
    });

    adresBox.addEventListener('change', function() {
        if (adresBox.checked) {
            adres2.style.display = 'none';
        } else {
            adres2.style.display = 'block';
        }
    });
});
