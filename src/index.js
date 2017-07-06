import 'pixi';
import 'p2';
import Phaser from 'phaser';

import { gameConfig } from './config';
import { State } from './state';

class Game extends Phaser.Game {
  constructor() {
    gameConfig.saveDocumentElement(document.documentElement);
    super(gameConfig.canvasWidth, gameConfig.canvasHeight, Phaser.CANVAS, 'content', null);

    State(this.state);
    this.state.start('Boot')
  }
}

window.game = new Game();