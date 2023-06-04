class Player {
    constructor(ctx, game, name, type) {
        this.ctx = ctx;
        //Jugabilidad
        this.name = name;
        this.type = type;
        //Imagen
        this.x = this.ctx.canvas.width / 2-15;
        this.y = this.ctx.canvas.height / 2-15;
        this.width = 70;
        this.img = new Image();
        this.isReady = false;
        this.img.src = './img/player/player.png'
        this.img.onload = () => {
            this.isReady = true;
            this.height = this.width * this.img.height / this.img.width;
        }
        //frames
        this.xFrame = 0;
        this.yFrame = 0;
        this.xFrames = 4;
        this.yFrames = 4;
        //speed
        this.speed = 5;
        //movement
        this.game = game;
        this.movement = {
            up: false,
            down: false,
            left: false,
            right: false
        }

    }
    draw() {
       if(this.isReady){
           this.ctx.drawImage(
            this.img,
            this.xFrame * this.img.width / this.xFrames,
            this.yFrame * this.img.height / this.yFrames,
            this.img.width / this.xFrames,
            this.img.height / this.yFrames,            
            this.x,
            this.y,
            this.width,
            this.height
            );
         
       }
    }
    moveUp() {
        if(this.movement.up){
            this.y -= this.speed;
            this.yFrame = 3;
            if(this.game.counter % 10 === 0){
                this.xFrame++;
                this.movement.up=false;
                if(this.xFrame > 3){
                    this.xFrame = 0;
                }
            }
        }
    }
    moveDown() {
        if(this.movement.down){
            this.y += this.speed;
            this.yFrame = 0;
            if(this.game.counter % 10 === 0){
                this.xFrame++;
                this.movement.down=false;
                if(this.xFrame > 3){
                    this.xFrame = 0;
                }
            }
        }       
    }
    moveLeft() {
        if(this.movement.left){
            this.x -= this.speed;
            this.yFrame = 1;
            if(this.game.counter % 10 === 0){
                this.xFrame++;
                this.movement.left=false;
                if(this.xFrame > 3){
                    this.xFrame = 0;
                }
            }
        }
    }
    moveRight() {
        if(this.movement.right){
            this.x += this.speed;
            this.yFrame = 2;
            if(this.game.counter % 10 === 0){
                this.xFrame++;
                this.movement.right=false;
                if(this.xFrame > 3){
                    this.xFrame = 0;
                }
            }
        }
    }
    collision(obstacule){
        return this.x < obstacule.x + obstacule.width &&
        this.x + this.width > obstacule.x &&
        this.y < obstacule.y + obstacule.height &&
        this.y + this.height > obstacule.y;
    }
}