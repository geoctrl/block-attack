import Phaser from 'phaser';
import { config } from '../config';

export class Board extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset);
    this.scale.setTo(config.scale, config.scale);
    this.anchor.setTo(0.5);
  }

  // update () {
  //   this.angle += 2;
  // }
}