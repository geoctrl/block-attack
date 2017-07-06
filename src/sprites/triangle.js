import Phaser from 'phaser';
import { gameConfig } from '../config';

export class Triangle extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset);
    this.anchor.setTo(0.5);
    console.log(gameConfig.scale);
    this.scale.setTo(gameConfig.scale, gameConfig.scale);
  }

  update () {
    this.angle += 2;
  }
}