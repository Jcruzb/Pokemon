const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//Scale
ctx.translate(-350, -1100);
const scale = 1.5
ctx.scale(scale, scale);

const game = new Game(ctx, canvas, canvas.width, canvas.height);

game.start();


//movimiento
document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 38:
            game.player.movement.up = true;
            game.player.moveUp();
            if (!game.futureColision()) {
                game.paletBackground.movement.up = true;
                game.paletBackground.moveUp();
                game.grass.forEach(grass => {
                    grass.moveUp()
                });
                game.obstacles.forEach(obs => {
                    obs.movement.up = true;
                    obs.moveUp()
                    game.futureColision(obs);
                }
                );
            }
            break;
        case 40:
            game.player.movement.down = true;
            game.player.moveDown();
            if (!game.futureColision()) {
                game.paletBackground.movement.down = true;
                game.paletBackground.moveDown();
                game.grass.forEach(grass => grass.moveDown());
                game.obstacles.forEach(obs => {
                    obs.movement.down = true;
                    obs.moveDown();
                    game.futureColision(obs);
                })
            }
            break;
        case 37:
            game.player.movement.left = true;
            game.player.moveLeft();
            if (!game.futureColision()) {
                game.paletBackground.movement.left = true;
                game.paletBackground.moveLeft();
                game.grass.forEach(grass => grass.moveLeft());
                game.obstacles.forEach(obs => {
                    obs.movement.left = true;
                    obs.moveLeft();
                    game.futureColision(obs)
                });
            }

            break;
        case 39:
            game.player.movement.right = true;
            game.player.moveRight();
            if (!game.futureColision()) {
                game.paletBackground.movement.right = true;
                game.paletBackground.moveRight();
                game.grass.forEach(grass => grass.moveRight());
                game.obstacles.forEach(obs => {
                    obs.movement.right = true;
                    obs.moveRight();
                    game.futureColision(obs);
                });
            }
            break;
    }
});
document.addEventListener('keyup', (e) => {
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
}
);



