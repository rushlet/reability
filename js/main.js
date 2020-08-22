const nav = document.querySelector('.navbar-collapse');
const toggle = document.querySelector('.navbar-toggle');
let toggled = false;
toggle.addEventListener('click', () => toggleNavBar());

function toggleNavBar() {
    toggle.classList.toggle('collapse');
    nav.classList.toggle('collapse');
    toggled = !toggled;
    toggle.setAttribute('aria-expanded', toggled);
}
