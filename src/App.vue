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
  font-family: "OpenSans-Semi";
  src: url("./assets/fonts/Open_Sans/OpenSans-SemiBold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "OpenSans-Bold";
  src: url("./assets/fonts/Open_Sans/OpenSans-Bold.ttf") format("truetype");
  font-weight: bold;
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
