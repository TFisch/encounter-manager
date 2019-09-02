export default class Encounter {
  constructor(party, npcs) {
    this.party = party || [];
    this.npcs = npcs || [];
  }

  orderInitiative() {
    const combatants = this.party.concat(this.npcs);
    const ordered = combatants.sort((a, b) => a.initiative - b.initiative);
    return ordered;
  }

  initiateEncouter() {}

  advanceEncounter() {}

  stepBackEncouter() {}

  finishEnounter() {}
}

// const billy = new Character('Billy', 8);
// const jammy = new Character('Jammy', 6);
// const squib = new Character('Squib', 3);
// const cid = new NPC('Spider', 14);

// const newParty = [billy,jammy,squib];
// const baddies = [cid];
