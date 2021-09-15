// import Musician from '../src/js/musician.js';
// import Inventory from '../src/js/inventory.js';

// describe('Inventory', () => {

//   let player;
//   let enemy;
//   let enemyInv;
//   let playerInv;

//   beforeEach(() => {
//     enemyInv = new Inventory("decent guitar", "shiny outfit", ["pyrotechnics", "fake rodent"])
//     playerInv = new Inventory("cheap guitar", "bad clothes", ["disposable guitar"])
//     player = new Musician("Ringo", 6, 2, 2, 0, 5, playerInv, [], true);
//     enemy = new Musician("Lars", 6, 2, 2, 0, 5, enemyInv, [], false);
//   });

//   test('Unequipping an instrument will add it to a players gear', () => {
//     player.inv.unequipInst();
//     expect(player.inv.eqInst).toEqual("beat up guitar");
//     expect(player.inv.gear).toEqual(["disposable guitar", "cheap guitar"])
//   });

//   test('Unequipping an outfit will add it to a players gear', () => {
//     player.inv.unequipOut();
//     expect(player.inv.eqOut).toEqual("t-shirt and jeans");
//     expect(player.inv.gear).toEqual(["disposable guitar", "bad clothes"])
//   });

//   test('Equipping a valid instrument will add it as equipped instrument', () => {
//     player.inv.gear = ["disposable guitar", "keytar", "cool outfit"]
//     player.inv.equip("keytar");
//     expect(player.inv.eqInst).toEqual("keytar");
//     expect(player.inv.gear).toEqual(["disposable guitar", "cool outfit", "cheap guitar"])
//   });

//   test('Equipping a valid outfit will add it as equipped outfit', () => {
//     player.inv.gear = ["disposable guitar", "keytar", "cool outfit"]
//     player.inv.equip("cool outfit");
//     expect(player.inv.eqOut).toEqual("cool outfit");
//     expect(player.inv.gear).toEqual(["disposable guitar", "keytar", "bad clothes"])
//   });

//   test('Player cannot equip invalid items', () => {
//     player.inv.gear = ["disposable guitar", "keytar", "cool outfit"]
//     player.inv.equip("disposable guitar");
//     expect(player.inv.equip("disposable guitar")).toBeFalsy();
//     expect(player.inv.eqOut).toEqual("bad clothes");
//     expect(player.inv.eqInst).toEqual("cheap guitar");
//     expect(player.inv.gear).toEqual(["disposable guitar", "keytar", "cool outfit"])
//   });

//   test('Player cant add basic t-shirt or beat up guitar to gear', () => {
//     player.inv.gear = ["disposable guitar", "keytar", "cool outfit"]
//     player.inv.eqInst = "beat up guitar"
//     player.inv.eqOut = "t-shirt and jeans"
//     player.inv.equip("keytar");
//     player.inv.equip("cool outfit");
//     expect(player.inv.gear).toEqual(["disposable guitar"])
//   });
// });