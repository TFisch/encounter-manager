<template>
  <div class="encounter-list">
    <EncounterCard
      v-for="character in initiativeList"
      v-bind:key="character.id"
      v-bind:hp="character.hp"
      v-bind:character="character"
    />
  </div>
</template>
<script>
import EncounterCard from "../EncounterCard/EncounterCard";

export default {
  name: "EncounterList",
  components: { EncounterCard },
  beforeMount() {
    this.getStoredList();
  },
  data: function() {
    return {
      initiativeList: []
    };
  },
  methods: {
    getStoredList() {
      const localStorage = window.localStorage;
      const retreivedList = JSON.parse(localStorage.getItem("initiativeList"));

      const retreivedListValues = Object.values(retreivedList);
      const retreivedListKeys = Object.keys(retreivedList);

      const unorderList = retreivedListValues.map((charData, index) => {
        const charDisplayData = {
          name: charData.name,
          initiative: JSON.parse(charData.initiative),
          hp: charData.hp,
          id: retreivedListKeys[index]
        };
        return charDisplayData;
      });

      const orderedList = unorderList.sort(
        (a, b) => a.initiative - b.initiative
      );

      this.initiativeList = orderedList;

      // set chars from storage to this.initiativeList
    }
  }
};
</script>
<style lang="scss" scoped>
.encounter-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>