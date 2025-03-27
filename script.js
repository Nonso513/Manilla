document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");
  
    dropdown.addEventListener("mouseenter", function () {
      this.querySelector(".mega-menu").style.display = "block";
    });
  
    dropdown.addEventListener("mouseleave", function () {
      this.querySelector(".mega-menu").style.display = "none";
    });
  });

var btn=document.querySelector('.btn');
var menu=document.querySelector('.menu');
btn.addEventListener('click',function(){
    menu.classList.toggle('active');
})
var navlink=document.querySelector('ul li a');
for(var i=0;i<navlink.length;i++){
    navlink[i].addEventListener('click', function(){
        menu.classList.remove('active'); 
    })
}


// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
};

// When the user clicks on the button, scroll to the top of the page
scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
