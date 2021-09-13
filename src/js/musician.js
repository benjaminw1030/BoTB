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
    this.hype = 0;
    this.focusing = false;
    this.charging = false;
    this.focusMod = 1;
    this.soloMod = 1;
  }
//play chorus = attack
// flourish move ?
// potentially for UI, check battle.musicianTurn to determine div to show
//
  attack(enemy) {
    if (enemy.focusing = true) {
      enemy.focusMod = 2;
      let hypeIncrease = (this.atk * this.soloMod) - (enemy.def * enemy.focusMod)
      if (hypeIncrease <= 0) {
        this.hype += 1;
      } else {
      this.hype += (hypeIncrease);
      }
    }
      enemy.focusing = false
      enemy.focusMod = 1;
    }

  focus() {
    this.focusing = true;
    return `${this.name} is focusing`;
  }

  solo() {
    this.charging = true;
    return `${this.name} is charging`;
  }

  flourish(enemy) {
    let successChance = Math.floor(Math.random(1,20));
    successChance += this.style;
    if(successChance > 10) {
      if (enemy.focusing = true) {
        enemy.focusMod = 2;
        let hypeIncrease = (this.atk * this.soloMod + this.style) - (enemy.def * enemy.focusMod)
        if (hypeIncrease <= 0) {
          this.hype += 1;
        } else {
        this.hype += (this.atk - enemy.def);
        }
      }
    } else {
      this.hype += 1;
    }
      enemy.focusing = false
      enemy.focusMod = 1;
    }


// if battle.musicianTurn = 1 {
  bossAction(player) {
    let bossTime = Math.floor(Math.random(1,4));
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
    };
  }

}

