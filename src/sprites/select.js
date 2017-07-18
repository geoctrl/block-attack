import Phaser from 'phaser';
import { config } from '../config';

export class Select extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset);
    this.scale.setTo(config.scale, config.scale);
  }
}