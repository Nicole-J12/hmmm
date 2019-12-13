import Vue from "vue";
import App from "./App.vue";
//路由
import router from "./router/router";
//element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../src/style/base.css"

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");