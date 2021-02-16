class characterFauci { 
    constructor (){ 
        this.x = 100;
        this.y = 0;
        this.width = 40; 
        this.height = 40;
        this.gravity = 0.2;
        this.velocity = 0;
        this.floor = 210;
        this.jumpCounts = 0;
    }


jump (){ 

    if (this.jumpCounts === 2){ 
        console.log('here');
        return;
    }
    this.jumpCounts++;
    this.y -= 10;
}

}


