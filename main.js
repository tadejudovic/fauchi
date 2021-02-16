// Preload all images and Assets 

let backgroundImage;

function preload (){ 
    console.log('Preload');
    backgroundImage = loadImage ('/city.png');
    characterImage = loadImage ('/fauci.png')
    
}

// Starts,  Initalises the entire game

const game = new Game ();


// Setup - Call all functins for canvas to start working

function setup (){ 
    createCanvas (900,400);
    game.setup();

}


/// Draw Function 

function draw (){ 
    clear();
    background('orange');
    game.draw();

}


// Press function - for anytime we press on a keyboard 

function keyPressed (){
    if (keyCode === 32){ 
        game.player.jump(10);
    }

}





