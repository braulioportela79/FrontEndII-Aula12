const registerBtn = document.querySelector('#register-btn');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastName');

const trimMethodFirstName = document.querySelector('.trim-method .firstName');
const trimMethodLastName = document.querySelector('.trim-method .lastName');

const uppercaseMethodFirstName = document.querySelector('.uppercase-method .firstName');
const uppercaseMethodLastName = document.querySelector('.uppercase-method .lastName');

const lowercaseMethodFirstName = document.querySelector('.lowercase-method .firstName');
const lowercaseMethodLastName = document.querySelector('.lowercase-method .lastName');

const replaceMethodFirstName = document.querySelector('.replace-method .firstName');
const replaceMethodLastName = document.querySelector('.replace-method .lastName');

const concatMethodFirstLastName = document.querySelector('.firstLastName');


registerBtn.addEventListener('click', e => {
    e.preventDefault();

    trimMethodFirstName.textContent = inputName.value.trim();
    trimMethodLastName.textContent = inputLastName.value.trim();
    console.log(inputName.value.trim());
    console.log(inputLastName.value.trim());

    uppercaseMethodFirstName.textContent = inputName.value.toUpperCase();
    uppercaseMethodLastName.textContent = inputLastName.value.toUpperCase();

    lowercaseMethodFirstName.textContent = inputName.value.toLowerCase();
    lowercaseMethodLastName.textContent = inputLastName.value.toLowerCase();

    replaceMethodFirstName.textContent = inputName.value.replaceAll('a', '@').replaceAll('e', '3');
    replaceMethodLastName.textContent = inputLastName.value.replaceAll('a', '@').replaceAll('e', '3');

    concatMethodFirstLastName.textContent = inputName.value.concat(' ', inputLastName.value);
});