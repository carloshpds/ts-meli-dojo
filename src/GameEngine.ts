
import Position from './domain/Position'

export default class GameEngine {
  build() {
    console.log('** Iniciando os dados em memória **')
  }

  play(position: Position) {
    console.log('** Jogou!! **')
  }

  quit() {
    console.log('** Fim! **')
  }
}