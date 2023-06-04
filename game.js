class Game{
    constructor(ctx, canvas, width, height){
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.paletBackground = new PaletBackground(this.ctx);
        this.player = new Player(this.ctx,this, 'Ash', 'Pokemon Trainer');
        this.counter = 0;
        this.moving = true;

        //grilla
        this.grill = new Grill(this.ctx);
        //Static Obstacules
        this.staticObstacules = new StaticObstacules(this.ctx, this);
    }
    start(){
        this.interval = setInterval(() => {
            this.clear();
            this.movePlayer();
            this.moveBackground();
            this.draw();
            this.counter++;
        }, 1000/60);
      console.log(this.staticObstacules)
    }
    draw(){
        this.paletBackground.draw();
        this.player.draw();

        //grilla
        this.grill.draw();

        //Static Obstacules
        this.drawObstacules();
        
    }
    
    drawObstacules(){
        //Hay que evaluar que el obstaculo se vaya a crear en relación al tamaó de la imagen. no del canvas
        this.staticObstacules.draw(0,0,300,this.ctx.canvas.height);
    }


    movePlayer(){
        this.player.moveDown();
        this.player.moveRight();
        this.player.moveUp();
        this.player.moveLeft();
    }
    moveBackground(){
        //if(this.moving){
            this.paletBackground.moveDown();
            this.paletBackground.moveRight();
            this.paletBackground.moveUp();
            this.paletBackground.moveLeft();
        //}
    }
    clear(){
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    coliision(){
        const colision = this.staticObstacules.colision(this.player);
        if(colision){
            this.moving = false;
            console.log('colision');
        }
    }


}