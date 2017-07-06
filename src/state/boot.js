import Phaser from 'phaser';
import WebFont from 'webfontloader';

export class Boot extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#fff';
    this.fontsReady = false;
    this.fontsLoaded = this.fontsLoaded(this);
  }

  preload() {
    WebFont.load({
      google: {
        families: ['Fredoka One']
      },
      active: this.fontsLoaded
    });

    let text = this.add.text(
        this.world.centerX,
        this.world.centerY,
        'Loading Fonts', {
          font: '16px Arial',
          fill: '#a3a3a3',
          align: 'center'
        });
    text.anchor.setTo(0.5, 0.5);
  }

  render() {
    if (this.fontsReady) {

      this.state.start('Splash');
    }
  }

  fontsLoaded() {
    this.fontsReady = true;
  }
}