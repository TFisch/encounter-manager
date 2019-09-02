export default class Character {
  constructor(name, initiative) {
    this.name = name;
    this.initiative = initiative || 0;
    this.npc = false;
  }
}
