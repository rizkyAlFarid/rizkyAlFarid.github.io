const hamburger = document.querySelector('.hamburger-menu');
hamburger.addEventListener('click', function() {
    const navbar = document.getElementById('navBar');
    const lineTop = document.getElementById('atas')
    const lineBottom = document.getElementById('bawah')
    const lineCenter = document.getElementById('tengah')

    navbar.classList.toggle('showDown');
    lineTop.classList.toggle('satu')
    lineCenter.classList.toggle('dua')
    lineBottom.classList.toggle('tiga')
});



