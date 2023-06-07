class Pokemon {
    constructor(ctx, x, y, width, height, img) {
        // para el Draw
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        // para la jugabilidad
        this.img = new Image();
        
    }
}