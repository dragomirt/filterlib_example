<template>
  <div id="app">
    <home></home>
    <blur-filter></blur-filter>
    <oil-filter></oil-filter>
  </div>
</template>

<script>
  
// Imported Views
import Home from "./components/Home.vue";

// Filters
import BlurFilter from "./components/BlurFilter.vue";
import OilFilter from "./components/OilFilter.vue";

export default {
  name: "app",
  components: {
    "home": Home,
    'blur-filter': BlurFilter,
    'oil-filter': OilFilter
  }
};
</script>