import Position from './Position'
import Ship from './Ship'

export enum Direction {
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL'
}

export default class Ocean {
  matrixSize: number = 10
  positions: Array<Position[]> = []
  ships: Array<Ship> = []

  constructor() {
    this.build()
  }

  build() {
    for(let i = 1; i <= this.matrixSize; i++) {
      this.positions[i] = []
      for(let j = 1; j <= this.matrixSize; j++) {
        this.positions[i][j] = new Position(`${i}, ${j}`)
      }
    }
  }

  print(){
    console.log('\n')
    for(let i = 1; i <= this.matrixSize; i++) {
      for(let j = 1; j <= this.matrixSize; j++) {
        this.positions[i][j].print()
      }
      console.log('\n')
    }
  }

  createShip(ship: Ship) {

    let validStartPosition
    let directions = [Direction.HORIZONTAL, Direction.VERTICAL]
    let currentDirection
    const isEven = new Date().getMilliseconds() % 2 === 0
    if(isEven){
      directions = directions.reverse()
    }

    do {
      const {x, y} = this.generateShipStartPosition()
      const position = new Position(`${x}, ${y}`)
      currentDirection = directions[0]
      let isValidPosition = this.validateShipCreation(ship, position, currentDirection)
      if(isValidPosition) {
        validStartPosition = position
      } else {
        currentDirection = directions[1]
        isValidPosition = this.validateShipCreation(ship, position, currentDirection)
      }
    } while(!validStartPosition)

    this.addShipByStartPosition(ship, validStartPosition, currentDirection)
    this.ships.push(ship)
  }

  generateShipStartPosition(): {x: number, y: number} {
    const minPosition = 1
    let x = Math.random() * (this.matrixSize - minPosition) + minPosition
    let y = Math.random() * (this.matrixSize - minPosition) + minPosition
    return {x, y}
  }

  validateShipCreation(ship: Ship, startPosition: Position, direction: Direction): boolean {
    let isValidStartPosition = true
    if(direction === Direction.HORIZONTAL) {
      for(let i = 0; i < ship.length; i++) {
        const position = this.positions[startPosition.x + i][startPosition.y]
        const hasShip = position && position.hasShip
        isValidStartPosition = !hasShip
        if(hasShip) {
          isValidStartPosition = false
          break
        }
      }
    } else {
      for(let i = 0; i < ship.length; i++) {
        const position = this.positions[startPosition.x][startPosition.y + i]
        const hasShip = position && position.hasShip
        if(hasShip) {
          isValidStartPosition = false
          break
        }
      }
    }

    return isValidStartPosition
  }

  addShipByStartPosition(ship: Ship, startPosition: Position, direction: Direction) {
    if(direction === Direction.HORIZONTAL) {
      for(let i = 0; i < ship.length; i++) {
        const position = this.positions[startPosition.x + i][startPosition.y]
        position.hasShip = true
        ship.positions.push(position)
      }
    } else {
      for(let i = 0; i < ship.length; i++) {
        const position = this.positions[startPosition.x][startPosition.y + i]
        position.hasShip = true
        ship.positions.push(position)
      }
    }
  }

  fire(position: Position){
    const oceanPosition = this.positions[position.x][position.y]

    if(oceanPosition.hasShip) {
      const ship = this.ships.find((ship) => {
        const shipPosition = ship.positions.find((currentPosition) => {
          return currentPosition.x === position.x && currentPosition.y == position.y
        })
        if(shipPosition){
          shipPosition.isAlive = false
        }
        return ship
      })

      if(!ship.isAlive){
        console.log(`\n*** Afundou ${ship.type} ***\n`)
      }
    } else {
      oceanPosition.isAlive = false
    }


  }
}