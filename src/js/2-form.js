const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const inputEmail = form.elements.email;
const inputTextarea = form.elements.message;

const data = JSON.parse(localStorage.getItem(localStorageKey));

inputEmail.value = data && data.email ? data.email : '';
inputTextarea.value = data && data.message ? data.message : '';

form.addEventListener('input', addLocalStorageItem);
function addLocalStorageItem() {
  const objFeedback = {
    email: inputEmail.value.trim(),
    message: inputTextarea.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(objFeedback));
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (inputEmail.value.trim() !== '' && inputTextarea.value.trim() !== '') {
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else alert('All form fields must be filled in');
});
