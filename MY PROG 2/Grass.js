   class Grass {

    chooseCell(char) {
        let arr = [];

        for (let index = 0; index < this.directions.length; index++) {
            let x = this.directions[index][0];
            let y = this.directions[index][1];
            if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
                if (matrix[y][x] == char) {
                    arr.push(this.directions[index])
                }
            }
        }

        return arr;
    }
    mul() {
        this.life++;
        let newCell = random(this.chooseCell(0));
        if (newCell && this.life > 10) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 1;
            let grass = new Grass(x, y);
            grassArr.push(grass);
            this.life = 0;
        }
    }
}