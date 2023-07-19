import { $, $$ } from "./bindDocument/index.js";

import dropdown from "./dropdown/index.js";
import filterProduct from "./filter_product/index.js";
import menuHandle from "./header/index.js";
import priceRange from "./price_range/index.js";

menuHandle();
priceRange();
filterProduct();

const filterHeader = $$(".filter-header");
const filterList = $$(".filter-list");
filterHeader.forEach((item, index) => {
  dropdown(item, filterList[index]);
});

const filterHeader2 = $$(".filter-item-content");
const filterList2 = $$(".filter-item-sub");
filterHeader2.forEach((item, index) => {
  console.log(filterList2);
  dropdown(item, filterList2[index]);
});
