import { Boot } from './boot';
import { Splash } from './splash';
import { Game } from './game';

export function State(state) {
  state.add('Boot', Boot, false);
  state.add('Splash', Splash, false);
  state.add('Game', Game, false);
}