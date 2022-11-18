// import Energy from "../Energy";
import Archetype from "./Archetype";
import { EnergyType } from "../Energy";

export default class Ranger extends Archetype{

    private _damage: string;
    private static _instanceCalledTimes: number = 0;
    constructor(name: string) {
        super(name);
        this._damage = '';
        Ranger._instanceCalledTimes += 1;
    }

    get energyType(): EnergyType {
        return 'stamina';
    }

    static createdArchetypeInstances(): number {
        return Ranger._instanceCalledTimes;
    }
}