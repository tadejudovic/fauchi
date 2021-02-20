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
        console.log("ooopsi, you crashed!");

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
  
   
        };  
      }
      );

  } 
 
  colisionCheck(object, player) {
    if (player.x + player.width < object.x) {
      return false;
    }

    if (object.x + object.width < player.x) {
      return false;
    }

    if (player.y > object.y + object.height) {
      return false;
    }

    if (object.y > player.y + player.height) {
      return false;
    }
    return true;
  }
}
