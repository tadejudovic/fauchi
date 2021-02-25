class Character { 
    constructor (){ 
        this.x = 150;
        this.y = 90;
        this.width = 60; 
        this.height = 140 ;
        this.gravity = 2    ;
        this.velocity = 0.2  ;
        this.floor = 200;
        this.jumpCounts = 0; 
    } 
   
jump (){ 

    if (this.jumpCounts === 3){ 
        console.log('here');
        return;
    }
    this.jumpCounts++; 
    this.y -= 80    ;
    this.velocity -= 0.5    ;
    }

draw(){ 
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > this.floor){ 
        this.y = this.floor;
    }
    this.jumpCounts=2;
    this.velocity=0;

    console.log(this)
    image(character, this.x, this.y, this.width, this.height);
    } 


}}}}}}}}