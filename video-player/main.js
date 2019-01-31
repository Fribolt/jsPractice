const videoElement =  document.querySelector('#video');
const playButton =  document.querySelector('#play-button');
const pauseButton =  document.querySelector('#pause-button');


playButton.addEventListener('click', () => videoElement.play());
pauseButton.addEventListener('click', () => videoElement.pause());
videoElement.addEventListener('timeupdate', () => console.log(videoElement.currentTime));