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
        //this.ctx.fillStyle = 'rgba(0,0,0,0.5)';
        this.ctx.fillStyle = 'transparent';

        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    //collisions
    colision(element) {
        return (this.x < element.x + element.width &&
            this.x + this.width > element.x &&
            this.y < element.y + element.height &&
            this.y + this.height > element.y)
    }

    futureColisionTop(element) {
        const futureYTop = this.y + this.speed/2;
        return (
            this.x < element.x + element.width &&
            this.x + this.width > element.x &&
            this.y < element.y + element.height &&
            futureYTop + this.height > element.y
            )
    }
    futureColisionBottom(element) {
        const futureYBottom = this.y - this.speed/2;
        return (
            this.x < element.x + element.width &&
            this.x + this.width > element.x &&
            futureYBottom < element.y + element.height &&
            futureYBottom + this.height > element.y
            )
    }
    futureColisionLeft(element) {
        const futureXLeft = this.x + this.speed/2;
        return (
            this.x < element.x + element.width &&
            futureXLeft + this.width > element.x &&
            this.y < element.y + element.height &&
            this.y + this.height > element.y
            )
    }
    futureColisionRight(element) {
        const futureXRight = this.x -  this.speed/2;
        return (
            futureXRight < element.x + element.width &&
            this.x + this.width > element.x &&
            this.y < element.y + element.height &&
            this.y + this.height > element.y
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
    reset(obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.draw();
    }

}   