class FinishGame{
    constructor(ctx, game){
        this.ctx = ctx;
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.width = 700;
        this.height = 500;
        this.image = new Image();
        this.image.src = "./backgrounds/Final.png";
        this.isReady = false;
        this.image.onload = () => {
            this.isReady = true;
        }
    }
    draw(){
        if(this.isReady){
            this.ctx.drawImage(
                this.image,
                this.x,
                this.y,
                this.width,
                this.height
            )
        }
    }
}