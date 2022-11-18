// import Energy from "../Energy";
import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _instanceCalledTimes = 0;
  constructor(name: string) {
    super(name);
    Warrior._instanceCalledTimes += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instanceCalledTimes;
  }
}