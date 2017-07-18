
// max numbers to measure scaling
let maxWidth = 2560;
let maxHeight = 1440;

class _config {
  constructor() {
    this.aspectRatio = 0.5625; // 16/9
    this.localStorageName = 'paradoxGame';
    this.board = {};
  }



  saveDocumentElement(docEl) {
    this.documentEl = docEl;
    this.canvasWidth = 1920;
    this.canvasHeight = 1080;
    // todo: this scales the canvas to the doc size
    // this.canvasWidth = this.documentEl.clientWidth;
    // this.canvasHeight = this.canvasWidth * this.aspectRatio;
    this.scale = (100 / (maxWidth / this.canvasWidth)) / 100;
    this.board = {
      width: 610 * this.scale,
      height: 1210 * this.scale,
      gutter: 10 * this.scale,
      block: 90 * this.scale
    };
  }

  getBoardDetails(boardEl) {
    this.board.x = boardEl.world.x - (this.board.width/2);
    this.board.y = boardEl.world.y - (this.board.height/2);
    return this.board;
  }
}

export const config = new _config();