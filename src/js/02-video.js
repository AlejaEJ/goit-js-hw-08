import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on('timeupdate', throttle(function(data) {
    const time = data.seconds;
    localStorage.setItem('videoplayer-current-time', time);
}, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
    player.setCurrentTime(savedTime).then(function(seconds) {
        console.log('Current time is now:', seconds);
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                console.log('The time was less than 0 or greater than the videos duration.');
                break;
            default:
                console.log('Some other error ocurred:', error);
                break;
        }
    });
}