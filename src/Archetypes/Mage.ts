// import Energy from "../Energy";
import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyTipe: EnergyType;
  private static _instanceCalledTimes = 0;
  constructor(name: string) {
    super(name);
    Mage._instanceCalledTimes += 1;
    this._energyTipe = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyTipe;
  }

  static createdArchetypeInstances(): number {
    return Mage._instanceCalledTimes;
  }
}