const hamburguer = document.querySelector(".hamburguer");
const hamburguerNav = document.querySelector(".hamburguer-nav");
const navItem = document.querySelector(".nav-item");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  hamburguerNav.classList.toggle("active");
});

navItem.addEventListener("click", () => {
  hamburguer.classList.remove("active");
  hamburguerNav.classList.remove("active");
});
