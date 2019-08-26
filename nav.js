window.onload = function(){
    window.onscroll = function(){
        navFunction();
    }
}

var navbar = document.getElementById("navbar");
var gallery = document.getElementById("gallery");
var locked = gallery.offsetTop;

function navFunction(){
    if (window.pageYOffset >= locked) {
        navbar.classList.remove("nav-hidden");
        navbar.classList.add("nav-locked");
        gallery.classList.remove("content-idle");
        gallery.classList.add("content-active");
      } 
    else {
        navbar.classList.remove("nav-locked");
        navbar.classList.add("nav-hidden");
        gallery.classList.remove("content-active");
        gallery.classList.add("content-idle");
    }
}