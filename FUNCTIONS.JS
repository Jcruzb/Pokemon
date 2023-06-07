class Functions{
    constructor(ctx){
        this.ctx = ctx;
        this.speed = 5;
    }
    //movimiento
    moveUp(y) {
            y = y + this.speed;
           console.log(y);
    }
    moveDown(y) {    
            y -= this.speed;
    }
    moveLeft(x) {    
            x += this.speed;
    }
    moveRight(x) {
            x -= this.speed;
    }
}