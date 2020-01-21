import Ship from "../Ship";
import { ShipType } from "../ShipType";

export default class Submarine extends Ship {
  constructor(){
    super(3, ShipType.SUBMARINE)
  }
}