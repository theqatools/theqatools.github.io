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
  try{
    getEl(elName).addEventListener(event, handler);
  }catch {
    console.log(elName)
  }
}

function copy(id) {
  const input = getEl(id);
  input.select();
  document.execCommand("copy");
}