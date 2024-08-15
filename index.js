const toggleIconMenu = document.querySelector("#toggleMenuIcon");
const sideBar = document.querySelector("#side-bar");

function toggleIcon() {
    toggleIconMenu.classList.toggle("active");
    sideBar.classList.toggle('active')
}

toggleIconMenu.addEventListener("click", toggleIcon);
