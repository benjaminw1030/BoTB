import Musician from '../src/js/musician.js';

describe('Musician', () => {

  let player;
  let enemy;

  beforeEach(() => {
    player = new Musician("Ringo", 2, 2, 2, 0, 0, [], [], true);
    enemy = new Musician("Lars", 2, 2, 2, 0, 0, [], [], false);
  });

  test('description', () => {
    expect(Template.parameter).toEqual("something");
  });
});