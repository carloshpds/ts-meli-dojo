export default class Position {
  x: Number
  y: Number

  constructor(stringCoordinates: String) {
    // TODO: validar se o formato das coordenadas são válidos
    let [x, y] = stringCoordinates.split(',')
    this.x = parseInt(x.trim())
    this.y = parseInt(y.trim())
  }
}