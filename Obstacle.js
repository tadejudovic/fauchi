class Obstacle {
    constructor() {
      this.x = width;
      this.width = 80;
      this.height = 80;
      this.y = random(0, height);
  
    }
    draw() { 
        image(trump, this.x, this.y, this.width, this.height);

      this.x -= 5;
    } 
 
 
  } 






 
  