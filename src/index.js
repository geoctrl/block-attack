import 'pixi';
import 'p2';
import Phaser from 'phaser';

import { config } from './config';
import { State } from './state';

class Game extends Phaser.Game {
  constructor() {
    config.saveDocumentElement(document.documentElement);
    super(config.canvasWidth, config.canvasHeight, Phaser.CANVAS, 'content', null);

    State(this.state);
    this.state.start('Boot')
  }
}

window.game = new Game();