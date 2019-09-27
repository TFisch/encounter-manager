<template>
  <div class="encounter-card-wrapper">
    <h1 class="char-init">{{character.initiative}}</h1>
    <h1 class="char-name">{{character.name}}</h1>
    <h1 class="char-hp">{{character.hp || "-"}}</h1>
  </div>
</template>
<script>
export default {
  name: "EncounterCard",
  props: ["character"]
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/variables.scss";

.encounter-card-wrapper {
  background: $grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 20px;
  width: 250px;
  opacity: 0.9;
  border: solid $white 1px;
}
.char-name {
  flex-grow: 2;
  color: $white;
  text-align: left;
}
.char-init {
  flex-grow: 1;
  color: $white;
  font-size: $fnt-md;
}
.char-hp {
  flex-grow: 1;
  color: $white;
  font-size: $fnt-sm;
}
</style>