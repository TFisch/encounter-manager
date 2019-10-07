<template>
  <div class="controller">
    <div class="button-wrapper">
      <img
        src="./../assets/icons/next.svg"
        class="back-icon controller-icon"
        v-on:click="handlePrevious"
      />
      <img
        src="./../assets/icons/next.svg"
        class="forward-icon controller-icon"
        v-on:click="handleNext"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Controller",
  props: ["next"],
  methods: {
    handleNext() {
      this.$emit("next");
    },
    handlePrevious() {
      this.$emit("previous");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/variables.scss";

.controller {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: #1a1a1d;
  border-top: solid $light-grey 1px;
  display: flex;
  align-items: center;
}
.button-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}
.controller-icon {
  height: 50px;
}
.back-icon {
  transform: scaleX(-1);
}
</style>