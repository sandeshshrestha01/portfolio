/* ----------------- NAVIGATION BAR FUNCTION------------------- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");  // Corrected ID reference

  menuBtn.classList.toggle("responsive");
  
}
/* ----------------- NAVIGATION BAR FUNCTION------------------- */
window.onscroll = function() {
  headerShadow();
};

window.onscroll = function() {
  headerShadow();
};

function headerShadow() {
  const navheader = document.querySelector(".header"); // Select header by class

  if (!navheader) return; // Prevent errors if header is missing

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navheader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navheader.style.height = "70px";  // Increased height
    navheader.style.lineHeight = "70px";
  } else {
    navheader.style.boxShadow = "none";
    navheader.style.height = "90px";  // Increased height
    navheader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typeText",{
    strings : [
      " Web Developer, " ," Deginer,  "
      ," Hacker, " ," Programmer"],
    loop : true,
    typeSpeed : 200, 
    backSpeed : 100,
    backDelay : 2000
  })