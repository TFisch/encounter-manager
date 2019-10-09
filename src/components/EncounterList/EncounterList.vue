<template>
  <div class="encounter-list">
    <div class="header-row" v-if="data.initiativeList.length > 0">
      <h2 class="header col-init">INIT</h2>
      <h2 class="header col-name">NAME</h2>
      <h2 class="header col-hp">HP</h2>
    </div>
    <EncounterCard
      v-for="character in data.initiativeList"
      v-bind:key="character.id"
      v-bind:character="character"
      v-bind:activeChar="data.activeId"
    />
  </div>
</template>
<script>
import EncounterCard from "../EncounterCard/EncounterCard";
import EventBus from "../EventBus";

export default {
  name: "EncounterList",
  components: { EncounterCard },
  data() {
    return {
      data: {
        initiativeList: [],
        activeId: null
      }
    };
  },
  methods: {
    populateList(charList) {
      const sortedList = charList.sort((a, b) => a.initiative - b.initiative);
      this.data.initiativeList = sortedList;
    }
  },
  mounted() {
    EventBus.$on("add-to-list", charList => {
      this.populateList(charList);
    });
    EventBus.$on("update-active-char", activeId => {
      this.activeId = activeId;
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