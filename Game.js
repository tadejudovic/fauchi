class Game { 
    constructor(){
        this.player = new Character();
        
        this.background = new Background();
    }

    setup (){ 
        this.background.setup();
    }

    draw (){ 
        this.background.draw();

    }

}


