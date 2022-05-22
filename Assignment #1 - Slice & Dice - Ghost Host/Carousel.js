
// INDEX OF CURRENT SLIDE
var slideIndex = 1;

// TIMER
var myTimer;

// MAIN CONTAINER OF SLIDESHOW
var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);

    // SETTING INTERVAL FOR CHANGING SLIDES
    myTimer = setInterval(function(){plusSlides(1)}, 5000);

    // GET SLIDESHOW CONTAINER DIV
    slideshowContainer = document.getElementsByClassName('innerCarouselContainer')[0];
  
    // WHEN MOUSE CLICK EVENT
    slideshowContainer.addEventListener('mouseenter', pause);

    // WHEN MOUSE RELEASED
    slideshowContainer.addEventListener('mouseleave', resume);
})

// NEXT AND PREVIOUS SLIDE CONTROL

function plusSlides(n){

  // STOP INTERVAL IF SLIDE IS CHANGED

  clearInterval(myTimer);
  if (n < 0){
    //GO ONE SLIDE BACK
    showSlides(slideIndex -= 1);
  
  } else {
    //GO ONE SLIDE NEXT
   showSlides(slideIndex += 1); 
  }
  
  // IF N IS EQUAL TO -1 => CURRENT SLIDE IS INCREMENTED BY 2
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 5000);

  } 

  // IF N ISN'T EQUAL TO -1 JUST GO TO NEXT SLIDE
  else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 5000);
  }

}

//CONTROLING THE CURRENT SLIDE AND RESETS THE INTERVAL IF NEEDED
function currentSlide(n){

  // CLEARING INTERVAL
  clearInterval(myTimer);

  // SET CURRENT TIMER TO 5 SEC
  myTimer = setInterval(function(){plusSlides(n + 1)}, 5000);

  // THE INDEX OF SLIDE IS EQUAL TO N
  showSlides(slideIndex = n);

}

function showSlides(n){
  var i;

  // GET SLIDES ELEMENTS
  var slides = document.getElementsByClassName("carouselSlides");

  //GET DOTS ELEMENTS
  var dots = document.getElementsByClassName("carouselDots");

  // GO BACK TO FIRST SLIDE AFTER YOU ARE ON THE LAST SLIDE
  if (n > slides.length) {slideIndex = 1}

  // IF SLIDE IS LESS THAN 1 => THE SLIDE'S INDEX IS THE MAXIMAL
  if (n < 1) {slideIndex = slides.length}

  // THE OTHER SLIDES ARE NOT DISPLAYED
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  // THE OTHER DOTS ARE NOT DISPLAYED
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // BY DEFAULT SLIDES ARE VISIBLE
  slides[slideIndex-1].style.display = "block";

  // BY DEFAULT THE DOTS ARE VISIBLE
  dots[slideIndex-1].className += " active";

}

// CLEARING INTERVAL
pause = () => {
  clearInterval(myTimer);
}

// RESUMING INTERVAL
resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 5000);
}