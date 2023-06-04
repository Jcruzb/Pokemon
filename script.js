const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx, canvas, canvas.width, canvas.height);

game.start();

document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 38:
            game.player.movement.up = true;
            game.player.moveUp();
            game.paletBackground.moveUp();
            break;
        case 40:
            game.player.movement.down = true;
            game.player.moveDown();
            game.paletBackground.moveDown();
            break;
        case 37:
            game.player.movement.left = true;
            game.player.moveLeft();
            game.paletBackground.moveLeft();
            break;
        case 39:
            game.player.movement.right = true;
            game.player.moveRight();
            game.paletBackground.moveRight();
            break;
    }
});


