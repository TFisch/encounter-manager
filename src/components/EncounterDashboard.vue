<template>
  <div class="dashboard-wrapper">
    <div class="form-wrapper">
      <div class="header-row">
        <img src="./../assets/icons/swords.svg" class="icon" v-on:click="start()" />
      </div>
      <NewCharacterForm @add-char="addChar" v-if="formActive" />
    </div>
    <EncounterList v-bind="encounterList" @add-char="addChar" update-active-char="charId" />
    <transition name="fade">
      <MobileMenu v-if="menuOpen" @toggle-edit="toggleEditMode"></MobileMenu>
    </transition>
    <Controller
      v-bind:menuOpen="menuOpen"
      v-if="this.mobileView"
      @next="next"
      @previous="previous"
      @toggle-menu="toggleMenu"
    />
  </div>
</template>

<script>
import Character from "../classes/Encounter";
import NewCharacterForm from "./NewCharacterForm/NewCharacterForm.vue";
import EncounterList from "./EncounterList/EncounterList";
import EventBus from "./EventBus.js";
import MobileMenu from "./MobileMenu.vue";
import Encounter from "../classes/Encounter";
import Controller from "./Controller";
import {
  startStorageSession,
  resumeStorageSession,
  addCharToStorageSession
} from "./StorageSession";

export default {
  name: "EncounterDashboard",
  components: { NewCharacterForm, EncounterList, MobileMenu, Controller },
  data() {
    return {
      newChar: {},
      encounterList: [],
      menuOpen: false,
      formActive: true,
      encounter: null,
      encounterActive: false,
      activeChar: "",
      mobileView: false,
      storageSession: null,
      editModeActive: false
    };
  },
  methods: {
    addChar(newChar) {
      this.newChar = newChar;
      this.encounterList.push(newChar);
      EventBus.$emit("add-to-list", this.encounterList);
      if (!this.storageSession) {
        startStorageSession(newChar);
        this.storageSession = true;
      } else {
        addCharToStorageSession(newChar);
      }
    },
    start() {
      if (!this.encounterActive) {
        this.encounterActive = true;
        let encounter = new Encounter(this.encounterList);
        this.encounter = encounter;
        this.activeChar = encounter.combatants[0];
        if (this.formActive) {
          this.formActive = false;
        }
        EventBus.$emit("update-active-char", this.activeChar.id);
      } else {
        this.endEncounter();
      }
    },
    next() {
      if (this.encounterActive) {
        const nextChar = this.encounter.advance();
        this.activeChar = nextChar;
        EventBus.$emit("update-active-char", this.activeChar.id);
      } else {
        return;
      }
    },
    previous() {
      if (this.encounterActive) {
        const lastChar = this.encounter.stepBack();
        this.activeChar = lastChar;
        EventBus.$emit("update-active-char", this.activeChar.id);
      } else {
        return;
      }
    },
    toggleMenu() {
      EventBus.$emit("toggle-menu");
    },
    toggleEditMode() {
      this.editModeActive = true;
      this.menuOpen = false;
      this.formActive = false;
    },
    endEncounter() {
      this.encounterActive = false;
    }
  },
  mounted() {
    if (window.innerWidth < 575) {
      this.mobileView = true;
    }
    const storage = window.localStorage;
    if (Object.keys(storage).includes("EncounterManager")) {
      this.storageSession = true;
      const storageData = resumeStorageSession();
      // storageData.encounterList.forEach(char => console.log(char));
      for (const char of storageData.encounterList) {
        this.encounterList.push(char);
      }
      const previousData = {
        ...storageData,
        encounterList: this.encounterList
      };
      EventBus.$emit("resume-session", previousData);
    }
    EventBus.$on("toggle-menu", () => (this.menuOpen = !this.menuOpen));
    EventBus.$on("reset-storage", () => {
      this.encounterList = [];
      this.storageSession = null;
    });
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
  font-family: "Staatliches";
}
.spacer {
  font-size: 50px;
  text-align: left;
  color: green;
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
  justify-content: center;
  padding-top: 10px;
  position: relative;
}
.hamburger {
  width: 40px;
  cursor: pointer;
  position: absolute;
  left: 0;
}
.line {
  width: 20px;
  height: 1.25px;
  background-color: $primary-red;
  margin: 5px;
}
.icon {
  width: 40px;
}
.logo {
  color: $primary-red;
}

.form-wrapper {
  width: 100%;
  max-width: 375px;
}
.dashboard-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include sm {
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
