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