export default class Battle {
  constructor() {
    this.turn = 0;
    this.musicianTurn = 0;
  }

  // take a breather = def
  // let player = new musician(info from player form)
  // let garageKid = new Musician(stats & stuff)
  // let battle1 = new Battle(garageKid, player)
  // pseudo-code
  nextTurn(enemy, player) {
    battle.turn++;
    battle.musicianTurn = battle.turn % 2;
    if (battle.musicianTurn = 0 && enemy.charging === true) {
      //output message that enemy is charging
    } else if (battle.musicianTurn = 1 && player.charging === true) {
      //output message that player is charging
    }
  }
}