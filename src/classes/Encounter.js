export default class Encounter {
  constructor(combatants) {
    this.combatants = combatants || [];
    this.turn = null;

    this.initiateEncouter(this.combatants);
  }

  initiateEncouter(combatants) {
    this.turn = 0;
    const currentTurnCharacter = combatants[0];
    return currentTurnCharacter;
  }

  advance() {
    this.turn = this.turn + 1;
    const currentTurnCharacter = this.combatants[this.turn];
    return currentTurnCharacter;
  }

  stepBack() {
    this.turn = this.turn - 1;
    const currentTurnCharacter = this.combatants[this.turn];
    return currentTurnCharacter;
  }

  // finishEnounter() {}
}
