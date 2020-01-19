import Ship from "../Ship";
import { ShipType } from "../ShipType";

export default class DestroyerShip extends Ship {
  constructor(){
    super(3, ShipType.DESTROYER)
  }
}