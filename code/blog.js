var sidevar = document.getElementById("sidevar");
var closeSidevar = document.getElementById("closeSidevar");

closeSidevar.onclick = function() {
  sidevar.style.transform = "translateX(-100%)";
}

function openSidenav() {
    sidevar.style.transform = "translate(0)"
}