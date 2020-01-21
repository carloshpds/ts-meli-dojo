import Ship from "../Ship";
import { ShipType } from "../ShipType";

export default class AircraftCarrier extends Ship {
  constructor(){
    super(5, ShipType.AIRCRAFT_CARRIER)
  }
}