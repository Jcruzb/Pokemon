class Game {
    constructor(ctx, canvas, width, height) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.paletBackground = new PaletBackground(this.ctx, this);


 //POKEMONES       
        this.battle = new Battle(this.ctx, this);
        this.player = new Player(this.ctx, this, 'Ash', 'Pokemon Trainer');


        this.pokemonPlayer = new Pokemon(this.ctx, this, 100, 200, './img/Pokemon/Charmander.png', 100, 20, './img/Pokemon/fireBall.png');

        this.EnemyBulbasaur = new EnemyPokemon(this.ctx, this, 1250, 200, './img/Pokemon/Bulbasaur.png', 100, 20, './img/Pokemon/hojasNavaja.png');

        this.EnemyMewtwo = new EnemyPokemon(this.ctx, this, 1250, 200, './img/Pokemon/Mewtwo.png', 100, 20, './img/Pokemon/psiquico.png');


        this.counter = 0;

        //movimiento
        this.isMoving = true;

        //Start - Pause - Continue
        this.interval = null;
        this.isPaused = false;

        //Iniciar combate
        this.isFighting = false;
        this.selectEnemy = false;

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
            new StaticObstacules(this.ctx, this, 380, 1040, 95, 60),
        ]
        //gras
        this.grass = [
            //gras de salida de pueblo paleta
            new Grass(this.ctx, this, 480, 610, 40, 120),
            // gras izquierda
            new Grass(this.ctx, this, 300, 600, 120, 40),
            new Grass(this.ctx, this, 340, 560, 120, 40),
            //gras derecha
            new Grass(this.ctx, this, 530, 600, 90, 40),
            new Grass(this.ctx, this, 340, 560, 120, 40),
            new Grass(this.ctx, this, 570, 560, 90, 40),
        ]

    }

    start() {
        //if (!this.isPaused) {
        //if (!this.isFighting) {
        this.interval = setInterval(() => {
            this.clear();
            this.draw();
            this.moveAttacks();
            this.moveEnemys();
            this.randomAttack();
            this.counter++;
        }, 1000 / 60);
        //}
        //}
    }

    pause() {
        this.isPaused = true;
        clearInterval(this.interval);

    }

    continue() {
        this.isPaused = false;
        this.start();
    }
    worldMap() {
        this.ctx.canvas.width = 700;
        this.ctx.canvas.height = 700;
        this.ctx.translate(-350, -1100);
        const scale = 1.5
        this.ctx.scale(scale, scale);
    }
    fightMap() {
        this.ctx.canvas.width = this.battle.width;
        this.ctx.canvas.height = this.battle.height;
        this.ctx.translate(0, 0);
        const scale = 1
        this.ctx.scale(scale, scale);
        this.battle.draw();
    }

    draw() {
        if (!this.isFighting) {
            this.worldMap();
            this.paletBackground.draw();
            this.player.draw();

            //grilla
            this.grill.draw();

            //Static Obstacules
            this.drawObstacules();
            //grass
            this.drawGrass();
        }
        else {
            this.fightMap();

            this.pokemonPlayer.draw();
            this.pokemonPlayer.drawAttack();

            this.randomPokemon();
        }

    }

    //DrawRandom
    randomPokemon() {
        if(!this.selectEnemy){
            const random = Math.floor(Math.random() * 2);
        switch (random) {
            case 0:
                this.EnemyBulbasaur.draw();
                this.EnemyBulbasaur.drawAttack();
                this.selectEnemy = true;
                break;
            case 1:
                this.EnemyMewtwo.draw();
                this.EnemyMewtwo.drawAttack();
                this.selectEnemy = true;
                break;
        }
        }
    }
    
    //Static Obstacules
    drawObstacules() {
        this.obstacles.forEach((obs) => obs.draw());
    }

    //grass
    drawGrass() {
        this.grass.forEach((grass) => grass.draw());
    }

    //clear
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.pokemonPlayer.clearFireBalls();
    }

    //movimiento
    moveUp() {
        this.player.movement.up = true;
        this.player.moveUp();
        //Movimiento del fondo, colisión con obstáculos
        if (!this.futureColisionTop()) {
            this.paletBackground.movement.up = true;
            this.paletBackground.moveUp();
            this.grass.forEach(grass => {
                grass.moveUp()
            });
            this.obstacles.forEach(obs => {
                obs.movement.up = true;
                obs.moveUp()
            }
            );
        }
        //Encuentra pokemon
        this.colisionGrass();
    }
    moveDown() {
        //Movimiento del jugador
        this.player.movement.down = true;
        this.player.moveDown();
        //Movimiento del fondo, colisión con obstáculos
        if (!this.futureColisionBottom()) {
            this.paletBackground.movement.down = true;
            this.paletBackground.moveDown();
            this.grass.forEach(grass => grass.moveDown());
            this.obstacles.forEach(obs => {
                obs.movement.down = true;
                obs.moveDown();
            })
        }
        //Encuentra pokemon
        this.colisionGrass();
    }
    moveLeft() {
        //Movimiento del jugador
        this.player.movement.left = true;
        this.player.moveLeft();
        //Movimiento del fondo, colisión con obstáculos
        if (!this.futureColisionLeft()) {
            this.paletBackground.movement.left = true;
            this.paletBackground.moveLeft();
            this.grass.forEach(grass => grass.moveLeft());
            this.obstacles.forEach(obs => {
                obs.movement.left = true;
                obs.moveLeft();

            });
            //Encuentra pokemon
            this.colisionGrass();
        };
    };
    moveRight() {
        //Movimiento del jugador
        this.player.movement.right = true;
        this.player.moveRight();
        //Movimiento del fondo, colisión con obstáculos
        if (!this.futureColisionRight()) {
            this.paletBackground.movement.right = true;
            this.paletBackground.moveRight();
            this.grass.forEach(grass => grass.moveRight());
            this.obstacles.forEach(obs => {
                obs.movement.right = true;
                obs.moveRight();

            });
        };
        //Encuentra pokemon
        this.colisionGrass();
    };

    //Movimiento de Ataques
    moveAttacks() {
        this.pokemonPlayer.moveAttack();
        this.EnemyBulbasaur.moveAttack();

    };
    //Movimiento de pokemones Enemigos
    moveEnemys() {
        this.EnemyBulbasaur.moveRandom()
    }
    //Ataques Random
    randomAttack() {
        this.EnemyBulbasaur.attackRandom();
    }

    //futurecolision
    futureColisionTop() {
        return this.obstacles.some((obs) => {
            return obs.futureColisionTop(this.player);
        });
    };
    futureColisionBottom() {
        return this.obstacles.some((obs) => {
            return obs.futureColisionBottom(this.player);
        })
    }
    futureColisionLeft() {
        return this.obstacles.some((obs) => {
            return obs.futureColisionLeft(this.player);
        })
    }
    futureColisionRight() {
        return this.obstacles.some((obs) => {
            return obs.futureColisionRight(this.player);
        })
    }
    //colision with grass
    colisionGrass() {
        this.grass.some((grass) => {
            return grass.findPokemon(this.player);
        })
    }



}