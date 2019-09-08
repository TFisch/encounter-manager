<template>
  <div class="new-char-wrapper">
    <h1>Character Form</h1>
    <form class="char-form" ref="form" v-on:click.prevent="handleSubmit">
      <NewCharInput label="NAME" name="name" v-model="name" />
      <NewCharInput label="INITIATIVE" name="initiative" v-model="initiative" type="number" />
      <div class="submit-row">
        <button>Primary</button>
      </div>
    </form>
  </div>
</template>
<script>
import NewCharInput from "./NewCharInput";
import Character from "../../classes/Character";
import { uuid } from "vue-uuid";

export default {
  name: "NewCharacterForm",
  components: { NewCharInput },
  data() {
    return {
      name: "",
      initiative: ""
    };
  },
  methods: {
    handleSubmit() {
      const charName = this.$refs.form.name.value;
      const charInitiative = this.$refs.form.initiative.value;
      const charId = this.$uuid.v4();
      const newChar = new Character(charName, charInitiative, charId);
    }
  }
};
</script>
<style lang="css" scoped>
.new-char-wrapper {
  border: solid red 1px;
}
.char-form {
  display: flex;
  flex-direction: column;
  border: solid magenta 1px;
  width: 300px;
}
.newChar-input {
  border: solid black 1px;
}
.submit-row {
  border: solid green 1px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.submit {
  width: 75px;
  margin-right: 20px;
}
</style>
