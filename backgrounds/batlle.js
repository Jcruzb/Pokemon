class Battle{
    constructor(ctx, game){
        this.ctx = ctx;
        this.game = game;
        this.width = 1500;
        
        this.x = 0;
        this.y = 0;
        this.image = new Image();
        this.image.src = "./backgrounds/combat.png";
        this.image.isReady = false;
        this.image.onload = () => {
            this.image.isReady = true;
            this.height = this.width * this.image.height / this.image.width;
        }
    }
    draw(){
        if(this.image.isReady){
            this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}