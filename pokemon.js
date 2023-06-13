class Pokemon {
    constructor(ctx, game, x, y, img, lifePoints, attackPoints, atkImg) {
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
        this.minLimit = 20;
        this.maxLimit = 330;
        //atack
        this.fireBalls = [];
        this.isAtacking = false;
        this.atkImg = atkImg
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
            this.moveRandom();
        }
    }
    addFireBall() {
        const fireBall = new FireBall(
            this.ctx,
            this.game,
            this.x + this.width,
            this.y + this.height / 2,
            this.atkImg
        );
        this.fireBalls.push(fireBall);
    }
    drawAttack() {
            this.fireBalls.forEach(fireBall => {
                fireBall.draw();
            });

    }
    moveUp() {
        this.y -= this.speed;
        this.x += 2;
        this.yFrame = 3;
        if (this.game.counter % 5 === 0) {
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
        if (this.game.counter % 5 === 0) {
            this.xFrame++;
            if (this.xFrame > 3) {
                this.xFrame = 0;
            }
        }
    }
    moveRandom() {
        const randomMove = Math.floor(Math.random() * 100);
        if (this.game.counter % 50  === 0) {
            if (this.y < 1.5 * this.minLimit) {
                this.moveDown();
                this.moveDown();
                this.moveDown();
            } else if (this.y + this.width > this.maxLimit) {
                this.moveUp();
                this.moveUp();
                this.moveUp();
            } 
        }
    }

    moveAttack() {
        this.fireBalls.forEach(fireBall => fireBall.move());
    }
    clearFireBalls() {
        this.fireBalls = this.fireBalls.filter(fireBall => fireBall.x < this.game.canvas.width);
    }





}