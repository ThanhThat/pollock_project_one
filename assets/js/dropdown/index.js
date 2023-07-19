import { $, $$ } from "../bindDocument/index.js";

export default function dropdown(header, content) {
  header.addEventListener("click", function () {
    content.classList.toggle("dropdown");
    const img = header.querySelector("img");

    header.dataset.direction === "down"
      ? (header.dataset.direction = "up")
      : (header.dataset.direction = "down");

    header.dataset.direction === "up"
      ? (img.src = "./assets/images/shop_angel.svg")
      : (img.src = "./assets/images/filter_icon_up.svg");
  });
}
