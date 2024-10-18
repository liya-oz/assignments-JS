// This code  uses 'intervals' and 'clearInterval' to control the cat's actions.

const imgCat = document.querySelector('.imageCat');
const gifWalkingCat = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
const gifDancingCat = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

let catPosition = 0; 
let stepCat = 10;
let isDancing = false;
let catInterval;

function catWalk() {
  const displayWidth = document.documentElement.clientWidth;
  const middleOfDisplay = displayWidth / 2;

  catInterval = setInterval(() => {
    if (!isDancing) { 
      let isWalking = catPosition += stepCat; 

      if (catPosition >= middleOfDisplay - imgCat.width / 2 && catPosition <= middleOfDisplay + imgCat.width / 2) {
        clearInterval(catInterval);
        imgCat.src = gifDancingCat;
        isDancing = true;

        setTimeout(() => {
          imgCat.src = gifWalkingCat;
          isDancing = false;
          catWalk(); 
        }, 5000); 
      } else {
        imgCat.style.left = catPosition + 'px';

        if (catPosition < 0) {
          stepCat = 10;
        }
      }
    }
  }, 50);
}

window.addEventListener('load', catWalk);
