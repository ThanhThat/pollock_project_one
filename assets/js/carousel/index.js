import { $, $$ } from "../bindDocument/index.js";

export default function carousel(imgWrap, imgList) {
  let currentIndex = 0;

  imgList.forEach((item, index) => {
    item.addEventListener("click", function () {
      currentIndex = index;

      $(".img-item.active").classList.remove("active");

      const imgItem = item.querySelector(`img`);

      imgWrap.src = imgItem.src;
      item.classList.add("active");
    });
  });
}
