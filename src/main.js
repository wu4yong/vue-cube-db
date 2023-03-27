import Vue from "vue";

import App from "./App.vue";

Vue.config.productionTip = false;

// UI组件引入
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 注册全局组件
import NavBar from "./components/NavBar";
import AsideMenu from "./components/AsideMenu";
Vue.component(NavBar.name, NavBar);
Vue.component(AsideMenu.name, AsideMenu);

// 创建vue实例
new Vue({
  render: (h) => h(App),
  NavBar,
}).$mount("#app");
