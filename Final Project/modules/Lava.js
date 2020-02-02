var LiveForm = require("./LiveForm");
var random = require("./random.js");



module.exports = class Lava extends LiveForm{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.life = 0;
        
    }
    mul() {
        this.life++;
        let newCell = random(this.chooseCell(0).concat(this.chooseCell(1)).concat(this.chooseCell(2)).concat(this.chooseCell(3)));
        if (newCell && this.life > 10) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            let lava = new Lava(x, y);
            lavaArr.push(lava);
            this.life = 0;
        }
    }
}
