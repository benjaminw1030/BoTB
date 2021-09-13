export default class Inventory {
  constructor(instrument, outfit) {
    this.equipInst = instrument;
    this.equipOut = outfit;
    this.gear = []
  }

  unEquipInst() {
    this.gear.push(this.equipInst);
    this.equipInst = "beat up guitar";
  }

  unEquipArm() {
    this.gear.push(this.equipOut);
    this.equipOut = "t-shirt and jeans";
  }

  equip(item) {
    const validInst = ["cheap guitar", "decent guitar", "keytar", "axe-shaped double guitar"];
    const validOut = ["bad clothes", "shiny outfit", "cool outfit"];
    const gearIndex = this.gear.indexOf(item);
    if (validInst.includes(item)) {
      this.gear.splice(gearIndex, 1);
      if (this.equipInst !== "beat up guitar") {
        this.gear.push(this.equipInst);
      }
      this.equipInst = item;
    } else if (validOut.includes(item)) {
      this.gear.splice(gearIndex, 1);
      if (this.equipOut !== "t-shirt and jeans") {
        this.gear.push(this.equipOut);
      }
      this.equipOut = item;
    } else {
      return false;
    }
  }

  // drop(item, location) {
  //   const gearIndex = this.gear.indexOf(item);
  //   this.gear.splice(gearIndex, 1);
  //   location.items.push(item);
  // }
}