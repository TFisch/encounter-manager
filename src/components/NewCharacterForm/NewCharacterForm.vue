<template>
  <div class="new-char-wrapper">
    <form class="char-form" ref="form" v-on:submit.prevent="handleSubmit">
      <NewCharInput class="name-input" label="NAME" name="name" v-model="name" />
      <div class="stat-wrapper">
        <NewCharInput
          class="init-input"
          label="INITIATIVE"
          name="initiative"
          v-model="initiative"
          type="number"
        />
        <NewCharInput class="hp-input" label="HP" name="hp" v-model="hp" type="number" />
      </div>
      <div class="submit-row">
        <button class="submit">SUBMIT</button>
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
      initiative: "",
      hp: 0
    };
  },
  methods: {
    handleSubmit() {
      const charName = this.$refs.form.name.value;
      const charInitiative = this.$refs.form.initiative.value;
      const charHp = this.$refs.form.hp.value;
      if (charName === "" || charInitiative === "") {
        return;
      }
      const charId = this.$uuid.v4();
      const newChar = new Character(charName, charInitiative, charId, charHp);
      this.$refs.form.name.value = "";
      this.$refs.form.initiative.value = "";
      this.$refs.form.hp.value = "";
      this.$emit("add-char", newChar);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/variables.scss";

.new-char-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.char-form {
  display: flex;
  flex-direction: column;
  width: 250px;
}
.newChar-input {
  border: solid black 1px;
}

.name-input {
  width: 250px;
}

.init-input,
.hp-input {
  width: 50px;
}

.stat-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.submit-row {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.submit {
  width: 80px;
  border: solid $white 1px;
  border-radius: 5px;
  font-family: "Heebo";
  background: $grey;
  color: $primary-red;
}
</style>
