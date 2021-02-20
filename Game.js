class Game { 
    constructor(){
        this.player = new Character();
        this.background = new Background();
        this.obstacles = [];
        
    }

    setup (){ 
        this.background.setup();


    }

    draw (){ 
       
        this.background.draw();
        this.player.draw();
    


    }

}

//


