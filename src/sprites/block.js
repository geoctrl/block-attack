import Phaser from 'phaser';
import { config } from '../config';

export class Block extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset);
    this.type = asset;
    this.scale.setTo(config.scale, config.scale);
  }

  // update () {
  //   this.angle += 2;
  // }
}