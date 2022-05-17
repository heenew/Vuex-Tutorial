import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // main에 vuex 적용시킴

Vue.config.productionTip = false;

export const EventBus = new Vue();

new Vue({
  router,
  store, // 저장소에 접근 가능해짐
  render: (h) => h(App),
}).$mount("#app");
