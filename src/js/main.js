$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
    function navbar(){
      var x = document.getElementById("myNav");
    if(x.className === "def"){
      x.className += " showing";
    } else {
    x.className = "def";
    }
    }
    window.onclick = function(event) {
      if(!event.target.matches('.navicon')) {
        var dropdown = document.getElementsByClassName("def");
        var i;
        for(i=0;i<dropdown.length;i++){
          var showDropdown = dropdown[i];
          if(showDropdown.classList.contains("showing")){
            showDropdown.classList.remove("showing");
          }
        }
      }
    }

window.onscroll = function() {fixednav()};


var navi = document.querySelector("nav");


var fixed = navi.offsetTop;


function fixednav() {
  if (window.pageYOffset >= fixed) {
    navi.classList.add("fixed-nav");
  } else {
    navi.classList.remove("fixed-nav");
  }
}

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
} 

var d = new Date();
var dy = d.getFullYear();
document.getElementById("year").innerHTML = "All Rights Reserved "+dy;


// Get the modal
var popupWindow = document.getElementById('popup');

// Get the button that opens the modal
var searchbox = document.getElementById("searchbox");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
searchbox.onclick = function() {
    popupWindow.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    popupWindow.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == popupWindow) {
        popupWindow.style.display = "none";
    }
}