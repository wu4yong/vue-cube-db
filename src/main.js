import Vue from "vue";

import App from "./App.vue";

Vue.config.productionTip = false;

// UI组件引入
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 注册全局组件
import NavBar from "@/components/NavBar";
import AsideMenu from "@/components/AsideMenu";
Vue.component(NavBar.name, NavBar);
Vue.component(AsideMenu.name, AsideMenu);

//引入路由相关文件
import router from "@/router";
//引入仓库进行注册
import store from "@/store";

//引入MockServer.js----mock数据
import "@/mock/mockServe";

// 测试接口
// import { reqTableInfoList } from "@/api";
// let result = reqTableInfoList();
// console.log(result);

// 创建vue实例
new Vue({
  render: (h) => h(App),
  //需要把router进行注册
  //可以让全部的组件（非路由|路由组件）都可以获取到$route|$router属性
  //$route(路由)：可以获取到路由信息（path、query、params）
  //$router:进行编程式导航路由跳转push||replace
  router,
  //在入口文件这里注册store,在每一个组件的身上都拥有一个$store这个属性
  store,
  NavBar,
}).$mount("#app");
