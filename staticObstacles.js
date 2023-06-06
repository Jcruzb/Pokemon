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
        //this.ctx.fillStyle = 'rgba(0,0,0,0.5)';
        this.ctx.fillStyle = 'transparent';

        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
    
    colision(element){
        return ( this.x < element.x + element.width &&
        this.x + this.width > element.x &&
        this.y < element.y + element.height &&
        this.y + this.height > element.y)
    }
    //move
    moveUp() {
        if(this.game.isMoving){
            this.y += this.speed;
        }
    }
    moveDown() {    
        if(this.game.isMoving){
            this.y -= this.speed;
        }
    }
    moveLeft() {    
        if(this.game.isMoving){
            this.x += this.speed;
        }
    }
    moveRight() {
        if(this.game.isMoving){
            this.x -= this.speed;
        }
    }
}   