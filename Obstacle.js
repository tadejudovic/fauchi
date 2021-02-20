class Obstacle { 
    constructor (){ 
        this.x = width;
        this.width = 100;
        this.height = 50;
        this.y = random (0, this.height);
    }


draw (){ 
    rect (this.x, this.y, this.width, this.height);
    this.x -= 3;
}

}


