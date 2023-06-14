class BattleTransition {
    constructor(ctx, game, x, y, width, height) {
        this.ctx = ctx;
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.img = new Image();
        this.img.src = './assets/img/transition.png';
        this.img.isReady = false;
        this.img.onload = () => {
            this.img.isReady = true;
        }

        this.xFrame = 0;
        this.xFrames = 4;
        this.yFrame = 0;
        this.yFrames = 2;
    }
}