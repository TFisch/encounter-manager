<template>
  <div class="encounter-list">
    <h1>ENCOUNTER LIST</h1>
    <EncounterCard
      v-for="character in initiativeList"
      v-bind:key="character.id"
      v-bind:character="character"
    />
  </div>
</template>
<script>
import EncounterCard from "../EncounterCard/EncounterCard";

export default {
  name: "EncounterList",
  components: { EncounterCard },
  data: function() {
    return {
      initiativeList: [
        { name: "billy", initiative: 3, id: 0 },
        { name: "jimmy", initiative: 5, id: 1 }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>