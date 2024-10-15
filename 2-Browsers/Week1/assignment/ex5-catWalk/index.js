/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
let currentCatPosition = 0; 
const step = 10;
const srcDancingCat = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif'; 
const walkingCatImg = document.querySelector('img');
let walkingInterval;
let catDanced = false; 

function catWalk() {
  currentCatPosition += step;
  walkingCatImg.style.left = currentCatPosition + 'px';

const pageWidth = window.innerWidth;
const middleOfScreen = pageWidth / 2; 

if (currentCatPosition > middleOfScreen - (walkingCatImg.width / 2) &&
        currentCatPosition < middleOfScreen + (walkingCatImg.width / 2) &&
        !catDanced) {
          catDanced = true;
          catDance();
        }


        if (currentCatPosition >= pageWidth) {
          currentCatPosition = 0; 
          catDanced = false;
        }
      }

  catDance(){
    walkingCatImg.src = srcDancingCat;
    setTimeout(() => {
      walkingCatImg.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif'; // Replace with original cat image
  }, 5000);
  }
  function startWalking() {
    walkingInterval = setInterval(catWalk, 50);
}

window.addEventListener('DOMContentLoaded', startWalking);

