<template>
  <div id="app">
    <home></home>
    <blur-filter></blur-filter>
  </div>
</template>

<script>

  import EventBus from './eventBus.js'

// Imported Views
import Home from "./components/Home.vue";
import BlurFilter from "./components/BlurFilter.vue";

export default {
  name: "app",
  components: {
    "home": Home,
    'blur-filter': BlurFilter
  }
};
</script>