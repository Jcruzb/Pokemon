class FireBall {
    constructor(ctx, game, x, y) {
        this.ctx = ctx;
        this.game = game;
        this.x = x;
        this.y = y;
        this.height = 50;

        this.image = new Image();
        this.image.src = "./img/Pokemon/fireball.png";
        this.isReady = false;
        this.image.onload = () => {
            this.isReady = true;
            this.width = this.height * this.image.width / this.image.height;
        }
        this.speed = 10;

        this.movement = {
            right: true,
        }

        //frames
        this.xFrame = 0;
        this.frames = 3;

    }
    draw() {
        if (this.isReady) {
            this.ctx.drawImage(
                this.image,
                this.xFrame * this.image.width / this.frames,
                0,
                this.image.width / this.frames,
                this.image.height,
                this.x,
                this.y,
                this.width,
                this.height
            );
        }
    }
    move() {
        this.x += this.speed;
        this.yFrame = 0;
        if (this.game.counter % 2 === 0) {
            this.xFrame++;
        if (this.xFrame >= this.frames) {
          this.xFrame = 0;
        }
        }
    }


    collidesWith(pokemon) {
        return pokemon.x + pokemon.width >= this.x &&
            pokemon.x <= this.x + this.width &&
            pokemon.y + pokemon.height >= this.y &&
            pokemon.y <= this.y + this.height;
    }


}