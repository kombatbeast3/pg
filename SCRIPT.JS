var loginForm = document.querySelector('.loginForm');
var signupForm = document.querySelector('.signupForm');
var loginLink = document.querySelector('.loginLink');
var signupLink = document.querySelector('.signupLink');

loginLink.addEventListener('click', function() {
  loginForm.classList.toggle('active');
  loginForm.classList.toggle('inactive');
  signupForm.classList.toggle('active');
  signupForm.classList.toggle('inactive');
});

signupLink.addEventListener('click', function() {
  loginForm.classList.toggle('active');
  loginForm.classList.toggle('inactive');
  signupForm.classList.toggle('active');
  signupForm.classList.toggle('inactive');
});
document.addEventListener("DOMContentLoaded", function() {
  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours < 12) {
      greeting = "Good Morning";
  } else if (hours < 18) {
      greeting = "Good Afternoon";
  } else {
      greeting = "Good Evening";
  }

  const header = document.querySelector('header h1');
  header.innerText = `${greeting}, Welcome to Dawamu School Bookshop`;
});
