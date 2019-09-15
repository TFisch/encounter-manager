<template>
  <div class="encounter-card-wrapper">
    <h1 class="char-init">{{character.initiative}}</h1>
    <h1 class="char-name">{{character.name}}</h1>
    <h1 class="char-hp">{{character.hp}}</h1>
  </div>
</template>
<script>
import { sm } from "../../assets/styles/mixins.scss";
export default {
  name: "EncounterCard",
  props: ["character"]
};
</script>
<style lang="scss" scoped>
.encounter-card-wrapper {
  border: solid brown 1px;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  width: 350px;
}
.char-name {
  @include sm {
    color: lime;
  }
  flex-grow: 2;
  text-align: left;
}
.char-init {
  flex-grow: 1;
}
.char-hp {
  flex-grow: 1;
}
</style>