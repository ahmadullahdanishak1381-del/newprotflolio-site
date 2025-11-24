function setDark() { document.body.classList.add('dark-mode'); }

function setLight() { document.body.classList.remove('dark-mode'); }

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}