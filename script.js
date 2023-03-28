const form = document.getElementById('form');
const password1El = document.getElementById('passwoed1');
const password2El = document.getElementById('passwoed2');
const messageContainer = document.querySelector('.message-container');
const message =document.getElementById('message');

let isValid = false;
function validateForm () {
    isValid = form.checkValidity();
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
}
function processFormData (e) {
    e.preventDefault();
    validateForm();
}

form.addEventListener('submit', processFormData);



