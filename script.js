const menuIcon=document.querySelector('#menu-icon');
const navLinks=documnet.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}
