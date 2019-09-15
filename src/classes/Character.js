export default class Character {
  constructor(name, initiative, id, hp) {
    this.name = name;
    this.initiative = initiative || 0;
    this.npc = false;
    this.id = id;
    this.hp = hp;
  }
}
