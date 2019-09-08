<template>
  <div class="encounter-card-wrapper">
    <h1>{{character.name}}</h1>
  </div>
</template>
<script>
export default {
  name: "EncounterCard",
  props: ["character"]
};
</script>
<style lang="scss" scoped>
.encounter-card-wrapper {
  border: solid brown 1px;
}
</style>