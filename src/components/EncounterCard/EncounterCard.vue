<template>
  <div v-if="this.active" class="encounter-card-wrapper active-card">
    <h2 class="char-init">{{this.character.initiative}}</h2>
    <h1 class="char-name">{{character.name}}</h1>
    <h1 class="char-hp">{{character.hp || "-"}}</h1>
  </div>
  <div v-else class="encounter-card-wrapper inactive-card">
    <h1 class="char-init">{{this.character.initiative}}</h1>
    <h1 class="char-name">{{character.name}}</h1>
    <h1 class="char-hp">{{character.hp || "-"}}</h1>
  </div>
</template>
<script>
import EventBus from "../EventBus";

export default {
  name: "EncounterCard",
  props: ["character", "activeChar"],
  data() {
    return {
      active: false
    };
  },
  mounted() {
    EventBus.$on("update-active-char", activeId => {
      if (this.character.id === activeId) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/variables.scss";

.encounter-card-wrapper {
  display: flex;
  justify-content: space-around;
  font-family: "Staatliches";
  text-shadow: 2px 2px #000;
  align-items: center;
  margin: 0 0 20px;
  width: 80%;
  border: solid $white 1px;
  min-width: 300px;
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
.active-card {
  background: $primary-red;
}
.inactive-card {
  opacity: 0.7;
  background: $grey;
}
</style>