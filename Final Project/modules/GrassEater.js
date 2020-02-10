// var LiveForm = require("./LiveForm");
// var random = require("./random.js");



// module.exports = class GrassEater extends LiveForm {
//     constructor(x, y) {
//         super(x, y);
//         this.life = 10;
//     }
//     getNewCoordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     chooseCell(character) {
//         this.getNewCoordinates();
//         return super.chooseCell(character);
//     } 
//     mul() {
//         GrassEaterHashiv++;
//         let emptyCells = this.chooseCell(0);
//         let newCell = random(emptyCells);

//         if (newCell) {
            
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 2;
//             let GrassEater = new GrassEater(x, y);
//             GrassEaterArr.push(GrassEater);
//             this.life = 5;
//         }
//     }
//     eat() {
//         let emptyCells = this.chooseCell(1);
//         let newCell = random(emptyCells);

//         if (newCell) {

//             this.life++;
//             let x = newCell[0];
//             let y = newCell[1];

//             matrix[y][x] = 2;
//             matrix[this.y][this.x] = 0;

//             for (let i in grassArr) {
//                 if (grassArr[i].x == x && grassArr[i].y == y) {
//                     grassArr.splice(i, 1)
//                 }
//             }
//             this.x = x;
//             this.y = y;

//             if (this.life >= 13) {
//                 this.mul();
//             }
//         }
//         else {
//             this.move()
//         }
//     }
//     move() {
//         console.log("aaa");
        
//         this.life--;
//         let emptyCells = this.chooseCell(0);
//         let newCell = random(emptyCells);

//         if (newCell) {
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 2;
//             matrix[this.y][this.x] = 0;
//             this.y = y;
//             this.x = x;
//         }
//         if (this.life < 0) {
//             this.die();
//         }
//     }
//     die() {
//         matrix[this.y][this.x] = 0;

//         for (let i in GrassEaterArr) {
//             if (GrassEaterArr[i].x == this.x && GrassEaterArr[i].y == this.y) {
//                 GrassEaterArr.splice(i, 1)
//             }
//         }
//     }
// }
var LiveForm = require("./LiveForm");
var random = require("./random.js");

class GrassEater extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 9;
        this.index = 2;
    }
     chooseCell(character) {
        this.getNewCoordinates();
        return super. chooseCell(character);
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    move() {
        this.getNewCoordinates()
        this.multiply++;
        if (p.innerText == "Winter" && this.multiply >= 3) {
            this.life--;
            var emptyCells = this.chooseCell(0);
            var newCell = random(newCell);
            if (newCell) {
                matrix[this.y][this.x] = 0;
                matrix[newCell[1]][newCell[0]] = 2;
                this.x = newCell[0];
                this.y = newCell[1];
                console.log("Its cold");
                this.multiply = 0;
            }
        }
        else {
            this.life--;
            var emptyCells = this.chooseCell(0);
            var newCell = random(emptyCells);
            if (emptyCells) {
                matrix[this.y][this.x] = 0;
                matrix[emptyCells[1]][emptyCells[0]] = 2;
                this.x = emptyCells[0];
                this.y = emptyCells[1];
            }
        }
    }
    eat() {
        this.getNewCoordinates();
        var newCell = this.chooseCell(1);
        var newCell = random(emptyCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            matrix[newCell[1]][newCell[0]] = 2;
            this.x = newCell[0];
            this.y = newCell[1];
            this.life++;
            for (var i in grassArr) {
                if (newCell[0] == grassArr[i].x && newCell[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this.move();
            this.die();
        }

    }
    die() {
        for (var i in GrassEaterArr) {
            if (this.life <= 0) {
                if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }
           else if (this.life >= 40) {
                if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}