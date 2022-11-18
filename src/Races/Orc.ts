import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _instanceCalledTimes = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._instanceCalledTimes += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._instanceCalledTimes;
  }
}
