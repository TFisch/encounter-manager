<template>
  <div class="dashboard-wrapper">
    <div class="form-wrapper">
      <div class="header-row">
        <nav class="hamburger" v-on:click="menuOpen = !menuOpen">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </nav>
        <img src="./../assets/icons/swords.svg" class="icon" />
        <div class="spacer"></div>
      </div>
      <NewCharacterForm @add-char="addChar" />
    </div>
    <EncounterList v-bind="encounterList" @add-char="addChar" />
    <transition name="fade">
      <MobileMenu v-if="menuOpen" v-bind:menuOpen="menuOpen"></MobileMenu>
    </transition>
  </div>
</template>

<script>
import Character from "../classes/Encounter";
import NewCharacterForm from "./NewCharacterForm/NewCharacterForm.vue";
import EncounterList from "./EncounterList/EncounterList";
import EventBus from "./EventBus.js";
import MobileMenu from "./MobileMenu.vue";

export default {
  name: "EncounterDashboard",
  components: { NewCharacterForm, EncounterList, MobileMenu },
  data() {
    return {
      newChar: {},
      encounterList: [],
      menuOpen: false
    };
  },
  methods: {
    addChar(newChar) {
      this.newChar = newChar;
      this.encounterList.push(newChar);
      EventBus.$emit("add-to-list", this.encounterList);
    }
  },
  mounted() {
    EventBus.$on("toggle-menu", () => (this.menuOpen = !this.menuOpen));
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/variables.scss";
h1 {
  font-size: 1.25em;
}
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
.header-row {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
}
.hamburger {
  width: 40px;
  cursor: pointer;
}
.line {
  width: 20px;
  height: 1.25px;
  background-color: $primary-red;
  margin: 5px;
}
.icon {
  width: 25px;
}
.logo {
  color: $primary-red;
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
