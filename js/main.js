/* ----------------- NAVIGATION BAR FUNCTION------------------- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");  // Corrected ID reference

  menuBtn.classList.toggle("responsive");
  
}
/*------scroll to top button------*/
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default jump behavior
      
      const targetId = this.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId); // Find the section
      
      if (targetSection) {
          window.scrollTo({
              top: targetSection.offsetTop - 50, // Adjust for header height
              behavior: "smooth" // Enable smooth scrolling
          });
      }
  });
});

/*-----HIGHLET EFFECT------*/
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let currentSection = "";

    document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop - 50; // Adjust for header height
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active-link");
        if (link.getAttribute("href").substring(1) === currentSection) {
            link.classList.add("active-link");
        }
    });
});

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typeText",{
    strings : [
      " Web Developer, " ," Deginer,  "
      ," Programmer"],
    loop : true,
    typeSpeed : 200, 
    backSpeed : 100,
    backDelay : 2000
  })
  /* ----- Tcontact fom ----- */
  const form = document.getElementById('form');
  const result = document.getElementById('result');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."
  
      fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: json
          })
          .then(async (response) => {
              let json = await response.json();
              if (response.status == 200) {
                  result.innerHTML = Swal.fire({
                      title: "Success!",
                      text: "Massage sent Successfully!",
                      icon: "success"
                    });
              } else {
                  console.log(response);
                  result.innerHTML = json.message;
              }
          })
          .catch(error => {
              console.log(error);
              result.innerHTML = Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!"
                });;
          })
          .then(function() {
              form.reset();
              setTimeout(() => {
                  result.style.display = "none";
              }, 3000);
          });
  });
