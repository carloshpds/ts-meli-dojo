
import Position from './domain/Position'
import Ocean from './domain/Ocean'
import DestroyerShip from './domain/ships/DestroyerShip'

export default class GameEngine {
  ocean: Ocean

  build() {
    this.ocean = new Ocean()
    this.ocean.createShip(new DestroyerShip())
  }

  play(position: Position) {
    this.ocean.fire(position)
    this.print()
  }

  print(){
    this.ocean.print()
  }

  quit() {
    console.log('** Fim! **')
  }
}