const toggleIconMenu = document.querySelector("#toggleMenuIcon");
const sideBar = document.querySelector("#side-bar");

function toggleIcon() {
  toggleIconMenu.classList.toggle("active");
  sideBar.classList.toggle("active");
}

toggleIconMenu.addEventListener("click", toggleIcon);

function removeSideBarOnPageClick(e) {
  if (e.target !== toggleIconMenu && e.target !== sideBar) {
    toggleIconMenu.classList.remove("active");
    sideBar.classList.remove("active");
  }
}
document.addEventListener("click", removeSideBarOnPageClick);

let prevScrollPos = window.scrollY;


window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    
    document.querySelector("#toggleMenuIcon").style.top = "30";
  } else {
    
    document.querySelector("#toggleMenuIcon").style.top = "-80px";
  }
  prevScrollPos = currentScrollPos;
};
