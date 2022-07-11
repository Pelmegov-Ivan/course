function burgerMenu(selector) {
  let menu = document.querySelector(selector);
  let button = menu.querySelector(".burger_menu_button");

  let links = menu.querySelector(".burger-menu_link");
  let overlay = menu.querySelector(".burger-menu__overlay");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });
  links.addEventListener("click", () => toggleMenu());
  overlay.addEventListener("click", () => toggleMenu());
  function toggleMenu() {
    menu.classList.toggle("burger-menu_active");
    if (menu.classList.contains("burger-menu_active")) {
      document.getElementById("burger-nav").style.overflow = "visible";
    } else {
      document.getElementById("burger-nav").style.overflow = "hidden";
    }
  }
}
burgerMenu(".burger-menu");
var msg = document.querySelector(".message");
msg = msg.innerText;

var hundred = "100+";
if (msg > 100) {
  document.getElementById("mess").innerHTML = hundred;
} else {
  document.getElementById("mess").innerHTML = msg + "+";
}
var v = document.querySelector(".money");
v = v.innerText;
v = Number(v);
var mon = v.toLocaleString();
var rub = document.createElement("img");
rub.setAttribute("src", "img/Р.svg");

document.getElementById("mon").innerHTML = mon + "&#160";

document.getElementById("mon").appendChild(rub);
