

$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active');
    })



// <--------auto sliding-of the quotes-------->
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("testimonials");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change the quote every 2 seconds
}
})


