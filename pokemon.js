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
        this.fireballSpeed = 10;
        this.canFire = true;

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
            this, this.liveBar();
        }
    }
    addFireBall() {
        const fireBall = new FireBall(
            this.ctx,
            this.game,
            this.x + this.width,
            this.y + this.height / 2,
            this.atkImg,
            this.fireballSpeed

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
        if (this.game.counter % 10 === 0) {
            if (this.y < 1.5 * 0) {
                this.moveDown();
                this.moveDown();
                this.moveDown();
            } else if (this.y + this.width > this.game.battle.height) {
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
        this.fireBalls = this.fireBalls.filter(fireBall => {
            return fireBall.x < this.game.canvas.width
        });
    }
    colision(enemy) {
        enemy.fireBalls.forEach(fireBall => {
            return fireBall.colision(this);
        });
    }

    reciveDamage(damage) {
        this.lifePoints -= damage;

    }
    liveBar() {
        const totalLife = this.width;
        const actualLife = 100;
        const lifeBar = (totalLife) * actualLife / 100;
        if (actualLife > this.lifePoints / 2) {
            this.ctx.fillStyle = 'red';
        } else if (actualLife > this.lifePoints / 4) {
            this.ctx.fillStyle = 'yellow';
        } else {
            this.ctx.fillStyle = 'green';
        }
        this.ctx.fillRect(this.x, this.y - 10, lifeBar, 5);
    }
}