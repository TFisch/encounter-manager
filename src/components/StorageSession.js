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

export const updateEncounterList = newList => {
  const storage = window.localStorage;
  const existingSession = JSON.parse(storage['EncounterManager']);
  existingSession.encounterList = newList;
  const storableData = JSON.stringify(existingSession);
  storage.setItem('EncounterManager', storableData);
};

export const addCharToStorageSession = charToAdd => {
  const storage = window.localStorage;
  const encounterData = JSON.parse(storage.EncounterManager);
  encounterData.encounterList.push(charToAdd);
  const storableData = JSON.stringify(encounterData);
  storage.setItem('EncounterManager', storableData);
};
