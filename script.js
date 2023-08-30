// Elements selector
const mainCard = document.getElementById('main-card');
const successCard = document.getElementById('success-card');
const email = document.getElementById('email');
const submitBtn = document.querySelector('.submit-btn');
const errorText = document.querySelector('.error-text');
const dismissBtn = document.querySelector('.dismiss-btn');
const successEmail = document.querySelector('.success-email');

// Event-listeners
submitBtn.addEventListener('click', handleSubmit);
dismissBtn.addEventListener('click', handleToggleView);

// Toggle views
function handleToggleView() {
  mainCard.classList.toggle('hidden');
  successCard.classList.toggle('hidden');
}

// Validate email
function isEmailValid(email) {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return regexEmail.test(String(email));
}

// Form submit
function handleSubmit(e) {
  e.preventDefault();
// console.log(isEmailValid(email.value))
  if(isEmailValid(email.value)) {
    successEmail.innerText = email.value;
    // automatically remove error display
    errorText.style.display = 'hidden';
    // clear input value
    email.value = "";
    handleToggleView();
  } else {
    // show hidden error message
    errorText.style.display = 'block';
  }
}