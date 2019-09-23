import Vue from "vue";
import VueRouter from "vue-router";

// Third Party Components
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// Components
import App from "./App.vue";

// Init Components
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");