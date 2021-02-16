// Preload all images and Assets 

function preload (){ 
    console.log('Preload');
    backgroundImage = loadImage ('/assets/city.png');
    characterImage = loadImage ('/assets/fauci.png')
    
}

// Starts,  Initalises the entire game

const game = new Game ();


// Setup - Calls all functins for canvas to start working

function setup (){ 
    createCanvas (900,400);
    game.setup();

}

/// Draw Functions 

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





