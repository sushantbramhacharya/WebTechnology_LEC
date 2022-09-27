const sounds = {
  KeyA: "./sound/key01.ogg",
  KeyW: "./sound/key02.ogg",
  KeyS: "./sound/key03.ogg",
  KeyE: "./sound/key04.ogg",
  KeyD: "./sound/key05.ogg",
  KeyF: "./sound/key06.ogg",
  KeyT: "./sound/key07.ogg",
  KeyG: "./sound/key08.ogg",
  KeyY: "./sound/key09.ogg",
  KeyH: "./sound/key10.ogg",
  KeyU: "./sound/key11.ogg",
  KeyJ: "./sound/key12.ogg",
};

function playSound(sound) {
  console.log("playing", sound);
  var audio = new Audio(sound);
  audio.play();
}

window.addEventListener("keypress", function (e) {
  console.log(e.code);
  if (sounds[e.code]) {
    console.log("clicking", e.code);

    playSound(sounds[e.code]);
  }
});
