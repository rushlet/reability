console.log('hello!');

const nav = document.querySelector('.navbar-collapse');
const toggle = document.querySelector('.navbar-toggle');
toggle.addEventListener('click', (evt) => {
    toggle.classList.toggle('collapse');
    nav.classList.toggle('collapse')
});