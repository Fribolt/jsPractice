const videoElement =  document.querySelector('#video');
const playButton =  document.querySelector('#play-button');
const pauseButton =  document.querySelector('#pause-button');
const rewindButton =  document.querySelector('#rewind-button');
const progressBar =  document.querySelector('#progress-bar');
let longVideo = null;

const initVideoParameters = () => {
    longVideo = videoElement.duration;
    progressBar.setAttribute('step',longVideo * 1 / 100);
    progressBar.setAttribute('max', longVideo);
};

videoElement.addEventListener('loadedmetadata',initVideoParameters);
playButton.addEventListener('click', () => videoElement.play());
pauseButton.addEventListener('click', () => videoElement.pause());
rewindButton.addEventListener('click', () => videoElement.currentTime = longVideo / 2);
videoElement.addEventListener('timeupdate', () => progressBar.value = videoElement.currentTime);