import 'phaser'
import GameScene from './scenes/GameScene'

const SCREEN_WIDTH = 1280
const SCREEN_HEIGHT = 720

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#48C4F8",
  pixelArt: true,
  scale: {
    parent: 'game',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    // If you want the width and height to be automatically adjusted to fit in the specified target area, 
    // remove the following comment out
    // mode: Phaser.Scale.FIT,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },
  scene: [GameScene],
  // If you want to use matter for the physics engine, 
  // remove the following comment out.
  // physics: {
  // 	default: 'matter',
  // 	matter: {
  // 	  gravity: { y: 300 },
  //     debug: false
  // 	}
  // }
  // If you use matter for the physics engine, 
  // comment out or delete the following physics.
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
});
