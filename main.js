function init() {
    const videoButtons = document.querySelectorAll('.elevatorPitch');
    for (let i = 0; i < videoButtons.length; i++) {
        videoButtons[i].addEventListener('click', () => {
            handleVideoButton(videoButtons[i].id)
        })
    }
    const videoBackdrop = document.querySelector('.videoBackdrop');
    videoBackdrop.addEventListener('click', ()=> {
        handleHideVideo();
    })
}

function handleVideoButton(id) {
    const videoBackdrop = document.querySelector('.videoBackdrop');
    videoBackdrop.style.display = 'block';
    const video = document.querySelector('#pitchVideo');
    video.src = id;
}

function handleHideVideo() {
    const video = document.querySelector('#pitchVideo');
    video.src = "";
    const videoBackdrop = document.querySelector('.videoBackdrop');
    videoBackdrop.style.display = 'none';
}

window.onload = init;