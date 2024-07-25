var navbar = document.getElementById("navbar");
var navLinks = navbar.getElementsByTagName("a");

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add("navbar-scrolled");
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "black";
        }
    } else {
        navbar.classList.remove("navbar-scrolled");
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "";
        }
    }
}
window.addEventListener("scroll", scrollFunction);
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "#555";
    });
    navLinks[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "";
    });
}
