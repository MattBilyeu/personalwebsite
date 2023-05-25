function init() {
    const hamburgerMenu = document.querySelector('.hamburgerMenuIcon');
    hamburgerMenu.addEventListener('click', handleHamburgerClick)
}

function handleHamburgerClick() {
    const mobileBackdrop = document.querySelector('.mobileBackdrop');
    const mobileNav = document.querySelector('.mobileNavButtons');
    mobileBackdrop.style.display = 'block';
    mobileNav.style.display = 'flex';
    mobileNav.addEventListener('click', ()=> {
        mobileBackdrop.style.display = 'none';
        mobileNav.style.display = 'none';
    })
    mobileBackdrop.addEventListener('click', ()=> {
        mobileBackdrop.style.display = 'none';
        mobileNav.style.display = 'none';
    })
}

window.onLoad = init();