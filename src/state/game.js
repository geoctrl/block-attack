import Phaser from 'phaser';
import { Block } from '../sprites/block';
import { Board } from '../sprites/board';
import { Select } from '../sprites/select';
import { config } from '../config';

// 1210 / 610

export class Game extends Phaser.State {
  constructor() {
    super();
    this.frame = 0;
    this.status = 'ready'; // ready | play | pause
    this.selectGrid = [[0,0],[1,0]];
  }
  init() {}
  preload() {}

  create() {
    this.board = new Board({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'board'
    });

    this.arrowDown = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.arrowUp = this.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.arrowLeft = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.arrowRight = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

    this.arrowDown.onDown.add(() => {
      this.select.y = this.select.y + this.boardDetails.block + this.boardDetails.gutter;
    });
    this.arrowUp.onDown.add(() => {
      this.select.y = this.select.y - this.boardDetails.block - this.boardDetails.gutter;
    });
    this.arrowLeft.onDown.add(() => {
      this.select.x = this.select.x - this.boardDetails.block - this.boardDetails.gutter;
    });
    this.arrowRight.onDown.add(() => {
      this.select.x = this.select.x + this.boardDetails.block + this.boardDetails.gutter;
    });

    this.createBlock = function(x, y) {

      let blocks = ['triangle', 'star', 'diamond', 'circle', 'heart'];
      let xOrigin = this.boardDetails.x;
      let yOrigin = this.boardDetails.y;

      this.grid[y][x] = new Block({
        game: this,
        x: xOrigin + (this.boardDetails.block * x) + (this.boardDetails.gutter * x) + this.boardDetails.gutter,
        y: yOrigin + this.boardDetails.height + (this.boardDetails.block * y) + (this.boardDetails.gutter * y) - this.boardDetails.gutter - this.boardDetails.block,
        asset: blocks[Math.floor(Math.random() * 5)]
      })

    };

    this.boardDetails = config.getBoardDetails(this.board);
    this.blockLayer = this.add.group();

    this.grid = [ [], [], [] ];

    this.createBlock(0, 0);
    this.createBlock(1, 0);
    this.createBlock(2, 0);
    this.createBlock(3, 0);
    this.createBlock(4, 0);
    this.createBlock(5, 0);

    this.createBlock(0, 1);
    this.createBlock(1, 1);
    this.createBlock(2, 1);
    this.createBlock(3, 1);
    this.createBlock(4, 1);
    this.createBlock(5, 1);

    this.createBlock(0, 2);
    this.createBlock(1, 2);
    this.createBlock(2, 2);
    this.createBlock(3, 2);
    this.createBlock(4, 2);
    this.createBlock(5, 2);



    this.grid.forEach(row => {
      row.forEach(block => {
        if (block) {
          this.blockLayer.add(block);
        }
      })
    });

    this.game.add.existing(this.board);

    // select
    this.select = new Select({
      game: this,
      x: this.boardDetails.x,
      y: this.boardDetails.y + this.boardDetails.height - (110 * config.scale),
      asset: 'select'
    });
    this.blockLayer.add(this.select);


    setTimeout(() => {
      this.gameStart();
    }, 1000);

  }

  gameStart() {

    this.status = 'play';
  }

  render() {

    if (this.status === 'play') {

      if (this.frame > 60) {
        this.grid.forEach(row => {
          row.forEach(block => {
            if (block) {
              block.y = block.y - (8 * config.scale);
            }
          })
        });
        this.select.y = this.select.y - (8 * config.scale);
        this.frame = 0;
      }
      this.frame++;

    }
  }
}