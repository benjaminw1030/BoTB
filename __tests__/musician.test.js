import Musician from '../src/js/musician.js';

describe('Musician', () => {

  let player;
  let enemy;

  beforeEach(() => {
    player = new Musician("Ringo", 4, 2, 2, 0, 0, [], [], true);
    enemy = new Musician("Lars", 4, 2, 2, 0, 0, [], [], false);
  });

  test('Attacking will increase player hype.', () => {
    player.attack(enemy)
    expect(player.hype).toEqual(2);
  });
});