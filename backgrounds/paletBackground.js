class PaletBackground {
    constructor(ctx) {
        this.ctx = ctx;
        
        this.x = 0;
        this.y = 0;
        this.isReady = false;
        this.img = new Image();
        this.img.src = './backgrounds/fondo.jpg';
        this.speed = 5;
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

    //move
    moveUp() {
    
            this.y += this.speed;

    }
    moveDown() {    

            this.y -= this.speed;

    }
    moveLeft() {    

            this.x += this.speed;

    }
    moveRight() {

            this.x -= this.speed;

    }
}