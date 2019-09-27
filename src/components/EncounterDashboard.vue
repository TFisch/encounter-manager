<template>
  <div class="dashboard-wrapper">
    <div class="form-wrapper">
      <h2 class="logo">ENCOUNTER MANAGER</h2>
      <NewCharacterForm @add-char="addChar" />
    </div>
    <EncounterList v-bind="encounterList" @add-char="addChar" />
  </div>
</template>

<script>
import Character from "../classes/Encounter";
import NewCharacterForm from "./NewCharacterForm/NewCharacterForm.vue";
import EncounterList from "./EncounterList/EncounterList";
import EventBus from "./EventBus.js";

export default {
  name: "EncounterDashboard",
  components: { NewCharacterForm, EncounterList },
  data() {
    return {
      newChar: {},
      encounterList: []
    };
  },
  methods: {
    addChar(newChar) {
      this.newChar = newChar;
      this.encounterList.push(newChar);
      EventBus.$emit("add-to-list", this.encounterList);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/variables.scss";

h3 {
  margin: 40px 0 0;
  font-family: "Oswald";
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.logo {
  color: $primary;
}
.dashboard-wrapper {
  display: flex;
  flex-direction: column;
  @include sm {
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
