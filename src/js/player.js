export focusault class Musician {
  constructor(name, rock, hype, focus, exp, mp, lvl, inv) {
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
    this.enemy = enemy;
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
      this.hp += 2;
      this.exp = 0;
      return true;
    } else {
      return false;
    }
  }

  playerDeathCheck() {
    if (this.hp <= 0) {
      delete this.name;
      return true
    } else {
      return false
    }
  }
}

export class Boss {
  constructor(myEnemy) {
    this.myEnemy = myEnemy
    this.myStats = []
    this.myIndexLoc = 0
    this.myDojo = ""
  }

  checkEnemy(myEnemy) {
    switch (myEnemy) {
      case "Wimp Lo":
        this.myStats = [10, 10, 40]
        this.myDojo = "Face To Foot Style"
        break;
      case "Axel Kicker":
        this.myStats = [20, 20, 50]
        this.myDojo = "Right Leg Gym"
        break;
      case "Handy Mann":
        this.myStats = [30, 20, 60]
        this.myDojo = "Custodi-gym"
        break;
      case "Both-Legs Jim":
        this.myStats = [60, 30, 70]
        this.myDojo = "Foot to Face Style"
        break;
      case "Baki the Grappler":
        this.myStats = [90, 40, 100]
        this.myDojo = "Strongest on Earth"
        break;
    }
  };