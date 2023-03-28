// 引入Vue
import Vue from "vue";

// 引入路由
import VueRouter from "vue-router";

// 使用插件
Vue.use(VueRouter);

// 引入组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import UserUpdate from "@/pages/Home/UserManager/Update";
import UserList from "@/pages/Home/UserManager/List";
import ManagerAdd from "@/pages/Home/ManagerData/Add";
import ManagerList from "@/pages/Home/ManagerData/List";
import MemberAdd from "@/pages/Home/Member/Add";
import MemberList from "@/pages/Home/Member/List";

// import TableManager from "@/pages/TableManager";

// 需要重写VueRouter.prototype原型对象身上的push|replace方法
// 先把VueRouter.prototype身上的push|replace方法进行保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
  //第一个形参：路由跳转的配置对象（query|params）
  //第二个参数：undefined|箭头函数（成功的回调）
  //第三个参数:undefined|箭头函数（失败的回调）
  if (resolve && reject) {
    //push方法传递第二个参数|第三个参数（箭头函数）
    //originPush：利用call修改上下文，变为(路由组件.$router)这个对象，第二参数：配置对象、第三、第四个参数：成功和失败回调函数
    originPush.call(this, location, resolve, reject);
  } else {
    //push方法没有产地第二个参数|第三个参数
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

// 重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

// 配置路由
export default new VueRouter({
  routes: [
    // 默认跳转
    {
      path: "*",
      redirect: "/home",
    },
    // 主页
    {
      path: "/home",
      component: Home,
      // 是否展示路由
      meta: { isShow: true },
    },
    // 登录组件
    {
      path: "/login",
      component: Login,
      meta: { isShow: true },
    },
    // 注册主键
    {
      path: "/register",
      component: Register,
      meta: { isShow: true },
    },
    // 用户管理组件
    {
      path: "/user-update",
      component: UserUpdate,
      meta: { isShow: true },
    },
    {
      path: "/user-list",
      component: UserList,
      meta: { isShow: true },
    },
    // 数据管理组件
    {
      path: "/manager-add",
      component: ManagerAdd,
      meta: { isShow: true },
    },
    {
      path: "/manager-list",
      component: ManagerList,
      meta: { isShow: true },
    },
    // 会员管理组件
    {
      path: "/member-add",
      component: MemberAdd,
      meta: { isShow: true },
    },
    {
      path: "/member-list",
      component: MemberList,
      meta: { isShow: true },
    },
  ],
});
