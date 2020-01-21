import Ship from "../Ship";
import { ShipType } from "../ShipType";

export default class Battleship extends Ship {
  constructor(){
    super(4, ShipType.BATTLESHIP)
  }
}