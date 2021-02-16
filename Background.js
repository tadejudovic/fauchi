class Background { 
    constructor (){
        this.x = 0;

    }

    setup (){ 
        this.height = height;
        this.width = width;

    }

    draw(){ 
        this.x -= 3;

        image (backgroundImage,this.x,0, this.width, this.height);
        image (backgroundImage, this.x + this.width, 0, this.width, this.height);

        if (this.x <= -this.width){ 
            this.x = 0;
        }

    }
}


