var slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {

  var slides = document.getElementsByClassName("mySlides"); //hace q se vean las img al poner display: none

  if (n > slides.length) {
      slideIndex = 1
    }
  if (n < 1) {
      slideIndex = slides.length
    }
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";



// dot

var dots = document.getElementsByClassName("dot");
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
  dots[slideIndex-1].className += " active";
} 


/*image gallery*/
var displayedImage = document.getElementById('displayed-img');

var imageButtons = document.getElementsByClassName('imageButton');

for (i = 0 ; i < imageButtons.length; i+=1) {
    
    imageButtons[i].addEventListener('click', function(e) {
        const imgSrc = e.target.getAttribute('src');
        displayedImage.setAttribute('src', imgSrc);
    });    
}


