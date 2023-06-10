class Pokemon {
    constructor(ctx, game,  x, y, img, lifePoints, attackPoints) {
        // para el Draw
        this.ctx = ctx;
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = 80;
        this.img = new Image();
        this.img.src = img;
        this.img.isReady = false;
        this.img.onload = () => {
            this.img.isReady = true;
            this.height = this.width * this.img.height / this.img.width;
        }
        // para la jugabilidad
        this.lifePoints = lifePoints;
        this.attackPoints = attackPoints;
        //frames
        this.xFrame = 0;
        this.yFrame = 1;
        this.xFrames = 4;
        this.yFrames = 4;
        //movement
        this.speed = 3;
    }
    draw() {
        if (this.img.isReady) {
            this.ctx.drawImage(
                this.img,
                this.xFrame * this.img.width / this.xFrames,
                this.yFrame * this.img.height / this.yFrames,
                this.img.width / this.xFrames,
                this.img.height / this.yFrames,
                this.x,
                this.y,
                this.width,
                this.height
                );
        }
    }
    moveUp() {
        this.y -= this.speed;
        this.x += 2;
        this.yFrame = 3;
        if (this.game.counter % 2 === 0) {
            this.xFrame++;
            if (this.xFrame > 3) {
                this.xFrame = 0;
            }
        }
    }
    moveDown() {
        this.y += this.speed;
        this.x -= 2;
        this.yFrame = 0;
        if (this.game.counter % 2 === 0) {
            this.xFrame++;
            if (this.xFrame > 3) {
                this.xFrame = 0;
            }
        }
    }
}