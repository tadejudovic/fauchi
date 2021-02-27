class Game {
  constructor() {
    this.player = new Character();
    this.background = new Background();
    this.obstacles = [];
    this.collectible = [];
  }

  setup() {
    this.background.setup();
  }

  draw() {
    this.background.draw();
    this.player.draw();

    if (frameCount % 120 === 0) {
      this.obstacles.push(new Obstacle());
      this.collectible.push (new Collectibles());
    }

    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();

      if (obstacle.x + obstacle.width <= 0) {
        this.obstacles.splice(index, 1);
      }

      if (this.colisionCheck(obstacle, this.player)) {
        console.log("ooopsi, you crashed!" );
        songFired.play();
        
        noLoop();
        
      }
    }
    );
    
    this.collectible.forEach((collectible, index) => {
        collectible.draw();
  
        if (collectible.x + collectible.width <= 0) {
          this.collectible.splice(index, 1);
        }
  
        if (this.colisionCheck(collectible, this.player)) {
          console.log("mask collect")
          this.collectible.splice(index,1)
          ;
          const prevScore = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Score = ' + (prevScore +1));
  
    songCollected.play()

        };  
      }
      );

  } 
 
  colisionCheck(object, player) {
    if (player.x + player.width < object.x+18) {
      return false;
    }
 
    if (object.x + object.width < player.x+12) {
      return false;
    }

    if (player.y+12 > object.y + object.height) {
      return false;
    }

    if (object.y+12  > player.y + player.height) {
      return false;
    }
    return true;
  }
}
