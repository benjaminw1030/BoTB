import Musician from '../src/js/musician.js';

describe('Musician', () => {

  let player;
  let enemy;

  beforeEach(() => {
    player = new Musician("Ringo", 6, 2, 2, 0, 0, [], [], true);
    enemy = new Musician("Lars", 6, 2, 2, 0, 0, [], [], false);
  });

  test('Attacking will increase player hype.', () => {
    player.attack(enemy)
    expect(player.hype).toEqual(4);
  });

  test('Attacking will increase player hype by at least 1 regardless of defense.', () => {
    enemy.def = 100;
    player.attack(enemy)
    expect(player.hype).toEqual(1);
  });

  test('Attacking while enemy is focusing will double defense.', () => {
    enemy.focusMod = 2;
    player.attack(enemy)
    expect(player.hype).toEqual(2);
  });

  test('Attacking while player is in solo mode will double attack.', () => {
    player.soloMod = 2;
    player.attack(enemy)
    expect(player.hype).toEqual(10);
  });

  test('Using focus will set focusMod to 2.', () => {
    player.focus();
    expect(player.focusMod).toEqual(2);
  });

  test('Using solo will set soloMod to 2.', () => {
    player.solo();
    expect(player.soloMod).toEqual(2);
  });

  test('Flourish will increase hype by adding style to attack', () => {
    player.style = 20;
    player.flourish(enemy);
    expect(player.hype).toEqual(24);
  });

  test('Flourish will increase player hype by at least 1 regardless of defense.', () => {
    player.style = 20;
    enemy.def = 1000;
    player.attack(enemy)
    expect(player.hype).toEqual(1);
  });

  test('Flourish will do a flat 1 hype if it fails', () => {
    player.style = -20;
    player.flourish(enemy);
    expect(player.hype).toEqual(1);
  });

  test('bossAction will randomly choose between the four choices', () => {
    enemy.style = 20;
    jest.spyOn(global.Math, "random").mockReturnValue(.25)
    enemy.bossAction(player)
    expect(enemy.hype).toEqual(4);
    jest.spyOn(global.Math, "random").mockReturnValue(.5)
    enemy.bossAction(player)
    expect(enemy.focusMod).toEqual(2);
    jest.spyOn(global.Math, "random").mockReturnValue(.75)
    enemy.hype = 0;
    enemy.bossAction(player)
    expect(enemy.hype).toEqual(24);
    jest.spyOn(global.Math, "random").mockReturnValue(1)
    enemy.bossAction(player)
    expect(enemy.soloMod).toEqual(2);
  });
});