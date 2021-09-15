export default class Musician {
  constructor(name, atk, def, style, fame, money, inv, bandmates, pc) {
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.style = style;
    this.fame = fame;
    this.inv = inv;
    this.money = money;
    this.bandmates = bandmates;
    //player = boolean for true/false
    this.pc = pc;
    this.hypeIncrease = 0;
    this.hype = 0;
    this.focusMod = 1;
    this.soloMod = 1;
    this.lastAction = '';
  }
  //play chorus = attack
  // flourish move ?
  // potentially for UI, check battle.musicianTurn to determine div to show
  //
  attack(enemy) {
    this.hypeIncrease = (this.atk * this.soloMod) - (enemy.def * enemy.focusMod);
    if (this.hypeIncrease <= 0) {
      this.hypeIncrease = 1;
    }
    this.hype += this.hypeIncrease;
    this.lastAction = 'chorus';
  }


  focus() {
    this.focusMod = 2;
    this.lastAction = 'focus';
  }

  solo() {
    this.soloMod = 2;
    this.lastAction = 'solo';
  }

  flourish(enemy) {
    let successChance = Math.floor(Math.random(1, 20));
    successChance += this.style;
    if (successChance > 10) {
      this.hypeIncrease = (this.atk * this.soloMod + this.style) - (enemy.def * enemy.focusMod);
      if (this.hypeIncrease <= 0) {
        this.hypeIncrease = 1;
      } else {
        this.hypeIncrease = 1;
      }
      this.hype += this.hypeIncrease;
      this.soloMod = 1;
    }
    this.lastAction = 'flourish';
  }
  // if battle.musicianTurn = 1 {
  //this.message()
  //return statement in text box
  // array with 4 statements in it - print 
  bossAction(player) {
    let bossTime = Math.ceil(Math.random() * 4);
      switch (bossTime) {
      case 1:
        this.attack(player);
        console.log("boss chorus")
        break;
      case 2:
        this.focus();
        console.log("boss focus")
        break;
      case 3:
        this.flourish(player);
        console.log("boss flourish")
        break;
      case 4:
        this.solo();
        console.log("boss solo")
        break;
    }
  }
}

