import { $, $$ } from "../bindDocument/index.js";

function menuHandle() {
  const menuIcon = $("#menu-js");
  const navbar = $("#nav-js");
  const body = $("body");
  const overlay = $(".header__overlay");
  const closeBtn = $(".close-menu");

  menuIcon.addEventListener("click", openMenu);
  overlay.addEventListener("click", closeMenu);
  closeBtn.addEventListener("click", closeMenu);

  function closeMenu() {
    navbar.animate(
      {
        transform: "translateX(100%)",
        opacity: [1, 0],
      },
      {
        duration: 500,
        fill: "forwards",
      }
    );

    body.classList.remove("open-menu");

    overlay.style.cssText = `
      transform: translateX(100%);
    `;
  }

  function openMenu() {
    navbar.animate(
      {
        transform: "translateX(0)",
        opacity: [0, 1],
      },
      {
        duration: 500,
        fill: "forwards",
      }
    );

    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 998;
      background-color: rgba(0, 0, 0, 0.4);
    `;

    body.classList.add("open-menu");
  }
}

export default menuHandle;
