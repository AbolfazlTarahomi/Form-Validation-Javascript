const bio = document.getElementById('bio-input');
const previewbio = document.querySelector(".preview  p");

bio.addEventListener('input', function (event) {

    if(event.target.value){
        previewbio.innerHTML = event.target.value;
    }
    else
    {
         previewbio.innerHTML = "please insert somthing."
    }


});
