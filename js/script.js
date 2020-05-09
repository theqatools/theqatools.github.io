var checkbox = document.getElementById('menu-hamburguer');
var nav = document.getElementById('menuNav');

function onResize() {
  checkbox.checked = false;
  nav.classList.remove("visible");
}

function showMenu() {
  if (!!checkbox.checked) {
    nav.classList.add("visible");
  }
  else {
    nav.classList.remove("visible");
  }

}

function getEl(id) {
  return document.getElementById(id);
}

function setDisplay(id, value) {
  getEl(id).style.display = value;
}

function addHandler(elName, event, handler) {
  getEl(elName).addEventListener(event, handler);
}

function copy(id) {
  const input = getEl(id);
  input.select();
  document.execCommand("copy");
}