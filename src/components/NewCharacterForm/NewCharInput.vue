<template>
  <div class="input-wrapper">
    <label>{{label}}</label>
    <input class="newChar-input" v-bind:name="name" v-bind:type="type || 'text'" />
  </div>
</template>
<script>
export default {
  name: "NewCharInput",
  props: ["label", "name", "type"]
};
</script>
<style lang="css" scoped>
.input-wrapper {
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin: 20px 0;
}
.newChar-input {
  border: solid black 1px;
}
</style>
