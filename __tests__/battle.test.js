import Musician from '../src/js/musician.js';
import Battle from '../src/js/battle.js';

describe('Battle', () => {

  let player;
  let enemy;
  let battle;

  beforeEach(() => {
    player = new Musician("Ringo", 6, 2, 2, 0, 5, [], [], true);
    enemy = new Musician("Lars", 6, 2, 2, 0, 5, [], [], false);
    battle = new Battle(player, enemy)
  });

  test('Ending turn after player takes an action will reset enemy focusMod to 1 and vice versa. turn count will increment', () => {
    enemy.focusMod = 2;
    battle.nextTurn();
    expect(enemy.focusMod).toEqual(1);
    expect(battle.turn).toEqual(1)
    player.focusMod = 2;
    battle.nextTurn();
    expect(player.focusMod).toEqual(1);
    expect(battle.turn).toEqual(2);
  });

  test('Ending turn will check if player/enemy wins battle when hype is over 100', () => {
    player.hype = 101;
    battle.nextTurn();
    expect(player.money).toEqual(10);
    expect(player.hype).toEqual(0);
    player.hype = 0;
    enemy.hype = 101;
    battle.nextTurn();
    expect(battle.lost).toEqual(true);
    player.hype = 101;
    enemy.hype = 0;
    battle.nextTurn();
    expect(battle.won).toEqual(true);
  });

});