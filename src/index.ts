// ===
// Imports
// ===
// const AsciiBanner = require('ascii-banner')
const figlet = require('figlet')
const chalk = require('chalk')
const readline = require('readline')
import GameEngine from './GameEngine'
import Position from './domain/Position'


// ===
// Locals
// ===
const io = readline.createInterface({
  input: process.stdin
})

// ===
// Banner
// ===

class Game {
  engine: GameEngine = new GameEngine()

  constructor(){
    const banner = figlet.textSync('TS Meli Dojo', {
      horizontalLayout: 'default',
      verticalLayout: 'default'
    })

    console.log(chalk.yellow(banner))
    this.run()
  }

  onReceiveCoordinates(stringCoordinates: String) {
    try {
      const coordinates = new Position(stringCoordinates)
      this.engine.play(coordinates)
      this.newRound()
    } catch (e) {
      // TODO Repensar para não ser afetado por erros de syntax
      this.onReadMenuOption('1')
    }
  }

  onReadMenuOption(selectedOption: String) {
    switch (selectedOption) {
      case '1':
        console.log('\nQuais são as coordenadas? X, Y')
        io.question('', this.onReceiveCoordinates.bind(this))
        break
      case '2':
        this.engine.quit()
        break
      case '3':
        console.log('Você escolheu a opção 3')
        process.exit(0)
        break

      default:
        this.newRound()
    }
  }

  renderMenu() {
    console.log('\n=== Menu ===')
    console.log('\n1. Jogar')
    console.log('2. Desistir')

    console.log('\nO que deseja fazer?')
    io.question('', this.onReadMenuOption.bind(this))
  }

  newRound() {
    this.renderMenu()
  }

  run() {
    this.engine.build() // Preparar os dados em memória
    this.newRound()
  }
}

// ===
// Run
// ===
new Game()