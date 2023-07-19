import { $, $$ } from "../bindDocument/index.js";

function filterProduct() {
  const filterIcon = $(".filter-icon-mobile");
  const filterSidebar = $(".filter");
  const overlay = $(".header__overlay");

  filterIcon.addEventListener("click", openFilterProduct);
  overlay.addEventListener("click", closeFilterProduct);

  function openFilterProduct(e) {
    $("body").classList.add("open-menu");

    overlay.style.cssText = `
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 998;
    background-color: rgba(0, 0, 0, 0.4);
  `;

    filterSidebar.animate(
      {
        transform: "translateX(0)",
        opacity: [0, 1],
      },
      { duration: 400, fill: "forwards" }
    );
    e.stopPropagation();
  }

  function closeFilterProduct(e) {
    e.stopPropagation();
    filterSidebar.animate(
      {
        transform: "translateX(-200%)",
        opacity: [1, 0],
      },
      { duration: 400, fill: "forwards" }
    );
  }
}

export default filterProduct;
