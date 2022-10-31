// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const pic = document.querySelector('[src="assets/images/no-image.png"]');
  const audio = document.querySelector('audio');
  const buttons = document.querySelectorAll("button");
  const slider = document.querySelector('#volume');
  const volPic = document.querySelector('[src="assets/icons/volume-level-2.svg"]');

  let confetti = 0;
  const jsConfetti = new JSConfetti()
  console.log(buttons);

  const airhorn = document.querySelector('[value="air-horn"]');
  airhorn.addEventListener('click', function(){changePic('assets/images/air-horn.svg', 'assets/audio/air-horn.mp3')});

  const carhorn = document.querySelector('[value="car-horn"]');
  carhorn.addEventListener('click', function(){changePic('assets/images/car-horn.svg', 'assets/audio/car-horn.mp3')});

  const partyhorn = document.querySelector('[value="party-horn"]');
  partyhorn.addEventListener('click', function(){changePic('assets/images/party-horn.svg', 'assets/audio/party-horn.mp3')});

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      audio.play();
      if(confetti){
        jsConfetti.addConfetti();
      }
    });
  });

  function changePic(source, audiosource){
    pic.src = source;
    audio.src = audiosource;

    if(source == 'assets/images/party-horn.svg') {
      confetti = 1;
    }
    else{
      confetti =0;
    }
  }

  slider.oninput = function() {
    var vol = this.value;
    if(vol == 0){
      volPic.src = "assets/icons/volume-level-0.svg";
    }
    else if(vol >= 1 && vol < 33){
      volPic.src = "assets/icons/volume-level-1.svg";
    }
    else if(vol >= 33 && vol < 67){
      volPic.src = "assets/icons/volume-level-2.svg";
    }
    else if(vol >= 37 && vol <= 100){
      volPic.src = "assets/icons/volume-level-3.svg";
    }
    audio.volume = vol / 100;
  }
}