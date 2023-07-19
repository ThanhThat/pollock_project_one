import { $, $$ } from "./bindDocument/index.js";

import dropdown from "./dropdown/index.js";
import filterProduct from "./filter_product/index.js";
import menuHandle from "./header/index.js";
import priceRange from "./price_range/index.js";
import carousel from "./carousel/index.js";
import tabs from "./tabs/index.js";

(() => {
  menuHandle();

  const url = new URL(document.URL);
  const fileName = url.pathname.split("/").pop();

  if (fileName === "shop.html") {
    priceRange();
  }

  filterProduct();

  const filterHeader = $$(".filter-header");
  const filterList = $$(".filter-list");

  if (!filterHeader || !filterList) return;
  filterHeader.forEach((item, index) => {
    dropdown(item, filterList[index]);
  });

  const filterHeader2 = $$(".filter-item-content");
  const filterList2 = $$(".filter-item-sub");
  if (!filterHeader2 || !filterList2) return;
  filterHeader2.forEach((item, index) => {
    console.log(filterList2);
    dropdown(item, filterList2[index]);
  });

  const imgList = $$(".img-list > .img-item");
  const imgWrap = $(".img-wrap > img");
  if (!imgList || !imgWrap) return;
  carousel(imgWrap, imgList);

  const tabsList = $$(".tabs-item");
  const tabsPane = $$(".tab-pane-item");
  tabs(tabsList, tabsPane);
})();
