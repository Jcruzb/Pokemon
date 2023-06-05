class StaticObstacules{
    constructor(ctx, game, x, y, width, height){
        this.ctx = ctx;
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 5;
    }

    draw(){
        this.ctx.fillStyle = 'rgba(0,0,0,0.5)';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
    colision(element){
        return ( this.x < element.x + element.width &&
        this.x + this.width > element.x &&
        this.y < element.y + element.height &&
        this.y + this.height > element.y)
    }
    //move
    moveUp(){
            this.y += this.speed;
    }
    moveDown(){
            this.y -= this.speed;
    }
    moveLeft(){
            this.x += this.speed;

    }
    moveRight(){

            this.x -= this.speed;

    }
}   