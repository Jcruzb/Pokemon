class EnemyPokemon extends Pokemon {
    super(ctx, game, x, y, img, lifePoints, attackPoints,) {
        this.ctx = ctx;
        this.game = game;
        this.x = x;
        this.y = y;
        this.img = img;
        this.lifePoints = lifePoints;
        this.attackPoints = attackPoints;
        this.width = 50;
        this.height = 50;
        this.isReady = false;
        this.image.onload = () => {
            this.isReady = true;
            this.width = this.height * this.image.width / this.image.height;
        }
        this.xFrame = 0;
        this.frames = 3;
    }
    moveAttack() {
        this.fireBalls.forEach(fireBall => {
            fireBall.speed = fireBall.speed * -1.05;
            fireBall.move()
        });
    }
    moveRandom() {
        const maxLimit = 500;
        const minLimit = 40;
        const random = Math.floor(Math.random() * 100);
        if (this.game.counter % 50 === 0) {
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
    addFireBall() {
        const fireBall = new FireBall(
            this.ctx,
            this.game,
            this.x -100,
            this.y + this.height / 2,
            this.atkImg
        );
        this.fireBalls.push(fireBall);
    }
    attackRandom() {
        const random = Math.floor(Math.random() * 100);
        if (random < 0.03) {
            this.addFireBall();
        }
    }
}