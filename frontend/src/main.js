import Vue from "vue";
import App from "./App";
import { createProvider } from "./vue-apollo";

Vue.config.productionTip = true;

new Vue({
  el: "#app",
  apolloProvider: createProvider(),
  render: h => h(App)
});
