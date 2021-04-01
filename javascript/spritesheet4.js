var animationInterval4;
var spriteSheet4 = document.getElementById("asteroid2");
var widthOfSpriteSheet4 = 2445;
var widthOfEachSprite4 = 85;

function stopAnimation4() {
  clearInterval(animationInterval4);
}

function startAnimation4() {
  var position4 = widthOfEachSprite4; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff4 = widthOfEachSprite4; //difference between two sprites

  animationInterval4 = setInterval(() => {
    spriteSheet4.style.backgroundPosition = `-${position4}px 0px`;

    if (position4 <= widthOfSpriteSheet4) {
      position4 = position4 + diff4;
    } else {
      //increment the position by the width of each sprite each time
      position4 = widthOfEachSprite4;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}

//Start animation
startAnimation4();