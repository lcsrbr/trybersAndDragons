import Monster from './Monster';

export default class Dragon extends Monster {
  constructor(private _lifepoints:number = 999) {
    super(_lifepoints);
  }
}