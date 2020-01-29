<template>
  <div class="encounter-list">
    <div class="header-row" v-if="data.initiativeList.length > 0">
      <h2 class="header col-init">INIT</h2>
      <h2 class="header col-name">NAME</h2>
      <h2 class="header col-hp">HP</h2>
    </div>
    <draggable
      v-model="data.iniativeList"
      group="people"
      :change="editList"
      @start="drag=true"
      @end="onEnd"
      :component-data="getComponentData()"
    >
      <EncounterCard
        v-for="character in data.initiativeList"
        v-bind:key="character.id"
        v-bind:character="character"
        v-bind:activeChar="data.activeId"
      />
    </draggable>
  </div>
</template>
<script>
import EncounterCard from "../EncounterCard/EncounterCard";
import EventBus from "../EventBus";
import draggable from "vuedraggable";
import { updateEncounterList } from "../StorageSession";

export default {
  name: "EncounterList",
  components: { EncounterCard, draggable },
  data() {
    return {
      data: {
        initiativeList: [],
        activeId: null
      }
    };
  },
  methods: {
    populateList(charList = null) {
      if (charList) {
        // const sortedList = charList.sort((a, b) => a.initiative - b.initiative);
        this.data.initiativeList = charList;
      }
    },
    editList() {
      console.log("edit list");
    },
    getComponentData() {
      return {
        on: {
          change: this.onChange
        }
      };
    },
    onChange(event) {
      console.log("change!");
      // console.log(event);
    },
    onEnd(event) {
      const oldIndex = event.oldIndex;
      const newIndex = event.newIndex;
      this.changeIndex(oldIndex, newIndex);
    },
    changeIndex(oldIndex, newIndex) {
      if (newIndex >= this.data.initiativeList.length) {
        var k = newIndex - this.data.initiativeList.length + 1;
        while (k--) {
          this.data.initiativeList.push(undefined);
        }
      }
      this.data.initiativeList.splice(
        newIndex,
        0,
        this.data.initiativeList.splice(oldIndex, 1)[0]
      );
      updateEncounterList(this.data.initiativeList);
    }
  },
  mounted() {
    EventBus.$on("add-to-list", charList => {
      this.populateList(charList);
    });
    EventBus.$on("update-active-char", activeId => {
      this.activeId = activeId;
    });
    EventBus.$on("reset-storage", () => {
      this.populateList([]);
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/variables.scss";

.encounter-list {
  font-family: "OpenSans";
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
  overflow: auto;
}
.header-row {
  display: flex;
  width: 80%;
}
.header {
  font-size: $fnt-sm;
  color: $primary-red;
}
.col-init,
.col-hp {
  flex-grow: 1;
}

.col-init {
  text-align: left;
}

.col-name {
  flex-grow: 2;
  text-align: left;
}

.col-hp {
  text-align: right;
}
</style>