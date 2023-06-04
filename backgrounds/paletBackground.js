class PaletBackground {
    constructor(ctx) {
        this.ctx = ctx;
        
        this.x = 0;
        this.y = 0;
        this.isReady = false;
        this.img = new Image();
        this.img.src = '../backgrounds/fondo.jpg';
        this.speed = 0;
        this.img.onload = () => {
            this.isReady = true;
            this.width = this.img.width;
            this.height = this.img.height;
        }
    }
    draw() {
        if (this.isReady) {
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }
    moveUp() {
        if (this.y < 0) {
            this.y += this.speed;
        }
    }
    moveDown() {    
        if (this.y > -this.height + this.ctx.canvas.height) {
            this.y -= this.speed;
        }
    }
    moveLeft() {    
        if (this.x < 0) {
            this.x += this.speed;
        }
    }
    moveRight() {
        if (this.x > -this.width + this.ctx.canvas.width) {
            this.x -= this.speed;
        }
    }
}