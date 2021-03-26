function openLeftMenu() {
  var y = document.getElementById("test1");
  if (y.className === "close-btn") {
    y.className += " close-btn-test";
  } else {
    y.className = "close-btn";
  }
  var x = document.getElementById("myLeftSideBar");
  if (x.className === "left-menubar") {
    x.className += " responsive";
  } else {
    x.className = "left-menubar";
  }
}

function closeLeftMenu() {
  var x = document.getElementById("myLeftSideBar");
  if (x.className === "left-menubar") {
    x.className -= " responsive";
    
  } else {
    x.className = "left-menubar";
  }
  var y = document.getElementById("test1");
  if (y.className === "close-btn") {
    y.className -= " close-btn-test";
  } else {
    y.className = "close-btn";
  }
}
// function closeLeftMenu() {
//   document.getElementById("myLeftSideBar").style.width = "0";
// }
// When the user scrolls the page, execute fixedMenu
window.onscroll = function() {fixedMenu()};
// Get the navbar
var sidebar = document.getElementById("mySideBar");

// Get the offset position of the navbar
var sticky = sidebar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixedMenu() {
  if (window.pageYOffset >= sticky) {
    sidebar.classList.add("sticky");
  } else {
    sidebar.classList.remove("sticky");
  }
}