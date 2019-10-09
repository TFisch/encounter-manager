<template>
  <div class="mobile-menu-wrapper">
    <div class="button-row">
      <MobileMenuButton label="Reset" />
      <MobileMenuButton label="Edit" />
      <MobileMenuButton label="Save" />
    </div>
  </div>
</template>
<script>
import MobileMenuButton from "./MobileMenuButton";
import EventBus from "./EventBus";
export default {
  name: "MobileMenu",
  components: { MobileMenuButton },
  methods: {
    toggleMenu() {
      EventBus.$emit("toggle-menu");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.mobile-menu-wrapper {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 44;
  background-color: $grey;
}
.button-row {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 100px;
}
.close {
  position: absolute;
  left: 17px;
  top: 10px;
  right: 0px;
  bottom: 0px;
  width: 32px;
  height: 32px;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
</style>