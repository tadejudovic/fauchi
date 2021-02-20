class Obstacle {
    constructor() {
      this.x = width;
      this.width = 50;
      this.height = 50;
      this.y = random(0, height);
    }
  
    draw() {
        image(mask, this.x, this.y, this.width, this.height);

      this.x -= 3;
    }
  }