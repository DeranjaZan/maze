var animationInterval2;
var spriteSheet2 = document.getElementById("sprite-image2");
var widthOfSpriteSheet2 = 1710;
var widthOfEachSprite2 = 90;

function stopAnimation2() {
  clearInterval(animationInterval2);
}

function startAnimation2() {
  var position2 = widthOfEachSprite2; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff2 = widthOfEachSprite2; //difference between two sprites

  animationInterval2 = setInterval(() => {
    spriteSheet2.style.backgroundPosition = `-${position2}px 0px`;

    if (position2 <= widthOfSpriteSheet2) {
      position2 = position2 + diff2;
    } else {
      //increment the position by the width of each sprite each time
      position2 = widthOfEachSprite2;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}

//Start animation
startAnimation2();