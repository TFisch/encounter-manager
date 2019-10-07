<template>
  <div class="input-wrapper">
    <label>{{label}}</label>
    <input
      class="newChar-input"
      :style="{width:width}"
      v-bind:name="name"
      v-bind:type="type || 'text'"
    />
  </div>
</template>
<script>
export default {
  name: "NewCharInput",
  props: ["label", "name", "type", "width"]
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/variables.scss";
label {
  text-align: left;
  color: $primary-red;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}
.newChar-input {
  border: solid $white 1px;
  font-family: "HeeboBold";
  background: $grey;
  height: 30px;
  border-radius: 6px;
  padding: 0 0 0 5px;
  color: $white;
}
</style>
