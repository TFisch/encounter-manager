<template>
  <div class="controller">
    <div class="button-wrapper">
      <img
        src="./../assets/icons/next.svg"
        class="back-icon controller-icon"
        v-on:click="handlePrevious"
      />
      <img
        v-if="menuOpen"
        src="./../assets/icons/menu.svg"
        class="menu-icon"
        v-on:click="handleMenuToggle"
      />
      <img
        v-else
        src="./../assets/icons/menu_inactive.svg"
        class="menu-icon"
        v-on:click="handleMenuToggle"
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
  props: ["next", "menuOpen"],
  methods: {
    handleNext() {
      this.$emit("next");
    },
    handlePrevious() {
      this.$emit("previous");
    },
    handleMenuToggle() {
      this.$emit("toggle-menu");
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
  z-index: 55;
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
  align-items: center;
}
.controller-icon {
  height: 50px;
}
.menu-icon {
  height: 40px;
}
.back-icon {
  transform: scaleX(-1);
}
</style>