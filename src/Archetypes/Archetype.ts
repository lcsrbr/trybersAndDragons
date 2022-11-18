export default abstract class Archetype {
  private _special = 0;
  private _cost = 0;
  constructor(private _name: string) {
  }

  static createdArchetypeInstances():number {
    throw new Error(' Not implemented.');
  }

  get special() {
    return this._special;
  }
    
  get cost() {
    return this._cost;
  }

  get name() {
    return this._name;
  }

  abstract get energyType():string;
}