const bio = document.getElementById('bio-input');
const previewbio = document.querySelector('.preview  p');
const terms = document.getElementById('terms');
const submitBtn = document.getElementById('submit-btn');

// code

bio.addEventListener('input', function (event) {
  if (event.target.value) {
    previewbio.innerHTML = event.target.value;
  } else {
    previewbio.innerHTML = 'please insert somthing.';
  }
});

terms.addEventListener('change', function (event) {
  if (event.target.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
