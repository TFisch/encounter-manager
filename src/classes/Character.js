export default class Character {
  constructor(name, initiative, id) {
    this.name = name;
    this.initiative = initiative || 0;
    this.npc = false;
    this.id = id;
  }
}
