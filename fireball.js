class Fireball{
    constructor(ctx, game, x, y){
        this.ctx = ctx;
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = 15;
        this.height = 15;
        this.image = new Image();
        this.image.src = "./img/Pokemon/fireBall.png";
        this.image.isReady = false;
        this.image.onload = () => {
            this.image.isReady = true;
        }
        this.speed = 25;
    }
    draw(){
        if(this.image.isReady){
            this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }

}