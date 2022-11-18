// import Energy from "../Energy";
import Archetype from "./Archetype";
import { EnergyType } from "../Energy";

export default class Mage extends Archetype{

    private _damage: string;
    private static _instanceCalledTimes: number = 0;
    constructor(name: string) {
        super(name);
        this._damage = '';
        Mage._instanceCalledTimes += 1;
    }

    get energyType(): EnergyType {
        return 'mana';
    }

    static createdArchetypeInstances(): number {
        return Mage._instanceCalledTimes;
    }
}