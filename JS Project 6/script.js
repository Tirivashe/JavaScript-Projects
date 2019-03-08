const navbarBtn = document.querySelector('.navbar-btn');
const navbarLinks = document.querySelector('.navbar-links');

navbarBtn.addEventListener('click', function(){
    navbarLinks.classList.toggle('navbar-collapse');
    navbarBtn.classList.toggle('change');
});