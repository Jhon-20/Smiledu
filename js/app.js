/************VARIABLES*************** */
const iconHamburguer = document.querySelector(".iconHamburguer");
let userDates = document.querySelector(".user_dates");
let logo = document.querySelector(".logo");
let aside = document.getElementById("aside");
let text_aside = document.querySelectorAll(".text_aside");
let main_container = document.querySelector(".main_container");
let item_icon = document.querySelectorAll(".item_icon");
const subMenuBtn = document.querySelectorAll(".sub_menu");
const content_submenu_nav_aside = document.querySelector(
  ".content_submenu_nav_aside"
);
const icon_drop = document.getElementById("icon_drop");
/************ASIDE*****************/
iconHamburguer.onclick = function () {
  logo.classList.toggle("resize_logo");
  aside.classList.toggle("resize");
  main_container.classList.toggle("resize_main");
  userDates.classList.toggle("resize_user_dates");
  icon_drop.classList.toggle("resize_icon_drop");
  content_submenu_nav_aside.classList.toggle("resize_submenu");

  for (const textos of text_aside) {
    textos.classList.toggle("resize_text");
  }
};
/***************SUB MENU*************** */
for (let i = 0; i < subMenuBtn.length; i++) {
  subMenuBtn[i].addEventListener("click", function () {
    const subMenu = this.nextElementSibling;
    const heigtSubMenu = subMenu.scrollHeight;
    if (subMenu.classList.contains("desplegar")) {
      subMenu.classList.remove("desplegar");
      subMenu.removeAttribute("style");
    } else {
      subMenu.classList.add("desplegar");
      subMenu.style.height = heigtSubMenu + "px";
    }
  });
}
