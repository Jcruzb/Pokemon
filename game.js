class Game {
    constructor(ctx, canvas, width, height) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.paletBackground = new PaletBackground(this.ctx, this);

        //Musica
        this.gameMusic = new Audio();
        this.gameMusic.src = "./sounds/03_Title_Screen.mp3";
        this.gameMusic.loop = true;
        this.gameMusic.volume = 0.2;

        this.BattleMusic = new Audio();

        this.BattleMusic.src = "./sounds/11_Battle!_(Trainer_Battle).mp3";
        this.BattleMusic.loop = true;
        this.BattleMusic.volume = 0.2;

        this.AshBattleMusic = new Audio();
        this.AshBattleMusic.src = "./sounds/68_Battle!_(Mewtwo).mp3";
        this.AshBattleMusic.loop = true;
        this.AshBattleMusic.volume = 0.2;

        this.finalMusic = new Audio();
        this.finalMusic.src = "./sounds/OpeningPokemon.mp3";
        this.finalMusic.volume = 0.2;

        this.battle = new Battle(this.ctx, this);
        this.ashBattleMap = new Battle(this.ctx, this);

        this.player = new Player(this.ctx, this, 'Ash', 'Pokemon Trainer');
        this.ash = new Ash(this.ctx, this);

        //POKEMONES   

        this.pokemonPlayer = new Pokemon(this.ctx, this, 300, 200, './img/Pokemon/Charmander.png', 1000, 5, './img/Pokemon/fireBall.png');
        this.pokemonStatus = new PokemonStatus(this.ctx, this);
        this.enemyPokemon = [
            new EnemyPokemon(this.ctx, this, 1200, 200, './img/Pokemon/Bulbasaur.png', 1000, 10, './img/Pokemon/hojasNavaja.png'),
            new EnemyPokemon(this.ctx, this, 1200, 200, './img/Pokemon/Mewtwo.png', 1000, 40, './img/Pokemon/psiquico.png')
        ]
        this.ashPokemons = [
            new EnemyPokemon(this.ctx, this, 1150, 100, './img/Pokemon/Charmander.png', 3500, 30, './img/Pokemon/fireBall.png'),
            new EnemyPokemon(this.ctx, this, 1150, 300, './img/Pokemon/Bulbasaur.png', 3500, 30, './img/Pokemon/hojasNavaja.png'),
            new EnemyPokemon(this.ctx, this, 1150, 450, './img/Pokemon/Mewtwo.png', 3500, 30, './img/Pokemon/psiquico.png')
        ]

        this.counter = 0;

        //movimiento
        this.isMoving = true;

        //Start - Pause - Continue
        this.interval = null;
        this.isPaused = false;

        //Iniciar combate
        this.victorys = 0;
        this.isFighting = false;
        this.selectedEnemy = false;
        this.ashBattle = false;

        //grilla
        this.grill = new Grill(this.ctx);
        //Static Obstacules
        this.obstacles = [
            new StaticObstacules(this.ctx, this, 0, 0, 300, 2000),
            new StaticObstacules(this.ctx, this, 700, 0, 300, 2000),
            new StaticObstacules(this.ctx, this, 300, 0, 400, 40),
            new StaticObstacules(this.ctx, this, 650, 40, 50, 600),
            new StaticObstacules(this.ctx, this, 410, 60, 30, 150),
            new StaticObstacules(this.ctx, this, 425, 542, 20, 18),
            new StaticObstacules(this.ctx, this, 370, 780, 90, 80),
            new StaticObstacules(this.ctx, this, 550, 800, 90, 80),
            new StaticObstacules(this.ctx, this, 300, 250, 38, 45),
            new StaticObstacules(this.ctx, this, 443, 250, 105, 45),
            new StaticObstacules(this.ctx, this, 520, 900, 110, 80),
            new StaticObstacules(this.ctx, this, 340, 920, 140, 20),
            new StaticObstacules(this.ctx, this, 520, 1030, 130, 20),
            new StaticObstacules(this.ctx, this, 300, 420, 180, 60),
            new StaticObstacules(this.ctx, this, 300, 640, 180, 120),
            new StaticObstacules(this.ctx, this, 520, 640, 180, 120),
            new StaticObstacules(this.ctx, this, 300, 1100, 500, 60),
            new StaticObstacules(this.ctx, this, 380, 1040, 95, 60),

            //Otros static obstacules
            new StaticObstacules(this.ctx, this, 300, 95, 110, 10),
            new StaticObstacules(this.ctx, this, 440, 95, 110, 10),
            new StaticObstacules(this.ctx, this, 300, 185, 110, 10),
            new StaticObstacules(this.ctx, this, 338, 270, 105, 10),
            new StaticObstacules(this.ctx, this, 300, 360, 30, 10),
            new StaticObstacules(this.ctx, this, 360, 360, 60, 10),
            new StaticObstacules(this.ctx, this, 460, 360, 190, 10),
            new StaticObstacules(this.ctx, this, 585, 465, 190, 10),
            new StaticObstacules(this.ctx, this, 300, 550, 70, 10),
            new StaticObstacules(this.ctx, this, 440, 550, 210, 10),
        ]
        this.obstaclesInitial = [
            new StaticObstacules(this.ctx, this, 0, 0, 300, 2000),
            new StaticObstacules(this.ctx, this, 700, 0, 300, 2000),
            new StaticObstacules(this.ctx, this, 300, 0, 400, 40),
            new StaticObstacules(this.ctx, this, 650, 40, 50, 600),
            new StaticObstacules(this.ctx, this, 410, 60, 30, 150),
            new StaticObstacules(this.ctx, this, 425, 542, 20, 18),
            new StaticObstacules(this.ctx, this, 370, 780, 90, 80),
            new StaticObstacules(this.ctx, this, 550, 800, 90, 80),
            new StaticObstacules(this.ctx, this, 300, 250, 38, 45),
            new StaticObstacules(this.ctx, this, 443, 250, 105, 45),
            new StaticObstacules(this.ctx, this, 520, 900, 110, 80),
            new StaticObstacules(this.ctx, this, 340, 920, 140, 20),
            new StaticObstacules(this.ctx, this, 520, 1030, 130, 20),
            new StaticObstacules(this.ctx, this, 300, 420, 180, 60),
            new StaticObstacules(this.ctx, this, 300, 640, 180, 120),
            new StaticObstacules(this.ctx, this, 520, 640, 180, 120),
            new StaticObstacules(this.ctx, this, 300, 1100, 500, 60),
            new StaticObstacules(this.ctx, this, 380, 1040, 95, 60),

            //Otros static obstacules
            new StaticObstacules(this.ctx, this, 300, 95, 110, 10),
            new StaticObstacules(this.ctx, this, 440, 95, 110, 10),
            new StaticObstacules(this.ctx, this, 300, 185, 110, 10),
            new StaticObstacules(this.ctx, this, 338, 270, 105, 10),
            new StaticObstacules(this.ctx, this, 300, 360, 30, 10),
            new StaticObstacules(this.ctx, this, 360, 360, 60, 10),
            new StaticObstacules(this.ctx, this, 460, 360, 190, 10),
            new StaticObstacules(this.ctx, this, 585, 465, 190, 10),
            new StaticObstacules(this.ctx, this, 300, 550, 70, 10),
            new StaticObstacules(this.ctx, this, 440, 550, 210, 10),
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
            //grass medio
            new Grass(this.ctx, this, 480, 420, 100, 90),
            //gras tres cuartos
            new Grass(this.ctx, this, 550, 230, 100, 85),
            //grass arriva
            new Grass(this.ctx, this, 440, 100, 210, 95),
        ]

        this.grassInitial = [
            //gras de salida de pueblo paleta
            new Grass(this.ctx, this, 480, 610, 40, 120),
            // gras izquierda
            new Grass(this.ctx, this, 300, 600, 120, 40),
            new Grass(this.ctx, this, 340, 560, 120, 40),
            //gras derecha
            new Grass(this.ctx, this, 530, 600, 90, 40),
            new Grass(this.ctx, this, 340, 560, 120, 40),
            new Grass(this.ctx, this, 570, 560, 90, 40),
            //grass medio
            new Grass(this.ctx, this, 480, 420, 100, 90),
            //gras tres cuartos
            new Grass(this.ctx, this, 550, 230, 100, 85),
            //grass arriva
            new Grass(this.ctx, this, 440, 100, 210, 95),
        ]

        this.finalMap = new FinishGame(this.ctx, this)
        this.final = false;

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
            this.startBattle();
            this.startAshBattle();
            this.colisionAsh();
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
    resetMap() {
        this.paletBackground.reset();
        this.ash.reset();
        this.obstacles.forEach((obstacle, i) => obstacle.reset(this.obstaclesInitial[i]));
        this.grass.forEach((grass, i) => grass.reset(this.grassInitial[i]));
    }
    worldMap() {
        this.ctx.canvas.width = 700;
        this.ctx.canvas.height = 500;
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
    finalMapCanvas() {
        this.ctx.canvas.width = this.finalMap.width;
        this.ctx.canvas.height = this.finalMap.height;
    }

    draw() {
        if (!this.isFighting && !this.ashBattle) {
            if (this.pokemonStatus.imgElem.src !== img1) {
                this.pokemonStatus.imgElem.src = img1;
            }
            this.BattleMusic.pause();
            this.BattleMusic.currentTime = 0;
            this.AshBattleMusic.pause();
            this.AshBattleMusic.currentTime = 0;
            this.gameMusic.play();
            this.worldMap();
            this.paletBackground.draw();
            this.player.draw();
            this.ash.draw();

            //grilla para ubicar las estructuras
            this.grill.draw();

            //Static Obstacules
            this.drawObstacules();
            //grass
            this.drawGrass();
            //check Ash colision

        }
        else if (this.isFighting && !this.ashBattle) {

            this.gameMusic.pause();
            this.gameMusic.currentTime = 0;
            this.BattleMusic.play();
            this.fightMap();

            this.pokemonPlayer.x = 300;
            this.pokemonPlayer.draw();
            this.pokemonPlayer.drawAttack();

            this.enemyPokemon[this.selectedEnemy].draw();
            this.enemyPokemon[this.selectedEnemy].drawAttack();

        }
        if (this.ashBattle && !this.isFighting) {
            this.fightMap();
            this.gameMusic.pause();
            this.gameMusic.currentTime = 0;
            this.AshBattleMusic.play();

            this.ashBattleMap.draw();

            this.pokemonPlayer.x = 300;
            this.pokemonPlayer.draw();
            this.pokemonPlayer.drawAttack();

            this.ashPokemons.forEach((ashPokemon) => {
                ashPokemon.draw()
                ashPokemon.drawAttack();
                ashPokemon.moveAttack();
            });
        }
        if (this.final) {

            this.finalMapCanvas();
            this.finalMap.draw();
            this.AshBattleMusic.pause();
            this.finalMusic.play();
        }
    }

    //DrawRandom
    randomPokemon() {
        this.selectedEnemy = Math.floor(Math.random() * 2);
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
        this.enemyPokemon[this.selectedEnemy] && this.enemyPokemon[this.selectedEnemy].clearFireBalls();
        this.ashPokemons.forEach((ashPokemon) => ashPokemon.clearFireBalls());
    }

    //movimiento
    moveUp() {
        this.player.movement.up = true;
        this.player.moveUp();
        this.ash.movement.up = true;

        //Movimiento del fondo, colisión con obstáculos
        if (!this.futureColisionTop()) {

            this.paletBackground.movement.up = true;
            this.paletBackground.moveUp();

            this.ash.moveUp();

            this.grass.forEach(grass => {
                grass.moveUp()
            });
            this.obstacles.forEach(obs => {
                obs.movement.up = true;
                obs.moveUp()
            }
            );
        } else {
            this.ash.movement.up = false;
        }
        //Encuentra pokemon
        this.colisionGrass();
    }
    moveDown() {
        //Movimiento del jugador
        this.player.movement.down = true;
        this.player.moveDown();

        this.ash.movement.down = true;
        //Movimiento del fondo, colisión con obstáculos
        if (!this.futureColisionBottom()) {
            this.paletBackground.movement.down = true;
            this.paletBackground.moveDown();

            this.ash.moveDown();

            this.grass.forEach(grass => grass.moveDown());
            this.obstacles.forEach(obs => {
                obs.movement.down = true;
                obs.moveDown();
            })
        }
        else {
            this.ash.movement.down = false;
        }
        //Encuentra pokemon
        this.colisionGrass();
    }
    moveLeft() {
        //Movimiento del jugador
        this.player.movement.left = true;
        this.player.moveLeft();

        this.ash.movement.left = true;
        //Movimiento del fondo, colisión con obstáculos
        if (!this.futureColisionLeft()) {
            this.paletBackground.movement.left = true;
            this.paletBackground.moveLeft();

            this.ash.moveLeft();

            this.grass.forEach(grass => grass.moveLeft());
            this.obstacles.forEach(obs => {
                obs.movement.left = true;
                obs.moveLeft();

            });
        }
        else {
            this.ash.movement.left = false;
        }
        //Encuentra pokemon
        this.colisionGrass();
    };
    moveRight() {
        //Movimiento del jugador
        this.player.movement.right = true;
        this.player.moveRight();

        this.ash.movement.right = true;
        //Movimiento del fondo, colisión con obstáculos
        if (!this.futureColisionRight()) {
            this.paletBackground.movement.right = true;
            this.paletBackground.moveRight();

            this.ash.moveRight();

            this.grass.forEach(grass => grass.moveRight());
            this.obstacles.forEach(obs => {
                obs.movement.right = true;
                obs.moveRight();

            });
        }
        else {
            this.ash.movement.right = false;
        }
        //Encuentra pokemon
        this.colisionGrass();
    };

    //Movimiento de Ataques
    moveAttacks() {
        this.pokemonPlayer.moveAttack();
        this.enemyPokemon.forEach(pokemon => pokemon.moveAttack());
        this.ashPokemons.forEach(pokemon => pokemon.moveAttack());

    };
    //Movimiento de pokemones Enemigos
    moveEnemys() {
        this.enemyPokemon.forEach(pokemon => pokemon.moveRandom());
        this.ashPokemons.forEach(pokemon => pokemon.moveRandom());
    }
    //Ataques Random
    randomAttack() {
        if (this.isFighting) {
            this.enemyPokemon.forEach(pokemon => pokemon.attackRandom());
        }
        if (this.ashBattle) {
            this.ashPokemons.forEach(pokemon => pokemon.attackRandom());
        }
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
            grass.findPokemon(this.player);
            if (this.isFighting) {
                this.pokemonStatus.changeImg(img2)
            }
        })
    }
    //Ash Colision
    colisionAsh() {
        if (this.ash.colision(this.player)) {
            this.isFighting = false;
            this.ashBattle = true;
            this.pokemonStatus.changeImg(img2)

        }
    }

    //daños
    reciveDamage(enemy) {
        const enemyAttack = enemy.attackPoints;
        const enemyColision = enemy.fireBalls.some((fireball) => fireball.colision(this.pokemonPlayer));
        if (enemyColision) {
            this.pokemonPlayer.reciveDamage(enemyAttack);
            this.pokemonStatus.changeLivePoints();
        }
    }

    makeDamage(enemy) {
        const playerAttack = this.pokemonPlayer.attackPoints;
        const playerColision = this.pokemonPlayer.fireBalls.some((fireball) => fireball.colision(enemy));
        if (playerColision) {
            enemy.reciveDamage(playerAttack);
        }
    }

    // Battle
    startBattle() {
        if (this.isFighting && this.pokemonPlayer.lifePoints > 0) {
            this.reciveDamage(this.enemyPokemon[this.selectedEnemy], this.pokemonPlayer);
            this.makeDamage(this.enemyPokemon[this.selectedEnemy]);
            if (this.pokemonPlayer.lifePoints <= 0) {
                swal("¡Perdiste!", "Sigue entrenado!!");
                this.pause();
                setTimeout(() => {
                    this.isFighting = false;
                    this.continue();
                }, 1200);
                ;
                this.pokemonPlayer.lifePoints = 1000;
                for (let i = 0; i < this.victorys; i++) {
                    Math.floor(this.pokemonPlayer.lifePoints *= 1.05);
                }
                this.pokemonPlayer.lifePoints = this.pokemonPlayer.lifePoints.toFixed(2);
                this.pokemonPlayer.lifePoints = Number(this.pokemonPlayer.lifePoints);

                this.pokemonPlayer.x = 100;
                this.pokemonPlayer.y = 200;
                this.enemyPokemon[this.selectedEnemy].lifePoints = 1000;
                console.log("Has perdido");
            }
            if (this.enemyPokemon[this.selectedEnemy].lifePoints <= 0) {
                swal("¡Ganaste!", "tu charmander se hizo más fuerte!!");
                this.pause();
                setTimeout(() => {
                    this.isFighting = false;
                    this.continue();
                }, 1200);
                this.victorys++

                this.pokemonPlayer.lifePoints = 1000;
                for (let i = 0; i < this.victorys; i++) {
                    this.pokemonPlayer.lifePoints *= 1.10;
                }
                this.pokemonPlayer.lifePoints = this.pokemonPlayer.lifePoints.toFixed(2);
                this.pokemonPlayer.lifePoints = Number(this.pokemonPlayer.lifePoints);

                this.pokemonPlayer.attackPoints *= 1.10
                this.pokemonPlayer.attackPoints = this.pokemonPlayer.attackPoints.toFixed(2);
                this.pokemonPlayer.attackPoints = Number(this.pokemonPlayer.attackPoints);

                this.pokemonPlayer.x = 100;
                this.pokemonPlayer.y = 200;
                this.enemyPokemon[this.selectedEnemy].lifePoints = 1000;

            }
        }
        this.pokemonStatus.changeLivePoints();
        this.pokemonStatus.chageAttackPoints();
    }

    //Ash Battle

    startAshBattle() {
        if (this.ashBattle) {
            this.ashPokemons.forEach(pokemon => {
                this.reciveDamage(pokemon, this.pokemonPlayer);
                this.makeDamage(pokemon);
                if (pokemon.lifePoints <= 0) {
                    this.ashPokemons.splice(this.ashPokemons.indexOf(pokemon), 1);
                }
                if (this.ashPokemons.length <= 0) {
                    this.isFighting = false;
                    this.ashBattle = false;
                    console.log("Has ganado");
                    this.final = true
                }
            });

            if (this.pokemonPlayer.lifePoints <= 0) {
                swal("¡Perdiste!", "Sigue entrenado!!");
                this.pause();
                setTimeout(() => {
                    this.ashBattle = false;
                    this.isFighting = false;
                    this.continue();
                }, 2200);

                this.pokemonPlayer.lifePoints = 1000;
                for (let i = 0; i < this.victorys; i++) {
                    Math.floor(this.pokemonPlayer.lifePoints *= 1.05);
                }

                this.pokemonPlayer.lifePoints = 1000;
                for (let i = 0; i < this.victorys; i++) {
                    Math.floor(this.pokemonPlayer.lifePoints *= 1.05);
                }
                this.pokemonPlayer.lifePoints = this.pokemonPlayer.lifePoints.toFixed(2);
                this.pokemonPlayer.lifePoints = Number(this.pokemonPlayer.lifePoints);
                console.log("Has perdido");
                this.ashBattle = false;
                this.isFighting = false;
                this.resetMap();
            }

        }
        this.pokemonStatus.changeLivePoints();
        this.pokemonStatus.chageAttackPoints();
    }


}