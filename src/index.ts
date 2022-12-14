import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('bobMartin');

const player2 = new Character('Edifier');
const player3 = new Character('Orange');

const monster1 = new Monster();
const monster2 = new Dragon();

// player1.levelUp();
// player1.levelUp();
// player1.levelUp();

for (let i = 1; i < 3; i += 1) {
  player1.levelUp();
}

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export default Dragon;
export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };