const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


//botones
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const continueButton = document.getElementById('continue-button');

//Scale


const game = new Game(ctx, canvas, canvas.width, canvas.height);

game.start();

//movimiento

document.addEventListener('keydown', (e) => {
    if (!game.isFighting) {
        switch (e.keyCode) {
            case 38:
                game.moveUp();
                break;
            case 40:
                game.moveDown();
                break;
            case 37:
                game.moveLeft();
                break;
            case 39:
                game.moveRight();
                break;
        }
    } else {
        switch (e.keyCode) {
            case 38:
                game.pokemonPlayer.moveUp();
                break;
            case 40:
                game.pokemonPlayer.moveDown();
                break;
            //attack
            case 32:
                game.pokemonPlayer.addFireBall();
                break;
        }
    }
});




document.addEventListener('keyup', (e) => {
    if (!game.isFighting) {
        switch (e.keyCode) {
            case 38:
                game.paletBackground.movement.up = false;
                game.obstacles.forEach(obs => {
                    obs.movement.up = false;
                });
                break;
            case 40:
                game.paletBackground.movement.down = false;
                game.obstacles.forEach(obs => {
                    obs.movement.down = false;
                });
                break;
            case 37:
                game.paletBackground.movement.left = false;
                game.obstacles.forEach(obs => {
                    obs.movement.left = false;
                });
                break;
            case 39:
                game.paletBackground.movement.right = false;
                game.obstacles.forEach(obs => {
                    obs.movement.right = false;
                });
                break;
        }
    } else {
        switch (e.keyCode) {
            case 38:

                break;
            case 40:
                case 32: 
                
                break;
        }
    }
}
);


//Accion de Botones
startButton.addEventListener('click', () => {
    game.start();
    startButton.style.display = 'none';
    pauseButton.style.display = 'block';
    continueButton.style.display = 'none';
}
);
pauseButton.addEventListener('click', () => {
    game.pause();
    startButton.style.display = 'none';
    pauseButton.style.display = 'none';
    continueButton.style.display = 'block';
}
);
continueButton.addEventListener('click', () => {
    game.continue();
    startButton.style.display = 'none';
    pauseButton.style.display = 'block';
    continueButton.style.display = 'none';
}
);