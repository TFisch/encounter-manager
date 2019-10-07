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
@import "./assets/styles/normalize.css";

@font-face {
  font-family: "Staatliches";
  src: url("./assets/fonts/Staatliches/Staatliches-Regular.ttf")
    format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "OpenSans";
  src: url("./assets/fonts/Open_Sans/OpenSans-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

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

@font-face {
  font-family: "HeeboBold";
  src: url("./assets/fonts/Heebo/Heebo-Bold.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #1a1a1d;
  height: 100%;
}
</style>
