class Game {
    constructor(ctx, canvas, width, height) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.paletBackground = new PaletBackground(this.ctx, this);
        this.player = new Player(this.ctx, this, 'Ash', 'Pokemon Trainer');
        this.counter = 0;

        //movimiento
        this.isMoving = true;

        //grilla
        this.grill = new Grill(this.ctx);
        //Static Obstacules
        this.obstacles = [
            new StaticObstacules(this.ctx, this, 0, 0, 300, 2000),
            new StaticObstacules(this.ctx, this, 700, 0, 300, 2000),
            new StaticObstacules(this.ctx, this, 300, 0, 400, 40),
            new StaticObstacules(this.ctx, this, 650, 40, 50, 600),
            new StaticObstacules(this.ctx, this, 410, 60, 30, 150),
            new StaticObstacules(this.ctx, this, 420, 540, 20, 20),
            new StaticObstacules(this.ctx, this, 370, 780, 90, 80),
            new StaticObstacules(this.ctx, this, 550, 800, 90, 80),
            new StaticObstacules(this.ctx, this, 300, 240, 40, 60),
            new StaticObstacules(this.ctx, this, 440, 240, 110, 60),
            new StaticObstacules(this.ctx, this, 510, 900, 130, 80),
            new StaticObstacules(this.ctx, this, 340, 920, 140, 20),
            new StaticObstacules(this.ctx, this, 510, 1030, 150, 20),
            new StaticObstacules(this.ctx, this, 300, 420, 180, 60),
            new StaticObstacules(this.ctx, this, 300, 640, 180, 120),
            new StaticObstacules(this.ctx, this, 520, 640, 180, 120),
            new StaticObstacules(this.ctx, this, 300, 1100, 500, 60),
        ]
        //gras
        this.grass = [
            new Grass(this.ctx, this, 480, 610, 40, 120),
        ]

    }
    start() {
        this.interval = setInterval(() => {
            this.clear();
            this.move();
            this.colision();
            this.colisionGrass();
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
        //grass
        this.drawGrass();

    }
    //Static Obstacules
    drawObstacules() {
        this.obstacles.forEach((obs) => obs.draw());
    }
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
    //grass
    drawGrass() {
        this.grass.forEach((grass) => grass.draw());
    }

    //clear
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    //colision with obstacules
    colision() {
        this.obstacles.some((obs) => {
            const checkObstacleColision = obs.colision(this.player);
            if (checkObstacleColision) {
                this.isMoving = false;

            }
        })
    }
    //colision with grass
    colisionGrass() {
        this.grass.some((grass) => {
            const checkGrassColision = grass.findPokemon(this.player);
            if (checkGrassColision) {
                
            }
        })
    }

}