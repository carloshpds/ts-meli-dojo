import Ship from "../Ship";
import { ShipType } from "../ShipType";

export default class PatrolBoat extends Ship {
  constructor(){
    super(2, ShipType.PATROL_BOAT)
  }
}