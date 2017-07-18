import Phaser from 'phaser';
import { centerGameObjects } from '../utils';

export class Splash extends Phaser.State {
  init() {};

  preload() {
    this.load.image('triangle', 'assets/images/triangle.png');
    this.load.image('diamond', 'assets/images/diamond.png');
    this.load.image('heart', 'assets/images/heart.png');
    this.load.image('circle', 'assets/images/circle.png');
    this.load.image('star', 'assets/images/star.png');
    this.load.image('board', 'assets/images/board.png');
    this.load.image('select', 'assets/images/select.png');
  }

  create() {
    this.state.start('Game');
  }
}