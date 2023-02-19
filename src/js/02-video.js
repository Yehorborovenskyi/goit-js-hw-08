import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(currentTime, 1000));
function currentTime(data) {
  localStorage.setItem('videoplayer-time', data.seconds);
}
player
  .setCurrentTime(localStorage.getItem('videoplayer-time'))
  .catch(function (error) {
    console.error(error.name);
    console.log(error.message);
  });
