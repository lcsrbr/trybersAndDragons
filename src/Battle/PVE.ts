import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _monster: (Fighter | SimpleFighter)[],
  ) {
    super(_player);
  }

  fight(): number {
    while (this._player.lifePoints > 0) {
      this._monster.forEach((creature) => {
        this._player.attack(creature);
        creature.attack(this._player);
      });
    }
    if (this._player.lifePoints === -1) {
      return -1;
    } 
    return 1;
  }
}