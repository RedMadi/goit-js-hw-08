import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';

let savedData = JSON.parse(localStorage.getItem('FORM_KEY')) ?? [];
const { email, message } = form.elements;

form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', throttle(onInput, 500));

pageReload();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('FORM_KEY');
  //Можна врахувати перевірку заповненості всіх полів
  //  if (email.value === '' || message.value === '') {
  //    alert('Заповність усі поля!');
  //  } else {
  console.log(savedData);
  //}
}
function onInput(event) {
  savedData = { email: email.value, message: message.value };
  localStorage.setItem('FORM_KEY', JSON.stringify(savedData));
}

function pageReload() {
  if (savedData) {
    email.value = savedData.email || '';
    message.value = savedData.message || '';
  }
}
