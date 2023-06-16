const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ş", "o", "p", "w", "e", "t", "y", "u"];

function handleKeyDown(event) {

    const keyCode = event.keyCode;

    const key = event.key;
    const keyElement = document.getElementById(`key${key.toUpperCase()}`);
    const code = event.code;
    const keyN = key.toLowerCase();
    console.log(keyCode, keyElement, key, code, key.toLowerCase())
    if (keys.includes(keyN)) {
        const audio = new Audio(`audio/${keyN}.wav`);
        audio.play();

        keyElement.classList.add('flash');
        setTimeout(() => {
            keyElement.classList.remove('flash');
        }, 200);
    }


}

document.addEventListener('keydown', handleKeyDown);

const videoContainer = document.getElementById('videoContainer');
const video = document.createElement('video');
video.src = 'lamborghini.mp4';
video.autoplay = true;
video.loop = true;
video.muted = true;
videoContainer.appendChild(video);


