// import Energy from "../Energy";
import Archetype from "./Archetype";
import { EnergyType } from "../Energy";

export default class Warrior extends Archetype{

    private _damage: string;
    private static _instanceCalledTimes: number = 0;
    constructor(name: string) {
        super(name);
        this._damage = '';
        Warrior._instanceCalledTimes += 1;
    }

    get energyType(): EnergyType {
        return 'stamina';
    }

    static createdArchetypeInstances(): number {
        return Warrior._instanceCalledTimes;
    }
}