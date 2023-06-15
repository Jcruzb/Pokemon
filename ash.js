class Ash{
    constructor(ctx, game,) {
        this.ctx = ctx;
        this.game = game;
        this.x = 580;
        this.y = 60;
        // this.x = 500;
        // this.y = 1000;
        this.width = 30;
        this.isReady = false;
        this.img = new Image();
        this.img.src = './img/player/ash.png'
        this.img.onload = () => {
            this.isReady = true;
            this.height = this.width * this.img.height / this.img.width;
        }
        //frames
        this.xFrame = 0;
        this.yFrame = 1;
        this.xFrames = 3;
        this.yFrames = 4;
    
        //movement
        this.speed = 5;
        this.game = game;
        this.movement = {
            up: false,
            down: false,
            left: false,
            right: false
        }
    }
    draw() {
        if (this.isReady) {
            this.ctx.drawImage(
                this.img,
                this.xFrame * Math.floor(this.img.width / this.xFrames),
                this.yFrame * Math.floor(this.img.height / this.yFrames),
                Math.floor(this.img.width / this.xFrames),
                Math.floor(this.img.height / this.yFrames),
                this.x,
                this.y,
                this.width,
                this.height
            )
        }
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
    colision(element) {
        return (this.x < element.x + element.width &&
            this.x + this.width > element.x &&
            this.y < element.y + element.height &&
            this.y + this.height > element.y)
    }
}