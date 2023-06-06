class PaletBackground {
    constructor(ctx, game) {
        this.ctx = ctx;
        
        this.x = 0;
        this.y = 0;
        this.isReady = false;
        this.img = new Image();
        this.img.src = './backgrounds/fondo.jpg';
        this.game = game;

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
        if(!this.game.player.isBlocked){
            this.y += this.speed;
        }
    }
    moveDown() {    
        if(!this.game.player.isBlocked){
            this.y -= this.speed;
        }
    }
    moveLeft() {    
        if(!this.game.player.isBlocked){
            this.x += this.speed;
        }
    }
    moveRight() {
        if(!this.game.player.isBlocked){
            this.x -= this.speed;
        }
    }
}