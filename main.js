// Preload all images and Assets

function preload() {
  console.log("Preload");
  backgroundImage = loadImage("./assets/city.png");
  character = loadImage("./assets/fauci.png");
  mask = loadImage ("./assets/mask.png");
  trump = loadImage ("./assets/trump2.png");
  fauciImage = loadImage("./assets/fauci.png");
  song.play()

}


// Starts,  Initalises the entire game

const game = new Game();

// Setup - Calls all functins for canvas to start working


function setup() {
    createCanvas(900, 400);
  scoreElem = createDiv('Score = 0');
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');
  game.setup();
}

/// Draw Functions
function draw() { 
    if (screen == 0){ 
       return startScreen()
   } else if (screen >=  1){ 
       game.draw();
       
   }

}
 
// Press function - for anytime we press on a keyboard



function keyPressed() {
    if (keyCode == RETURN) {
        screen = 0;
        draw();
    }


  if (keyCode === 32) {
    game.player.jump(10);
    return screen+=1;
 
  }


}
  
  
// Intro, start screen 
function startScreen(){
    background(28, 107, 255)
    fill(255)
    textAlign(CENTER);
    image(fauciImage, 220, 60, 85, 250);
    text('Help dr. Fauci save the world', width / 2, height / 2)
    text('Click Space to Start', width / 2, height / 2 + 20);
}


// 




