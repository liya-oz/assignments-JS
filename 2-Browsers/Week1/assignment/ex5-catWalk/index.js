const imgCat = document.querySelector('.imageCat');
let catPosition = 0;
const gifWalkingCat = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
const gifDancingCat = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
let isDancing = false;
let hasDanced = false;
let walkingInterval;

function catWalk() {
  const displayWidth = document.documentElement.clientWidth;
  const middleOfDisplay = displayWidth / 2;

  if (!isDancing) {
    catPosition += 10;

    if (catPosition > displayWidth) {
      catPosition = 0;
      hasDanced = false;
    }

    imgCat.style.left = catPosition + 'px';

    if (!hasDanced && catPosition >= middleOfDisplay - imgCat.width / 2 && !isDancing) {
      isDancing = true;
      hasDanced = true;
      imgCat.src = gifDancingCat;

      clearInterval(walkingInterval);

      setTimeout(() => {
        imgCat.src = gifWalkingCat;
        isDancing = false;
        startWalking();
      }, 5000);
    }
  }
}

function startWalking() {
  walkingInterval = setInterval(catWalk, 50);
}

window.onload = startWalking;
