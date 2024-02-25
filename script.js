"use strict";

function randomColor() {
  let hexColor = "#";
  while (hexColor.length < 7) {
    hexColor += Math.trunc(Math.random() * 16).toString(16);
  }
  return hexColor;
}

//Lệnh lấy số ô người dùng nhập vào
document
  .querySelector("div button:first-child")
  .addEventListener("click", function () {
    console.log(document.querySelector("input").value);
  });
