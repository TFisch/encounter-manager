import { uuid } from 'vue-uuid';

export const startStorageSession = newChar => {
  const storage = window.localStorage;
  const encounterId = uuid.v4();

  const storableData = JSON.stringify({
    encounterId,
    staged: true,
    encounterList: [newChar]
  });
  storage.setItem('EncounterManager', storableData);
};

export const resumeStorageSession = () => {
  const storage = window.localStorage;
  const encounterData = JSON.parse(storage.EncounterManager);
  return encounterData;
};

export const addCharToStorageSession = charToAdd => {
  const storage = window.localStorage;
  const encounterData = JSON.parse(storage.EncounterManager);
  encounterData.encounterList.push(charToAdd);
  const storableData = JSON.stringify(encounterData);
  storage.setItem('EncounterManager', storableData);
};
