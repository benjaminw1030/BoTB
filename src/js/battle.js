export default class Battle {
  constructor(player, enemy, id) {
    this.player = player;
    this.enemy = enemy;
    this.id = id;
    this.turn = 0;
    this.musicianTurn = 0;
    this.won = false;
    this.lost = false;
  }
  // let countryBattle = new Battle(player, enemy)
  // take a breather = def
  // let player = new musician(info from player form)
  // let garageKid = new Musician(stats & stuff)
  // let battle1 = new Battle(garageKid, player)
  // pseudo-code
  nextTurn() {
    if (this.id === 5){
      return false;
    }
    if (this.musicianTurn === 0 && this.enemy.focusMod === 2) {
      this.enemy.focusMod = 1;
    } else if (this.musicianTurn === 1 && this.player.focusMod === 2) {
      this.player.focusMod = 1
    }
    this.turn++;
    this.musicianTurn = this.turn % 2;
    this.winBattleCheck();
  }

  winBattleCheck() {
    if (this.player.hype >= 100) {
      this.player.money += this.enemy.money;
      this.player.hype = 0;
      this.won = true;
    } else if (this.enemy.hype >= 100) {
      this.lost = true;
    }
  }
}