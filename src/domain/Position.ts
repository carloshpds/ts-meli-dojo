import Ship from "./Ship"

export default class Position {
  x: number
  y: number
  value: string
  hasShip?: boolean
  private _isAlive: boolean = true

  constructor(stringCoordinates: String) {
    // TODO: validar se o formato das coordenadas são válidos
    let [x, y] = stringCoordinates.split(',')
    this.x = parseInt(x.trim())
    this.y = parseInt(y.trim())

    this.value = '-'
  }

  print() {
    if(this.hasShip && this.isAlive && process.env.ships){
      this.value = 'N'
    }
    process.stdout.write(` ${this.value} `, 'utf8')
  }

  set isAlive(value){
    this._isAlive = value
    if(value === false && this.hasShip) {
      this.value = 'X'
    } else if(value === false && !this.hasShip) {
      this.value = 'O'
    }
  }

  get isAlive(): boolean{
    return this._isAlive
  }
}