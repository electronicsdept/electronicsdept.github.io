/*Navbar toggle and autoclose when click else where*/
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
    /*fixed nav*/
    // When the user scrolls the page, execute navbar function 
window.onscroll = function() {fixednav()};

// Get the nav
var navi = document.querySelector("nav");

// Get the offset position of the navbar
var fixed = navi.offsetTop;

// Add the fixed class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixednav() {
  if (window.pageYOffset >= fixed) {
    navi.classList.add("fixed-nav");
  } else {
    navi.classList.remove("fixed-nav");
  }
}
/*carousel*/
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
/*auto year update*/
var d = new Date();
var dy = d.getFullYear();
document.getElementById("year").innerHTML = "All Rights Reserved "+dy;

/*AJAX*/
function loadContent() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      document.querySelector(".content").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET","update.txt",true);
    xhttp.send();
  }