var animationInterval3;
var spriteSheet3 = document.getElementById("asteroid3");
var widthOfSpriteSheet3 = 1216;
var widthOfEachSprite3 = 100;

function stopAnimation3() {
  clearInterval(animationInterval3);
}

function startAnimation3() {
  var position3 = widthOfEachSprite3; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff3 = widthOfEachSprite3; //difference between two sprites

  animationInterval3 = setInterval(() => {
    spriteSheet3.style.backgroundPosition = `-${position3}px 0px`;

    if (position3 <= widthOfSpriteSheet3) {
      position3 = position3 + diff3;
    } else {
      //increment the position by the width of each sprite each time
      position3 = widthOfEachSprite3;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}

//Start animation
startAnimation3();