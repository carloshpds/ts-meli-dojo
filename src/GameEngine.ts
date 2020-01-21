
import Position from './domain/Position'
import Ocean from './domain/Ocean'
import DestroyerShip from './domain/ships/DestroyerShip'
import Submarine from './domain/ships/Submarine'
import PatrolBoat from './domain/ships/PatrolBoat'
import Battleship from './domain/ships/BattleShip'
import AircraftCarrier from './domain/ships/AircraftCarrier'

export default class GameEngine {
  ocean: Ocean

  build() {
    this.ocean = new Ocean()
    this.ocean.createShip(new AircraftCarrier())
    this.ocean.createShip(new DestroyerShip())
    this.ocean.createShip(new Submarine())
    this.ocean.createShip(new Battleship())
    this.ocean.createShip(new PatrolBoat())
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