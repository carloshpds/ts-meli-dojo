import { ShipType } from './ShipType'
import Position from './Position'

export default class Ship {
  type: ShipType
  length: number
  positions?: Position[] = []

  constructor(length: number, type: ShipType){
    this.length = length
    this.type = type
  }

  get isAlive(): boolean{
    return this.positions.length && this.positions.some((position) => position.isAlive)
  }
}