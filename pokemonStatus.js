const img1 = "./img/Pokemon/charmanderAlegre.jpeg";
const img2 = "./img/Pokemon/charmanderFurioso.jpeg";

class PokemonStatus{
    constructor(ctx, game){
        this.ctx = ctx;
        this.game = game;
        this.livePoints = document.getElementById('live-points');
        this.attackPoints = document.getElementById('attack-points');
        this.imgElem = document.getElementById('pokemon-status');
    }

    changeImg(img){
        this.imgElem.src = img;
    }

    changeLivePoints(){
        this.livePoints.innerHTML = this.game.pokemonPlayer.lifePoints;
    }
    chageAttackPoints(){
        this.attackPoints.innerHTML = this.game.pokemonPlayer.attackPoints;
    }
}