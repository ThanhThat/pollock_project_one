import { $, $$ } from "../js/bindDocument/index.js";
(() => {
  // ./assets/images/contact-plus-icon.svg
  // ./assets/images/contact-minus-icon.svg

  const faq = $$(".contact-faq-item");
  const actionFaq = $$(".contact-faq-icon");
  const answer = $$(".contact-faq-answer");

  if (!faq || !actionFaq || !answer) return;

  actionFaq.forEach((item, index) => {
    item.addEventListener("click", function () {
      const img = item.querySelector("img");
      faq[index].dataset.state === "open"
        ? (faq[index].dataset.state = "close")
        : (faq[index].dataset.state = "open");

      faq[index].dataset.state === "open"
        ? (img.src = "./assets/images/contact-minus-icon.svg")
        : (img.src = "./assets/images/contact-plus-icon.svg");

      faq[index].dataset.state === "open"
        ? faq[index].classList.add("active")
        : faq[index].classList.remove("active");
    });
  });
})();
