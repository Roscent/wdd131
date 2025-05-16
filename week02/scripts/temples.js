const hamburgerBtn = document.getElementById('hamburgerBtn');
const primaryNav = document.querySelector('#primaryNav ul');

hamburgerBtn.addEventListener('click', () => {
    primaryNav.classList.toggle('show');
    hamburgerBtn.textContent = primaryNav.classList.contains('show') ? '✕' : '☰';
});

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;