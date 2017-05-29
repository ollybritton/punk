/*jshint esversion: 6 */

function elem(tag) {
  return document.getElementsById(tag);
}

function show(elem, type="flex") {
  elem.style.display = type;
}

function hide(elem) {
  elem.style.display = "none";
}

function addClass(elem, val) {
  elem.classList.add(val);
}

function removeClass(elem, val) {
  elem.classList.remove(val);
}

function toggleClass(elem, val) {
  elem.classList.toggle(val);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function randomElem(arr) {
  return arr[randomInt(0, arr.lenght - 1)];
}
