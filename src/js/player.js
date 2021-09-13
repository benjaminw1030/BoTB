export default class Musician {
  constructor(name, rock, hype, focus, exp, mp, lvl, inv, money, bandmates, player) {
    this.name = name;
    this.rock = rock;
    //hype = attack
    this.hype = hype;
    //focus = defense
    this.focus = focus;
    this.exp = exp;
    //mp = music power, for special moves
    this.mp = mp;
    this.lvl = lvl;
    this.inv = inv;
    this.money = money;
    this.bandmates = bandmates;
    //player = boolean for true/false
    this.player = player;
  }

  attack(enemy, location) {
    enemy.hp -= (this.hype - enemy.focus);
    enemy.deathCheck(this, location);
  }

  lvlCheck() {
    if (this.exp >= 20) {
      this.lvl += 1;
      this.hype += 1;
      this.focus += 1;
      this.mp += 1;
      this.exp = 0;
      return true;
    } else {
      return false;
    }
  }

  playerBombCheck() {
    if (this.rock <= -10) {
      delete this.name;
      return true
    } else {
      return false
    }
  }

  checkEnemy(myEnemy) {
    switch (myEnemy) {
      case "Garage Friend":
        let garageFriend = new Musician;
        break;
      case "Metal Guy":
        let metalGuy = new Musician;
        break;
    }
  }
};

