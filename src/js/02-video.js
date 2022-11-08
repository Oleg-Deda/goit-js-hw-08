import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const PlayerEl = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(PlayerEl);
const PlayerTime = 'videoplayer-current-time';

function onTimeUpdate(data) {
  console.log(data.duration, data.percent, data.seconds);
  localStorage.setItem(PlayerTime, data.seconds);
}
player.on('timeupdate', throttle(onTimeUpdate, 1000));

if (localStorage.getItem(PlayerTime)) {
  player.setCurrentTime(localStorage.getItem(PlayerTime));
}
