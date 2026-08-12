//Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenuItems = document.querySelector(".mobile-menu-items");

  mobileMenuToggle.addEventListener("click", () => {
    console.log("class active");
    mobileMenuItems.classList.toggle("active");
  });
});

//navbar scrolll
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    console.log("scrolled");
    if (window.scrollY > 0) {
      navbar.classList.add("navbar-scroll");
    } else {
      navbar.classList.remove("navbar-scroll");
    }
  });
});
