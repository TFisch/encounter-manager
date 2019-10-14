<template>
  <div>
    <div class="mobile-menu-button" v-on:click="handleClick(label)">{{label}}</div>
  </div>
</template>

<script>
export default {
  name: "MobileMenuButton",
  props: ["label", "click"],
  methods: {
    handleClick(label) {
      this.$emit(label);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/variables.scss";
.mobile-menu-button {
  font-family: "OpenSans-Semi";
  color: $white;
  font-size: $fnt-sm;
  border: solid $white 0.8px;
  background: $grey;
  width: 50px;
  padding: 8px;
  border-radius: 10px;
  opacity: 0.7;
}
</style>