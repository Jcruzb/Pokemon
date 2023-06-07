class StaticObstacules {
    constructor(ctx, game, x, y, width, height) {
        this.ctx = ctx;
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        //movement
        this.speed = 5;
        this.isBlocked = false;
        this.movement = {
            up: false,
            down: false,
            left: false,
            right: false
        }
    }

    draw() {
        this.ctx.fillStyle = 'rgba(0,0,0,0.5)';
        //this.ctx.fillStyle = 'transparent';

        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    //collisions
    colision(element) {
        return (this.x < element.x + element.width &&
            this.x + this.width > element.x &&
            this.y < element.y + element.height &&
            this.y + this.height > element.y)
    }

    futureColision(element) {
        const futureYTop = this.y + this.speed;
        const futureYBottom = this.y - this.speed;
        const futureXLeft = this.x + this.speed;
        const futureXRight = this.x - this.speed;
        return (
            futureXLeft < element.x + element.width &&
            futureXRight + this.width > element.x &&
            futureYBottom < element.y + element.height &&
            futureYTop + this.height > element.y
            )
    }

    //move
    moveUp() {
        if (this.movement.up) {
            this.y += this.speed;
        }
    }
    moveDown() {
        if (this.movement.down) {
            this.y -= this.speed;
        }    
    }
    moveLeft() {
        if (this.movement.left) {
            this.x += this.speed;
        }    
    }
    moveRight() {
        if (this.movement.right) {
            this.x -= this.speed;
        }
    }

}   