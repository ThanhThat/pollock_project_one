import { $ } from "../bindDocument/index.js";

let currentMax = 2999;
let currentMin = 10;
const max = 2999;

function priceRange() {
  function calcLeftPosition(value) {
    return ((value - 10) * 100) / (max - 10);
  }

  $("#rangeMin").addEventListener("input", function (e) {
    const newValue = e.target.value;

    if (newValue > currentMax) {
      return;
    }

    currentMin = newValue;

    $("#thumbMin").style.cssText = `
      left: ${calcLeftPosition(currentMin)}%;
    `;

    $(".line").style.cssText = `
      left: ${calcLeftPosition(currentMin)}%;
      right: ${100 - calcLeftPosition(currentMax)}%;
    `;
    $("#min").innerHTML = `$${currentMin}`;
  });

  $("#rangeMax").addEventListener("input", function (e) {
    const newValue = e.target.value;

    if (newValue < currentMin) {
      return;
    }

    currentMax = newValue;

    $("#thumbMax").style.cssText = `
      right: ${100 - calcLeftPosition(currentMax)}%;
    `;

    $(".line").style.cssText = `
      left: ${calcLeftPosition(currentMin)}%;
      right: ${100 - calcLeftPosition(currentMax)}%`;

    $("#max").innerHTML = `$${currentMax}`;
  });
}

export default priceRange;
