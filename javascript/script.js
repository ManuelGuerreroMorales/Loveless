const moreOptions = document.querySelector("#bmore");
const moreMenu = document.querySelector(".mas .menu");



moreOptions.addEventListener("click", (e) => {
  e.preventDefault();
  moreMenu.classList.toggle("show");
});

const menuMobile = document.querySelector("#bmenu");
const moreMobile = document.querySelector(".links");



menuMobile.addEventListener("click", (e) => {
  e.preventDefault();
  moreMobile.classList.toggle("show");
});

