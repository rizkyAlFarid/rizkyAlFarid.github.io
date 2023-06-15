const hamburger = document.querySelector('.hamburger-menu');
hamburger.addEventListener('click', function() {
    const navbar = document.getElementById('navBar');
    navbar.classList.toggle('showDown')
})