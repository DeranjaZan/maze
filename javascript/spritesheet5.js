var animationInterval5;
var spriteSheet5 = document.getElementById("asteroid1");
var widthOfSpriteSheet5 = 850;
var widthOfEachSprite5 = 50;

function stopAnimation5() {
  clearInterval(animationInterval5);
}

function startAnimation5() {
  var position5 = widthOfEachSprite5; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff5 = widthOfEachSprite5; //difference between two sprites

  animationInterval5 = setInterval(() => {
    spriteSheet5.style.backgroundPosition = `-${position5}px 0px`;

    if (position5 <= widthOfSpriteSheet5) {
      position5 = position5 + diff5;
    } else {
      //increment the position by the width of each sprite each time
      position5 = widthOfEachSprite5;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}

//Start animation
startAnimation5();