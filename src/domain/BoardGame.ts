import Position from './Position';
import Ship from './Ship';


export default class BoardGame {
    positions: Position[][];

    constructor(positions: Position[][] ) {
        this.positions = positions;
        this.posicionarNavio();
    }

    posicionarNavio() {
        let navio1 = new Position('1,1');
        let navio2 = new Position('1,2');
        let navio3 = new Position('1,3');
        const ship = new Ship([navio1, navio2, navio3]);
    }
    

}