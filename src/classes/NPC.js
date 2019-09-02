export default class NPC {
  constructor(name, initiative) {
    this.name = name;
    this.initiative = initiative || 0;
    this.npc = true;
  }
}
