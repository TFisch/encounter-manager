<template>
  <div id="app">
    <EncounterDashboard />
  </div>
</template>

<script>
import EncounterDashboard from "./components/EncounterDashboard.vue";

export default {
  name: "app",
  components: {
    EncounterDashboard
  }
};
</script>

<style>
@font-face {
  font-family: "Oswald";
  src: url("./assets/fonts/Oswald/Oswald-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Heebo";
  src: url("./assets/fonts/Heebo/Heebo-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
