const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const main = document.querySelector(".main");

navToggle.addEventListener("click", () => {
  if (!navMenu.classList.toggle("nav-menu_visable")) {
    main.classList.remove("mascotas_remove");
  } else {
    main.classList.add("mascotas_remove");
  }
});
