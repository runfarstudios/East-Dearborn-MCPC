window.onload = function(){
    window.onscroll = function(){
        navFunction()
    }
}

var navbar = document.getElementById("nav");
var gallery = document.getElementById("gallery");
var locked = gallery.offsetTop;

function navFunction(){
    if (window.pageYOffset >= locked) {
        navbar.classList.add("locked")
      } 
    else {
        navbar.classList.remove("locked");
    }
}