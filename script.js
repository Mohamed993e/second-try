const loginform = document.querySelector('.loginform');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');

registerLink.addEventListener('click', () => {
    loginform.classList.add('active');
});

loginLink.addEventListener('click', () => {
    loginform.classList.remove('active');
});
btnPopup.addEventListener('click', (event) => {
//   event.stopPropagation(); // Prevent triggering the document click event
  loginform.classList.add('active-popup');
});
document.addEventListener('click', (event) => {
  if (!loginform.contains(event.target) && !btnPopup.contains(event.target)) {
    loginform.classList.remove('active-popup');
  }
});
