class ColisionPlayer{
    constructor(ctx, game) {
        this.ctx = ctx;
        this.game = game;
        this.distanceToColision = 5;
        this.x = 400 - 5;
        this.y = 980 - 5;
        this.width = 30 + 5;
        this.height = 35 + 5;
}
    draw() {
        this.ctx.fillStyle = 'rgba(0,0,0,0.5)';
        //this.ctx.fillStyle = 'transparent';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
}