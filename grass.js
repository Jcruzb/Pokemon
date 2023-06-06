class Grass {
    constructor(ctx, game, x, y, width, height) {
        this.ctx = ctx;
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isColiding = false;
        this.evaluated = false;
        this.speed = 5;
    }

    draw() {
        this.ctx.fillStyle = 'rgba(0,255,0,0.5)';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
 
    //move
    moveUp() {
        if (!this.game.player.isBlocked) {
            this.y += this.speed;
        }
    }
    moveDown() {
        if (!this.game.player.isBlocked) {
            this.y -= this.speed;
        }
    }
    moveLeft() {
        if (!this.game.player.isBlocked) {
            this.x += this.speed;
        }
    }
    moveRight() {
        if (!this.game.player.isBlocked) {
            this.x -= this.speed;
        }
    }
    //Find Pokemon
    findPokemon(element) {
        if(this.x < element.x + element.width &&
            this.x + this.width > element.x &&
            this.y < element.y + element.height &&
            this.y + this.height > element.y){
                this.isColiding = true;
                const randomPokemon = Math.floor(Math.random() * 100);
                if(randomPokemon < 10){
                    this.evaluated = true;
                console.log(this.evaluated)
                }
            }
        }

}