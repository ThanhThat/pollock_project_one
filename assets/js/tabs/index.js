import { $, $$ } from "../bindDocument/index.js";

export default function tabs(tabsItem, tabsPane) {
  tabsItem.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      $(".tabs-item.active").classList.remove("active");
      tab.classList.add("active");
      $(".tab-pane-item.active").classList.remove("active");
      tabsPane[index].classList.add("active");
    });
  });
}
