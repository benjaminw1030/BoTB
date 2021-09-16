export default class Musician {
  constructor(name, atk, def, style, fame, money, bandmates, dialog) {
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.style = style;
    this.fame = fame;
    this.money = money;
    this.bandmates = bandmates;
    this.hypeIncrease = 0;
    this.hype = 0;
    this.focusMod = 1;
    this.soloMod = 1;
    this.lastAction = '';
    this.dialog = dialog;
  }

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
    let successChance = Math.ceil(Math.random() * 20);
    successChance += this.style;
    if (successChance > 10) {
      this.hypeIncrease = (this.atk * this.soloMod + this.style) - (enemy.def * enemy.focusMod);
    }
    if (this.hypeIncrease <= 0) {
      this.hypeIncrease = 1;
    }
    this.hype += this.hypeIncrease;
    this.soloMod = 1;
    this.lastAction = 'flourish';
  }

  bossAction(player) {
    let bossTime = Math.ceil(Math.random() * 4);
    switch (bossTime) {
      case 1:
        this.attack(player);
        break;
      case 2:
        this.focus();
        break;
      case 3:
        this.flourish(player);
        break;
      case 4:
        this.solo();
        break;
    }
  }

  bandmate(bandmate, enemy) {
    let bandmateHype;
    switch (bandmate) {
      case "Shaggi":
        bandmateHype = 10;
        break;
      case "Astra":
        bandmateHype = 15;
        break;
      case "Steve":
        bandmateHype = 20;
        break;
    }
    this.hype += this.hypeIncrease;
    this.hypeIncrease = bandmateHype - (enemy.def * enemy.focusMod);
  }
}