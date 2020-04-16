var x = document.createElement('script');

window.onload = () => {
  //check token to redirect path

  const token = localStorage.getItem('token');
  if (token) {
    $(location).attr('href', 'http://localhost:3000/pages/home/index.html?');
  }
};

$(document).ready(() => {
  //Validate Email field

  validateEmail();

  //Validate Password field

  validatePassword();

  //Log In

  logIn();
});
