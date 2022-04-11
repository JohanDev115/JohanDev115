var diplomas = document.getElementById("diplomas");

var showDiplomas = document.getElementById("show-diplomas");

var closeDiplomas = document.getElementById("closeDiplomas");

showDiplomas.onclick = function() {
  diplomas.style.display = "block";
}

closeDiplomas.onclick = function() {
  diplomas.style.display = "none";
}


let slideIndex1 = 0;
let slideIndex2 = 0;
// let slideIndex3 = 0;
var time = 4000;

showSlides1();
showSlides2();
// showSlides3();

function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("slidebatatabit");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1}    

  slides[slideIndex1-1].style.display = "block";  
  setTimeout(showSlides1, time);
}

function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("slidevector");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}    

  slides[slideIndex2-1].style.display = "block";  
  setTimeout(showSlides2, time);
}

window.onclick = function(event) {
  if (event.target == diplomas) {
    diplomas.style.display = "none";
  }
}



