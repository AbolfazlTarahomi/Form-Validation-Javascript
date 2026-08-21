const bio = document.getElementById('bio-input');
const previewbio = document.querySelector('.preview  p');
const terms = document.getElementById('terms');
const submitBtn = document.getElementById('submit-btn');
const passwords = document.getElementById('password');
const userName = document.getElementById('userName');

// previewbio

bio.addEventListener('input', function (event) {
  if (event.target.value) {
    previewbio.innerHTML = event.target.value;
  } else {
    previewbio.innerHTML = 'please insert somthing.';
  }
});

// checkbox
terms.addEventListener('change', function (event) {
  if (event.target.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

// password

passwords.addEventListener('focus', function (event) {
  event.target.style.border = '3px solid yellow';
});

passwords.addEventListener('blur', function (event) {
  event.target.style.border = '3px dashed rgb(2, 172, 73)';
});

// UserName Validation

userName.addEventListener('blur', function (event) {
  const value = event.target.value.trim();
  const parent = event.target.parentElement;

  if (value.length < 3) {
    parent.classList.add('error');
  } else {
    parent.classList.remove('error');
  }
});

// Password Validation
