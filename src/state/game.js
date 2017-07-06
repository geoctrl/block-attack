import Phaser from 'phaser';
import { Triangle } from '../sprites/triangle';

export class Game extends Phaser.State {
  init() {}
  preload() {}

  create() {
    this.triangle = new Triangle({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'triangle'
    });

    this.game.add.existing(this.triangle);
  }

  render() {

  }
}