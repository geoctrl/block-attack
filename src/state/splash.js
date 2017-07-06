import Phaser from 'phaser';
import { centerGameObjects } from '../utils';

export class Splash extends Phaser.State {
  init() {};

  preload() {
    this.load.image('triangle', 'assets/images/triangle.png');
  }

  create() {
    this.state.start('Game');
  }
}