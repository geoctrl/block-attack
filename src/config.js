
// max numbers to measure scaling
let maxWidth = 2560;
let maxHeight = 1440;

class _config {
  constructor() {
    this.aspectRatio = 0.5625; // 16/9
    this.localStorageName = 'paradoxGame';
  }

  saveDocumentElement(docEl) {
    this.documentEl = docEl;
    this.canvasWidth = this.documentEl.clientWidth;
    this.canvasHeight = this.canvasWidth * this.aspectRatio;
    this.scale = (100 / (maxWidth / this.canvasWidth)) / 100;
  }
}

export const gameConfig = new _config();