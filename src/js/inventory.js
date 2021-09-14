export default class Inventory {
  constructor(instrument, outfit, gear) {
    this.eqInst = instrument;
    this.eqOut = outfit;
    this.gear = gear
  }

  unequipInst() {
    this.gear.push(this.eqInst);
    this.eqInst = "beat up guitar";
  }

  unequipOut() {
    this.gear.push(this.eqOut);
    this.eqOut = "t-shirt and jeans";
  }

  equip(item) {
    const validInst = ["cheap guitar", "decent guitar", "keytar", "axe-shaped double guitar"];
    const validOut = ["bad clothes", "shiny outfit", "cool outfit"];
    const gearIndex = this.gear.indexOf(item);
    if (validInst.includes(item)) {
      this.gear.splice(gearIndex, 1);
      if (this.eqInst !== "beat up guitar") {
        this.gear.push(this.eqInst);
      }
      this.eqInst = item;
    } else if (validOut.includes(item)) {
      this.gear.splice(gearIndex, 1);
      if (this.eqOut !== "t-shirt and jeans") {
        this.gear.push(this.eqOut);
      }
      this.eqOut = item;
    } else {
      return false;
    }
  }
}