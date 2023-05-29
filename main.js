let chosenVideo = undefined;

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
    chosenVideo = document.querySelector('#' + id);
    chosenVideo.style.display = 'block';
}

function handleHideVideo() {
    let videos = document.querySelectorAll('video');
    for (let i = 0; i < videos.length; i++) {
        videos[i].pause();
    }
    chosenVideo.style.display = 'none';
    const videoBackdrop = document.querySelector('.videoBackdrop');
    videoBackdrop.style.display = 'none';
}

window.onload = init;