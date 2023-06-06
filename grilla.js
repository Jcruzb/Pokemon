class Grill{
    constructor(ctx, img){
        this.ctx = ctx;
        this.img = img;
        this.x = 0;
        this.y = 0;
        this.wditdh = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height
        
    }
    draw(){
        this.ctx.fillStyle = 'black';
        for(let i = 0; i < this.ctx.canvas.width; i+=20){
            this.ctx.fillRect(i, 0, 1, this.ctx.canvas.height);
            this.ctx.fillText(i, i-50, this.y+i);
        }
        this.ctx.fillStyle = 'red';
        for(let i = 0; i < this.ctx.canvas.height; i+= 20){
            this.ctx.fillRect(0, i, this.ctx.canvas.width, 1);
            this.ctx.fillText(i, i, this.ctx.canvas.height+i);
            this.ctx.fillText(i, i, this.x+i);
        }
    }
}