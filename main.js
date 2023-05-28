function init() {
    const videoButtons = document.querySelectorAll('.elevatorPitch');
    for (let i = 0; i < videoButtons.length; i++) {
        videoButtons[i].addEventListener('click', handleVideoButton(e.id))
    }
}

function handleVideoButton() {

}

function handleHideVideo() {
    const video = document.querySelector('#pitchVideo');
    video.src = "";
    const videoBackdrop = document.querySelector('')
}

window.onload = init;