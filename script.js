const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.translate(-350, -1100);

const scale = 1.5
ctx.scale(scale, scale);

const game = new Game(ctx, canvas, canvas.width, canvas.height);

game.start();

document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 38:
            game.player.movement.up = true;
            game.player.moveUp();
            game.paletBackground.moveUp();
            game.obstacles.forEach(obs => obs.moveUp());
            break;
        case 40:
            game.player.movement.down = true;
            game.player.moveDown();
            game.paletBackground.moveDown();
            game.obstacles.forEach(obs => obs.moveDown());
            break;
        case 37:
            game.player.movement.left = true;
            game.player.moveLeft();
            game.paletBackground.moveLeft();
            game.obstacles.forEach(obs => obs.moveLeft());
            break;
        case 39:
            game.player.movement.right = true;
            game.player.moveRight();
            game.paletBackground.moveRight();
            game.obstacles.forEach(obs => obs.moveRight());
            break;
    }
});


