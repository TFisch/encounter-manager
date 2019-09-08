<template>
  <div>
    <NewCharacterForm />
    <EncounterList />
  </div>
</template>

<script>
import Character from "../classes/Encounter";
import NewCharacterForm from "./NewCharacterForm/NewCharacterForm.vue";
import EncounterList from "./EncounterList/EncounterList";
const testChar = new Character("billy");

export default {
  name: "EncounterDashboard",
  components: { NewCharacterForm, EncounterList },
  props: {
    msg: String
  },
  methods: {
    greet: function() {
      console.log(testChar);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
