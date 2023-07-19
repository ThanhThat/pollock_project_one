import { $, $$ } from "../bindDocument/index.js";

export default function dropdown(
  header,
  content,
  iconOpen,
  iconClose,
  parentElement
) {
  header.addEventListener("click", function () {
    if (parentElement) {
      parentElement.classList.add("active");
    }
    content.classList.toggle("dropdown");
    const img = header.querySelector("img");

    header.dataset.direction === "open"
      ? (header.dataset.direction = "close")
      : (header.dataset.direction = "open");

    header.dataset.direction === "close"
      ? (img.src = iconOpen)
      : (img.src = iconClose);
  });

  // open "./assets/images/shop_angel.svg"
  // close "./assets/images/filter_icon_up.svg"
}
