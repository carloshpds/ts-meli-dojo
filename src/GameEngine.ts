
import BoardGame from './domain/BoardGame'
import Position from './domain/Position'
import Ship from './domain/Ship';

export default class GameEngine {
  
  private boardGame:BoardGame;
  private ship:Ship;
  
  build() {

    

    this.boardGame = new BoardGame();
    this.ship = new Ship();


    console.log('** Iniciando os dados em memória **')
  }

  play(position: Position) {

    

    console.log('** Jogou!! **')

  }

  quit() {
    console.log('** Fim! **')
  }
}