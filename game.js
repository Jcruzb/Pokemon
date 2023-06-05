class Game {
    constructor(ctx, canvas, width, height) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.paletBackground = new PaletBackground(this.ctx);
        this.player = new Player(this.ctx, this, 'Ash', 'Pokemon Trainer');
        this.counter = 0;
        this.moving = true;

        //grilla
        this.grill = new Grill(this.ctx);
        //Static Obstacules
        this.obstacles = [
            new StaticObstacules(this.ctx, this, 0, 0, 300, this.ctx.canvas.height),
            new StaticObstacules(this.ctx, this, 700, 0, 300, this.ctx.canvas.height),
            new StaticObstacules(this.ctx, this, 370, 780, 90, 80),
            new StaticObstacules(this.ctx, this, 300, 240, 40, 60),
            new StaticObstacules(this.ctx, this, 300, 420, 180, 60),
            new StaticObstacules(this.ctx, this, 300, 640, 180, 120),

        ]

    }
    start() {
        this.interval = setInterval(() => {
            this.clear();
            this.move();
            this.colision();
            this.draw();
            this.counter++;
        }, 1000 / 60);
        console.log(this.obstacles)
    }

    draw() {
        this.paletBackground.draw();
        this.player.draw();

        //grilla
        this.grill.draw();

        //Static Obstacules
        this.drawObstacules();

    }

    drawObstacules() {
        this.obstacles.forEach((obs) => obs.draw());
    }

    //move
    move() {
        this.moveObjs();
    }


    moveObjs() {
        this.obstacles.forEach((obs) => {
            obs.moveDown();
            obs.moveRight();
            obs.moveUp();
            obs.moveLeft();
        })
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    colision() {
        this.obstacles.some((obs) => {
            const checkObstacleColision = obs.colision(this.player);
            if (checkObstacleColision) {
                this.moving = false;
            }
        })
    }
}