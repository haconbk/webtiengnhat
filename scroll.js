function openLeftMenu() {
  var x = document.getElementById("myLeftSideBar");
  var y = window.pageYOffset;
  if (x.className === "left-menubar") {
    x.className += " responsive";
  } else {
    x.className = "left-menubar";
  }
}
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var sidebar = document.getElementById("mySideBar");

// Get the offset position of the navbar
var sticky = sidebar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    sidebar.classList.add("sticky")
  } else {
    sidebar.classList.remove("sticky");
  }
}