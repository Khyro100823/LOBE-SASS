const BurgerBtn = document.querySelector(".burger__btn");
const HeaderNav = document.querySelector(".header__nav");
BurgerBtn.addEventListener("click", () => {
BurgerBtn.classList.toggle("open");
HeaderNav.classList.toggle("open");
})
const links = document.querySelectorAll(".footer__links h4");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.nextElementSibling.classList.toggle("open");
    link.querySelector("i").classList.toggle("open");
  });
});