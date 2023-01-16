import addListeners from "./listeners.js";

window.onload = () => {
  addListeners();
  document.getElementById("loaderContainer").style.display = "none";
  document.getElementById("pageWrapper").style.display = "flex";
  document.getElementById("1").focus();

}