export default class Character {
  constructor(name, initiative, id, hp) {
    this.name = name.toUpperCase();
    this.initiative = initiative || '-';
    this.npc = false;
    this.id = id;
    this.hp = hp;
  }
}
