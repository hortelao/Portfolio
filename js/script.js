function toTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function checkScrollButton() {
    if(window.scrollY === 0) {
        document.querySelector('.goToTop').style.display = 'none';
    } else {
        document.querySelector('.goToTop').style.display = 'flex';
    }
}

window.addEventListener('scroll', checkScrollButton);