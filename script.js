document.addEventListener("DOMContentLoaded", function () {
    const logoContainer = document.getElementById("logo-container");
  
    // Slide logo in from the left on page load
    setTimeout(() => {
      logoContainer.classList.add("visible");
    }, 100);
  
    // Update logo position on scroll
    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > 0) {
        if (logoContainer.classList.contains("visible")) {
          logoContainer.classList.remove("visible");
        }
  
        if (logoContainer.classList.contains("scrolling-left")) {
          logoContainer.classList.remove("scrolling-left");
        }
  
        logoContainer.classList.add("scrolling-right");
      } else {
        if (logoContainer.classList.contains("scrolling-right")) {
          logoContainer.classList.remove("scrolling-right");
          logoContainer.classList.add("scrolling-left");
  
          // Slide logo back to center after moving to left
          setTimeout(() => {
            logoContainer.classList.remove("scrolling-left");
            logoContainer.classList.add("visible");
          }, 1000);
        }
      }
    });
  });