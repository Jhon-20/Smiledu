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
const colapse = document.getElementById("colapse")
const icon_drop = document.getElementById("icon_drop");
const sub_menu_sub = document.querySelectorAll(".sub_menu_sub");
const list_menu = document.querySelector(".active_sub_menu");
let iconButtonAdd = document.querySelector(".button_add");
const iconLabel = document.getElementById("icon_label")
const religion = document.querySelectorAll(".religion")
const listaReligion = document.querySelector(".lista_religion");
const aulas = document.querySelector(".aulas");
const table = document.querySelector(".container_table")
const close = document.querySelector(".close")
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
aulas.onclick = () => {
  table.style.visibility = "visible"
  table.style.opacity = "1"
  main_container.classList.add("before")
}
close.onclick = () => {
  table.style.visibility = "hidden"
  table.style.opacity = "0"
  main_container.classList.remove("before")
}

/***************SUB MENU*************** */
for (let i = 0; i < subMenuBtn.length; i++) {
  subMenuBtn[i].addEventListener("click", function () {
    const subMenu = this.nextElementSibling;
    const heigtSubMenu = subMenu.scrollHeight;
    if (subMenu.classList.contains("desplegar")) {
      subMenu.classList.remove("desplegar");
      subMenu.removeAttribute("style");
    } else if (aside.classList.contains("resize")) {
      subMenu.classList.remove("desplegar");
    } else {
      subMenu.classList.add("desplegar");
      subMenu.style.height = heigtSubMenu + "px";
      setTimeout(() => {
        subMenu.style.overflow = "visible"
      }, 100);

    }
  });
}
for (let i = 0; i < sub_menu_sub.length; i++) {
  sub_menu_sub[i].addEventListener("click", function () {
    const subMenuSub = this.nextElementSibling;
    const heigtSubMenuSub = subMenuSub.scrollHeight;
    if (subMenuSub.classList.contains("desplegarSub")) {
      subMenuSub.classList.remove("desplegarSub");
      subMenuSub.removeAttribute("style");
      list_menu.classList.remove("activa_menu");
    } else {
      subMenuSub.classList.add("desplegarSub");
      subMenuSub.style.height = heigtSubMenuSub + "px";
      list_menu.classList.add("activa_menu");
    }
  });
}
/**ACORDEON************/
const accordionTitle = document.querySelectorAll(".accordion__title"),
  accordionContent = document.querySelectorAll(".accordion__content");

// eventos para los titulos
for (let i = 0; i < accordionTitle.length; i++) {
  const title = accordionTitle[i];

  title.addEventListener("click", () => {
    const index = i;
    accordionTitle[index].classList.toggle("active");
    accordionContent[index].classList.toggle("active");
    for (let f = 0; f < accordionTitle.length; f++) {
      if (f !== i) {
        accordionTitle[f].classList.remove("active");
        accordionContent[f].classList.remove("active");

      }
    }
  });
}
iconButtonAdd.onclick = function () {
  iconButtonAdd.classList.toggle("active_button_add");
  document.querySelector(".box_button_icons").classList.toggle("active_icons_button");
};
/***************ACTIVAR POPPUS DETALLE*****************/
iconLabel.addEventListener("click", () => {
  document.querySelector(".detail_poppup").classList.toggle("active_poppup_details")
})

/****************ACTIVA SUBMENUS COMBOS*****************/
for (let i = 0; i < religion.length; i++) {
  religion[i].addEventListener("click", function () {
    const subMenuCombo = this.nextElementSibling;
    const heigtSubMenuCombo = subMenuCombo.scrollHeight;
    if (subMenuCombo.classList.contains("desplegar_combo")) {
      subMenuCombo.classList.remove("desplegar_combo");
      subMenuCombo.removeAttribute("style");
      listaReligion.classList.remove("activa_submenu_combo");
    } else {
      subMenuCombo.classList.add("desplegar_combo");
      subMenuCombo.style.height = heigtSubMenuCombo + "px";
      listaReligion.classList.add("activa_submenu_combo");
    }
  });
}