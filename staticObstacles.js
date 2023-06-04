class StaticObstacules{
    constructor(ctx, game){
        this.ctx = ctx;
        this.game = game;
        this.x = 0;
        this.y = 0;
    }

    draw(x, y, width, height){
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(x, y, width, height);
    }
    colision(element){
        const isColliding = this.x < element.x + element.width &&
        this.x + this.width > element.x &&
        this.y < element.y + element.height &&
        this.y + this.height > element.y;
    }
}