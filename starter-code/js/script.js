const input = document.querySelector('input[type=email]')
const form = document.querySelector('form')
const errMsgEmpty = 'Oops! Please add your email'
const errMsgNotFormatted = 'Oops! Please check your email'

document.querySelector('button').addEventListener('click', function (e) {
  e.preventDefault();
  if (input.value.trim() === '') {
    form.setAttribute('error-message', errMsgEmpty)
  } else if (!input.checkValidity()) {
    form.setAttribute('error-message', errMsgNotFormatted)
  } else {
    console.log('Email sent');
    input.value = '';
    form.removeAttribute('error-message')
  }
})