export default class Inventory {
  constructor(instrument, outfit) {
    this.equipInst = instrument;
    this.equipOut = outfit;
    this.gear = []
  }

  unEquipInst() {
    this.gear.push(this.equipInst);
    this.equipInst = "none";
  }

  unEquipArm() {
    this.gear.push(this.equipArm);
    this.equipArm = "clothing";
  }

  equip(item) {
    const validWeapons = ["greatsword", "sword", "bow", "club"];
    const validArmors = ["leather armor", "chainmail", "plate mail"];
    const gearIndex = this.gear.indexOf(item);
    if (validWeapons.includes(item)) {
      this.gear.splice(gearIndex, 1);
      if (this.equipWep !== "unarmed") {
        this.gear.push(this.equipWep);
      }
      this.equipWep = item;
    } else if (validArmors.includes(item)) {
      this.gear.splice(gearIndex, 1);
      if (this.equipArm !== "clothing") {
        this.gear.push(this.equipArm);
      }
      this.equipArm = item;
    } else {
      return false;
    }
  }

  drop(item, location) {
    const gearIndex = this.gear.indexOf(item);
    this.gear.splice(gearIndex, 1);
    location.items.push(item);
  }
}