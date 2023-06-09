class EnemyPokemon extends Pokemon {
    constructor(ctx, game, x, y, img, lifePoints, attackPoints, atkImg) {

        super(ctx, game, x, y, img, lifePoints, attackPoints, atkImg)
        this.width = 70;
        this.height = 50;
        this.xFrame = 0;
        this.frames = 3;
        this.speed = 5;
        this.fireballSpeed = -10;
    }

    moveRandom() {
        const maxLimit = 700;
        const minLimit = 10;
        const random = Math.floor(Math.random() * 100);
        if (this.game.counter % 10 === 0) {
            if(this.y < minLimit) {
                this.moveDown();
                this.moveDown();
                this.moveDown();
                this.moveDown();
                this.moveDown();
            }else if (this.y + this.height > maxLimit) {
                this.moveUp();
                this.moveUp();
                this.moveUp();
                this.moveUp();
                this.moveUp();
            } else if (random < 50) {
                this.moveUp();
            }
            else {
                this.moveDown();
            }
        }
   
    }
    clearFireBalls() {
        this.fireBalls = this.fireBalls.filter(fireBall => {
            return fireBall.x > 0;
        });
    }

    addFireBall() {
        const fireBall = new FireBall(
            this.ctx,
            this.game,
            this.x -100,
            this.y + this.height / 2,
            this.atkImg,
            this.fireballSpeed,
        );
        this.fireBalls.push(fireBall);
    }
    attackRandom() {
        const random = Math.floor(Math.random() * 100);
        if (random < 0.3) {
            this.addFireBall();
        }
    }
}