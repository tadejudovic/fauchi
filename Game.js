
class Game {
    constructor() {

    this.player = new Character();
      this.background = new Background();

      this.obstacles = [];
    }
  
    setup() {
        this.background.setup();
    }
  
    draw() {
      this.background.draw();
      this.player.draw();
  
      if (frameCount % 120 === 0) {

        this.obstacles.push(new Obstacle());
      }
  
      this.obstacles.forEach((obstacle, index) => {
        obstacle.draw();

        if (obstacle.x + obstacle.width <= 0) {
          this.obstacles.splice(index, 1);
        }
  
        if (this.colisionCheck(obstacle, this.player)) {
          console.log("OOOOOH");

          noLoop();
        }
      });
    }
  
    colisionCheck(obstacle, player) {
    
      if (player.x + player.width < obstacle.x) {
        return false;
      }
  
     
      if (obstacle.x + obstacle.width < player.x) {
        return false;
      }
  
     
      if (player.y > obstacle.y + obstacle.height) {
        return false;
      }
  
      if (obstacle.y > player.y + player.height) {
        return false;
      }
      return true;
    }
  }